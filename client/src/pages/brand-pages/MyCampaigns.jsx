import CreateCampaignForm from '../../components/brand-components/CreateCampaignForm';
import CampaignCards from '../../components/CampaignCards';

import { Row, Col, Layout, Card } from 'antd';
const {Content} = Layout;

function MyCampaigns() {

    const big_styles = {
        backgroundColor:'#efeded',
        alignSelf: 'center',
        height: '90vh',
        padding: '4vh',
        margin: '2vh'
      }
      const styles = {
        backgroundColor:'#efeded',
        height: '90vh',
        padding: '2vh',
        marginTop: '-25rem',
        margin: '2vh',
      }

    return (
        <>
            <main className="dashboard">
                <Row justify="center" align="top" style={{alignItems: 'center'}}>
                    <Col id='bigSquare' span={15} >
                        <Content title="Content title" style={big_styles}  >
                            <h2 id='dashboardTitle'>My Campaigns</h2>
                            <CampaignCards />
                        </Content>
                    </Col>
                    <Col span={9} >
                        <Content style={styles}  >
                            <h2 id='newCampaignTitle'>New Campaign</h2>
                            <CreateCampaignForm />
                            
                        </Content>
                    </Col>
                </Row>

            </main>
        </>
    )
  }
  
  export default MyCampaigns