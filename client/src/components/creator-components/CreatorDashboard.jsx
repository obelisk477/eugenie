import { Link } from "react-router-dom";
import { Row, Col, Layout, Card } from "antd";
import { FileAddOutlined } from '@ant-design/icons';
import CreatorMessages from "./CreatorMessages";
const { Content } = Layout;


import {
  QUERY_ALL_BRAND_CAMPAIGNS,
  QUERY_ALL_CAMPAIGNS,
  QUERY_ALL_CHATS,
  // QUERY_CURRENT_CHAT,
  // QUERY_BRANDS,
 
} from "../../graphql/queries";
// import { APPLY_TO_CAMPAIGN, ADD_TO_ACCEPTED } from '../../graphql/mutations';
// import { useMutation } from '@apollo/client';
import { useQuery } from "@apollo/client";
import { useCurrentUserContext } from "../../context/CurrentUser";
const { Meta } = Card;


function CreatorDashboard() {

    const { currentUser } = useCurrentUserContext();
    const isBrand = useCurrentUserContext().isBrand
    
    const query = isBrand ?  QUERY_ALL_BRAND_CAMPAIGNS : QUERY_ALL_CAMPAIGNS;


  const { data } = useQuery(query, {
    variables: { brand: currentUser._id },
  });

  let totalCampaigns = [];

  if (data) {
    let campaignArr = data.getAllCampaigns;
    campaignArr.forEach((campaign) => {
      campaign.accepted.forEach((accepted) => {
        if (accepted._id == currentUser._id) {
          totalCampaigns.push(campaign);
        }
      });
    });
  }

  // let newData = data? data.getAllCampaigns.map(campaign => campaign.accepted) : false

  // console.log(newData)

  const { loading, data: chatData } = useQuery(QUERY_ALL_CHATS);
  const chats = chatData?.getAllChats || [];
  console.log(chatData);
  console.log('>>>>>>>>',chats);
  // console.log('>>>>>>>>>>>>', chats[0].creator._id);
  // const connectedBrand = chats[0].brand._id;
  // const connectedUser = chats[0].creator._id;
//   const { loading, data:brand } = useQuery(QUERY_BRANDS);
//   const brandData = brand?.getAllBrands || [];
// if (!loading) {
//   console.log(brandData)
// } else {
//   console.log('brands here')
// }
  // const { data:singleChat } = useQuery(QUERY_CURRENT_CHAT, {
  //   variables: { creator: currentUser._id, brand: chats[0].brand._id }
  // });
  // const usersChat = singleChat?.getChat || [];
  // console.log('>>>>>>>>', usersChat);
  // if (!loading) {
  //   console.log(chatData.getAllChats);
  // } else {
  //   console.log('it works')
  // }
  const big_styles = {
    backgroundColor:'#efeded',
    alignSelf: 'center',
    height: '85vh',
    padding: '4vh',
    margin: '2vh'
  }
  const little_styles = {
    backgroundColor:'#efeded',
    height: '14vh',
    padding: '2vh',
    margin: '2vh'
  }
const styles = {
    backgroundColor:'#efeded',
    height: '68vh',
    padding: '2vh',
    margin: '2vh',
  }

return (
        <main className="dashboard">
            <Row justify="center" align="top" style={{alignItems: 'center'}}>

                <Col id='bigSquare' span={18} >
                    <Content title="Content title" style={big_styles}  >
                    <h2 id='dashboardTitle'>My Campaigns</h2>
                    <Row className='mainContainer' gutter={20} style = {styles.row}>
            {totalCampaigns.map((campaign, i) => (  
                // eslint-disable-next-line react/jsx-key
                <Col key={campaign._id} span={8}>
                    <Card className='tears' id='card' title={campaign.title} actions={[<FileAddOutlined key="setting" />]} >
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
                    </Card>
                </Col>
                    ))}
        </Row>
                    </Content>
                </Col>
                <Col span={6}>
                    <Content title="Content title" style={little_styles}>
                    <h2 id='dashboardTitle'>{<Link to="/dashboard/campaign-search">Find Campaigns & Brands</Link>}</h2>
                    </Content>
                    <Content title="Content title" style={styles}>
                        <h2 id='dashboardTitle'>{<Link to="/dashboard/chats">Chats</Link>}</h2>
                        {loading ? (
                <div>Loading...</div>
              ) : (
                <CreatorMessages chats={chats} />
              )}
                    </Content>
                </Col>
            </Row>
        </main>
)
}

export default CreatorDashboard