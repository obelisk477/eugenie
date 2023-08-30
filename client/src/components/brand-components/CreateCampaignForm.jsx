import { useState } from 'react';
import { useMutation } from '@apollo/client';
import moment from 'moment'; 

import { CREATE_CAMPAIGN } from '../../graphql/mutations';

import { useCurrentUserContext } from '../../context/CurrentUser';

const { TextArea } = Input;
import {
    DatePicker,
    Form,
    Input,
    InputNumber,
    Button
} from 'antd';


function CreateCampaignForm() {

    const { currentUser } = useCurrentUserContext();
    
    const [formState, setFormState] = useState({
        title: '',
        description: '',
        applyBy: null,
        postBy: null,
        requirements: '',
        deliverables: '',
        compensation: 0,
    });

    const [createCampaign] = useMutation(CREATE_CAMPAIGN);


    const handleFormCreate = async event => {
        event.preventDefault();
        try {
          const postBy = formState.postBy;
          const payoutBy = moment(postBy).add(2, 'weeks');


          await createCampaign({
            variables: {
                brand: currentUser._id,
                title: formState.title,
                description: formState.description,
                applyBy: moment(formState.applyBy).toISOString(),
                postBy: moment(formState.postBy).toISOString(),
                requirements: formState.requirements,
                deliverables: formState.deliverables,
                compensation: formState.compensation,
                payoutBy: payoutBy.toISOString(),
            },
          });
           //    sorry about this I just can't get refetch to work
            window.location = window.location.href; 

        } catch (e) {
        // eslint-disable-next-line no-console
          console.log(e);
        }
      };
    
      const handleChange = (key, value) => {
        setFormState({ ...formState, [key]: value });
      };

      const handleDateChange = (date, key) => {
        setFormState({ ...formState, [key]: date });
      };

    
    return (
        <>
        <Form
      labelCol={{ span: 4,}} wrapperCol={{ span: 14,}} layout="horizontal" style={{ maxWidth: 600,}}>
      <Form.Item key="title" label="Title"><Input onChange={event => handleChange('title', event.target.value)} /></Form.Item>
      <Form.Item key="description" label="Description"><TextArea rows={4} onChange={event => handleChange('description', event.target.value)} /></Form.Item>
      <Form.Item key="applyBy" label="Apply By">
        <DatePicker onChange={date => handleDateChange(date, 'applyBy')} />
      </Form.Item>
      <Form.Item key="postBy" label="Post By">
        <DatePicker onChange={date => handleDateChange(date, 'postBy')} />
      </Form.Item>
      <Form.Item key="requirements" label="Requirements"><TextArea rows={4} onChange={event => handleChange('requirements', event.target.value)}/></Form.Item>
      <Form.Item key="deliverables" label="Deliverables"><TextArea rows={4} onChange={event => handleChange('deliverables', event.target.value)}/></Form.Item>
      <Form.Item key="compensation" label="Compensation">
        <InputNumber onChange={value => handleChange('compensation', value)} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType='submit' onClick={handleFormCreate}>Create Campaign</Button>
      </Form.Item>

    </Form>
        </>
    )
  }
  
  export default CreateCampaignForm