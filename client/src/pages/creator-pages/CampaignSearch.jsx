import { Row, Col, Layout} from 'antd';
const {Content} = Layout


import CampaignCards from '../../components/CampaignCards';


function CampaignSearch() {

  const big_styles = {
    alignSelf: 'center',
    height: '100vh',
    padding: '15vh',
    margin: '2vh'
  }
    return (
      <>
      <main>
                <Row  justify="center" align="top" style={{alignItems: 'center'}}>
                    <Col id='campaignSearch' span={24} >
                        <Content title="Content title" style={big_styles} >
                        <h1 id='campaignSearchTitle'>Campaign Search</h1>
                          <CampaignCards />
                        </Content>
                    </Col>
                </Row>
            </main>
      </>
      
      
    )
  }
  
  export default CampaignSearch