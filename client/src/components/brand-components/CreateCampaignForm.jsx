import { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import moment from 'moment'; 

import { CREATE_CAMPAIGN } from '../../graphql/mutations';
import { QUERY_ALL_BRAND_CAMPAIGNS } from '../../graphql/queries';

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

    console.log(currentUser)
    
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
           // will change later
            window.location.reload(); 

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
        <Form id='createForm'
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