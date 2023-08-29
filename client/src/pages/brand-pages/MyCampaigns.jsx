import CreateCampaignForm from '../../components/brand-components/CreateCampaignForm';
import CampaignCards from '../../components/CampaignCards';

import { Row, Col, Layout, Card } from 'antd';
const {Content} = Layout;

function MyCampaigns() {

    const big_styles = {
        backgroundColor:'lightgray',
        alignSelf: 'center',
        height: '76vh',
        padding: '4vh',
        margin: '2vh'
      }
      
    return (
        <>
            <main className="dashboard">
                <Row justify="center" align="top" style={{alignItems: 'center'}}>
                    <Col span={18} >
                        <Content title="Content title" bordered={false} style={big_styles}  >
                            <h2>My Campaigns</h2>
                            <CampaignCards />
                        </Content>
                    </Col>
                    <Col span={6} >
                        <Content title="Content title" bordered={false} style={big_styles}  >
                            <h2>New Campaign</h2>
                            <CreateCampaignForm />
                            
                        </Content>
                    </Col>
                </Row>

            </main>
        </>
    )
  }
  
  export default MyCampaigns