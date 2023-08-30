// import { useState } from 'react';

import CampaignCards from '../../components/CampaignCards';

import { Link } from 'react-router-dom';
import { Row, Col, Layout } from 'antd';
const {Content} = Layout

function BrandDashboard() {

    const big_styles = {
        backgroundColor:'lightgray',
        alignSelf: 'center',
        height: '76vh',
        padding: '4vh',
        margin: '2vh'
      }
    const styles = {
        backgroundColor:'lightgrey',
        height: '37vh',
        padding: '4vh',
        margin: '2vh',
      }

    return (
        <>
            <main className="dashboard">
                <Row justify="center" align="top" style={{alignItems: 'center'}}>
                    <Col span={18} >
                        <Content title="Content title" style={big_styles}  >
                            <h2>{<Link to="/dashboard/my-campaigns">My Campaigns</Link>}</h2>
                            <CampaignCards />
                        </Content>
                    </Col>
                    <Col span={6}>
                        <Content title="Content title" style={styles}>
                            <h2>{<Link to="/dashboard/creator-search">Find Creators</Link>}</h2>
                            <p>Content content</p>
                            <p>Content content</p>
                        </Content>
                        <Content title="Content title" style={styles}>
                            <h2>{<Link to="/dashboard/chats">Chats</Link>}</h2>
                            <p>Content content</p>
                            <p>Content content</p>
                        </Content>
                    </Col>
                </Row>
            </main>
        </>
    )
  }
  
  export default BrandDashboard