import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_BRAND_CAMPAIGNS, QUERY_ALL_CAMPAIGNS } from '../graphql/queries';
import { useMutation } from '@apollo/client';
import { APPLY_TO_CAMPAIGN, DELETE_CAMPAIGN, ADD_TO_ACCEPTED } from '../graphql/mutations';
import { useCurrentUserContext } from '../context/CurrentUser';
// import { Link } from 'react-router-dom';
import { Row, Col, Card, Modal, Button } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
const { Meta } = Card;
// const {Content} = Layout


function CampaignCards() {

    
    const { currentUser } = useCurrentUserContext();

    //Apply to campaign
    const [applyToCampaign, { error: applicationError }] = useMutation(APPLY_TO_CAMPAIGN);
    const [addToAccepted, { error: acceptedError }] = useMutation(ADD_TO_ACCEPTED);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [hasApplied, setHasApplied] = useState([false, false]);
    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleOk = () => {
      setIsModalOpen(false);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };

    const handleAccept = async event => {
        event.preventDefault()

        try {

            console.log(event.target.parentNode.dataset.applicantid)
            console.log(event.target.parentNode.dataset.campaignid)

            const acceptedResponse = await addToAccepted({
                variables: {
                    _id: event.target.parentNode.dataset.campaignid,
                    accepted: event.target.parentNode.dataset.applicantid
                }
            })

            console.log(acceptedResponse)

        } catch (e) {
            console.log(acceptedError)
        }
    }

    const handleClick = async event => {
        event.preventDefault();
        // Set single login function to handle 
        const elems = document.querySelectorAll('h2[data-id]')

        
        try {
            
            const mutationResponse = await applyToCampaign({
                variables: {
                    _id: event.target.dataset.id,
                    applicants: currentUser._id
                },
            });
            showModal()
            const updater = elems[0].dataset.id == event.target.dataset.id ? [!hasApplied[0], hasApplied[1]] : [hasApplied[0], !hasApplied[1]]
            setHasApplied(updater)
        } catch (e) {
          console.log(applicationError);
        }
      };


    const styles = {
        row: {
            justifyContent: 'space-evenly'
        },
        col: {
            marginLeft: '20vh'
        },
        h2: {
            cursor: 'not-allowed',
            color: 'grey'
        },
        div: {
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center'
        }
    }

    //Show campaigns based on which user is logged In
    let userType = ""

    if ( currentUser.brandName == null ) {
        userType = 'creator'
    } else  {
        userType = 'brand'
    }

    const query = userType === 'brand' ?  QUERY_ALL_BRAND_CAMPAIGNS : QUERY_ALL_CAMPAIGNS;

    const { data, refetch } = useQuery(query, {
        variables: { 'brand':  currentUser._id }

    });

    console.log(data)


    const campaigns = data? (userType === 'brand' ? data.getAllCampaignsByBrand : data.getAllCampaigns) : [];

    //Delete campaign 

    const [deleteCampaign] = useMutation(DELETE_CAMPAIGN, {
        refetchQueries: [{ query }]
    }
        );
    const [setCampaigns] = useState([]);


    const handleDelete = async campaign => {
    
        await deleteCampaign({
            variables: {
            _id: campaign
            },
        });

         await refetch(); 
       if (userType === 'brand') {
           setCampaigns(data.getAllCampaignsByBrand);
       } else {
           setCampaigns(data.getAllCampaigns);
       }
    setCampaigns();
    }


      
    return (
        <>
        {campaigns.length > 0 ? (
            <>
            <Row className='mainContainer' gutter={20} style = {styles.row}>
                {campaigns.map((campaign, i) => (  
                    // eslint-disable-next-line react/jsx-key

                    <Col key={campaign._id} span={8}>
                        <Card id='card' title={campaign.title} actions={userType === 'brand' ? [ 
                            // <EditOutlined key="edit" />,
                            <DeleteOutlined key="delete" onClick={() => handleDelete(campaign._id)}/>,
                                ] : hasApplied[i]? [<h2 style={styles.h2} key={i}>Applied</h2>]:[<h2 key={i} data-id={campaign._id} onClick={handleClick}>Apply</h2>]} >
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
                                    <br></br>
                                    {campaign.applicants ? (
                                        <>
                                            <Meta title='Applicants:'
                                            description={campaign.applicants.map(applicant => (
                                                <div style={styles.div} key={applicant._id} >
                                                    <p>{applicant.firstName} {applicant.lastName}</p>
                                                    <Button onClick={handleAccept} data-applicantId={applicant._id} data-campaignId={campaign._id} type="primary" size={'small'}>Accept</Button>
                                                </div>

                                            ))}
                                            />
                                        </>
                                    ) : (
                                        <br />
                                    )}
                        </Card>
                    </Col>
                        ))}
            </Row>
            <Modal title="Success" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>Successfully applied!</p>
            </Modal>
            </>
                ) : (
                    <p>No campaigns available.</p>
         )}
        </>
    )
  }
  
  export default CampaignCards
