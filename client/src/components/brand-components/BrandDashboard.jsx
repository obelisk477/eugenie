// import { useState } from 'react';

import CampaignCards from '../../components/CampaignCards';
import CreatorsSubSearch from './CreatorsSubSearch';
import { Link } from 'react-router-dom';
import { Row, Col, Layout, Avatar } from 'antd';
const {Content} = Layout;
import { BookOutlined,
    SearchOutlined,
    MessageOutlined,
 } from '@ant-design/icons';



function BrandDashboard() {

    const big_styles = {
        backgroundColor:'#efeded',
        alignSelf: 'center',
        height: '100vh',
        padding: '4vh',
        margin: '2vh'
      }
    const styles = {
        backgroundColor:'#efeded',
        height: '49vh',
        padding: '4vh',
        margin: '2vh',
      }

    return (
        <>
            <main className="dashboard">
                <Row justify="center" align="top" style={{alignItems: 'center'}}>
                    <Col id='bigSquare' span={18} >
                        <Content title="Content title" style={big_styles}  >
                            <h2 id='dashboardTitle'>{<Link to="/dashboard/my-campaigns"><Avatar style={{ backgroundColor: '#efeded', color: 'black' }} icon={<BookOutlined />} />
                                My Campaigns</Link>}</h2>
                            <CampaignCards />
                        </Content>
                    </Col>
                    <Col span={6}>
                        <Content title="Content title" style={styles}>
                            <h2>{<Link to="/dashboard/creator-search">
                            <Avatar style={{ backgroundColor: '#efeded', color: 'black' }} icon={<SearchOutlined />} />
                                Find Creators</Link>}</h2>
                            <CreatorsSubSearch />
                        </Content>
                        <Content title="Content title" style={styles}>
                            <h2>{<Link to="/dashboard/chats"><Avatar style={{ backgroundColor: '#efeded', color: 'black' }} icon={<MessageOutlined />} />
                                Chats</Link>}</h2>
                            <p>So quiet here...</p>
                        </Content>
                    </Col>
                </Row>
            </main>
        </>
    )
  }
  
  export default BrandDashboard