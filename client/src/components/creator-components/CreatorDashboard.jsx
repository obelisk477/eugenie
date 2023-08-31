import { Link } from "react-router-dom";
import { Row, Col, Layout, Card } from "antd";
import CreatorMessages from "./CreatorMessages";
const { Content } = Layout;

import CampaignCards from "../../components/CampaignCards";
import {
  QUERY_ALL_BRAND_CAMPAIGNS,
  QUERY_ALL_CAMPAIGNS,
  QUERY_ALL_CHATS,
} from "../../graphql/queries";
// import { APPLY_TO_CAMPAIGN, ADD_TO_ACCEPTED } from '../../graphql/mutations';
// import { useMutation } from '@apollo/client';
import { useQuery } from "@apollo/client";
import { useCurrentUserContext } from "../../context/CurrentUser";
const { Meta } = Card;

function CreatorDashboard() {
  const { currentUser } = useCurrentUserContext();
  const isBrand = useCurrentUserContext().isBrand;

  const query = isBrand ? QUERY_ALL_BRAND_CAMPAIGNS : QUERY_ALL_CAMPAIGNS;

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

  if (!loading) {
    console.log(chatData.getAllChats);
  } else {
    console.log('it works')
  }


  const big_styles = {
    backgroundColor: "lightgray",
    alignSelf: "center",
    height: "76vh",
    padding: "4vh",
    margin: "2vh",
  };
  const styles = {
    backgroundColor: "lightgrey",
    height: "37vh",
    padding: "4vh",
    margin: "2vh",
  };

  return (
    <>
      <main className="dashboard">
        <Row justify="center" align="top" style={{ alignItems: "center" }}>
          <Col span={18}>
            <Content title="Content title" style={big_styles}>
              <h2>
                {
                  <Link to="/dashboard/campaign-search">
                    Find Campaigns & Brands
                  </Link>
                }
              </h2>
              <CampaignCards />
            </Content>
          </Col>
          <Col span={6}>
            <Content title="Content title" style={styles}>
              <h2>
                {
                  <Link to="/dashboard/active-campaigns">
                    My Brands & Campaigns
                  </Link>
                }
              </h2>
              {totalCampaigns.map((campaign) => (
                <Meta key={campaign._id} title={campaign.title} />
              ))}
            </Content>
            <Content title="Content title" style={styles}>
              <h2>{<Link to="/dashboard/chats">Chats</Link>}</h2>
              {loading ? (
                <div>Loading...</div>
              ) : (
                <CreatorMessages chats={chats} />
              )}
            </Content>
          </Col>
        </Row>
      </main>
    </>
  );
}

export default CreatorDashboard;
