// import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_BRAND_CAMPAIGNS, QUERY_ALL_CAMPAIGNS } from '../graphql/queries';
import { useCurrentUserContext } from '../context/CurrentUser';
// import { Link } from 'react-router-dom';
import { Row, Col, Card } from 'antd';
import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
const { Meta } = Card;
// const {Content} = Layout


function CampaignCards() {

    const { currentUser } = useCurrentUserContext();
    console.log(currentUser._id)

    const userType = currentUser.isBrand ? 'brand' : 'creator';

    const query = userType === 'brand' ? QUERY_ALL_BRAND_CAMPAIGNS : QUERY_ALL_CAMPAIGNS;

    const { data } = useQuery(query, {
        variables: { [userType]:  currentUser._id }
    });
    const campaigns = data? (userType === 'brand' ? data.getAllCampaignsByBrand : data.getAllCampaigns) : [];

      
    return (
        <>
        {campaigns.length > 0 ? (
            <>
            <Row className='mainContainer' gutter={16}>
                {campaigns.map(campaign => (  
                    // eslint-disable-next-line react/jsx-key
                    <Col key={campaign._id} span={8}>
                        <Card id='card' title={campaign.title} bordered={false} actions={userType === 'brand' ? [ 
                            <EditOutlined key="edit" />,
                            <DeleteOutlined key="delete" />,
                                ] : [
                            <PlusOutlined key='apply' />,
                                ]} >
                                    <Meta description={campaign.description}/>
                                    <br></br>
                                    <Meta title={'Apply By: ' + campaign.applyBy + " | " + " Post By: " + campaign.applyBy }/>
                                    <br></br>
                                    <Meta title='Requirements:'/>{campaign.requirements}
                                    <br></br>
                                    <br></br>
                                    <Meta title='Deliverables:'/>{campaign.deliverables}
                                    <br></br>
                                    <br></br>
                                    <Meta title={'Compensation: $' + campaign.compensation} description={'Payout By: ' + campaign.payoutBy}/>
                                </Card>
                    </Col>
                        ))}
            </Row>
            </>
                    ) : (
                        <p>No campaigns available.</p>
         )}
        </>
    )
  }
  
  export default CampaignCards



//   {allBrandCampaigns.length > 0 ? (
//     <>
//         {allBrandCampaigns.map(campaign => (
//              <li key={campaign._id}>
//                           <h3>{campaign.title}</h3>
//                           <p>{campaign.description}</p>
//                           {campaign.applyBy} 
//                         </li>
//                 ))}
//     </>
//             ) : (
//                 <p>No campaigns available.</p>
//         )}