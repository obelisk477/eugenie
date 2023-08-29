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
          const mutationResponse = await createCampaign({
            variables: {
                brand: currentUser._id,
                title: formState.title,
                description: formState.description,
                applyBy: moment(formState.applyBy).toISOString(),
                postBy: moment(formState.postBy).toISOString(),
                requirements: formState.requirements,
                deliverables: formState.deliverables,
                compensation: formState.compensation,
            },
          });
          const { token, currentBrand } = mutationResponse.data.createCampaign;
          currentUser(currentBrand, token);
        } catch (e) {
        // eslint-disable-next-line no-console
          console.log(e);
        }
      };
    
      const handleChange = event => {
        const { key, value } = event.target;
        setFormState({ ...formState, [key]: value });
      };
    

    
    return (
        <>
        <Form
      labelCol={{ span: 4,}} wrapperCol={{ span: 14,}} layout="horizontal" style={{ maxWidth: 600,}}>
      <Form.Item key="title" label="Title"><Input onChange={event => handleChange('title', event.target.value)} /></Form.Item>
      <Form.Item key="description" label="Description"><TextArea rows={4} /></Form.Item>
      <Form.Item key="applyBy" label="Apply By">
        <DatePicker />
      </Form.Item>
      <Form.Item key="postBy" label="Post By">
        <DatePicker />
      </Form.Item>
      <Form.Item key="requirements" label="Requirements"><TextArea rows={4} /></Form.Item>
      <Form.Item key="deliverables" label="Deliverables"><TextArea rows={4} /></Form.Item>
      <Form.Item key="compensation" label="Compensation">
        <InputNumber />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType='submit' onClick={handleFormCreate}>Create Campaign</Button>
      </Form.Item>

    </Form>
        </>
    )
  }
  
  export default CreateCampaignForm