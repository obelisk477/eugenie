import { Link } from 'react-router-dom';
import { Row, Col, Layout } from 'antd';
import CreatorMessages from './CreatorMessages';
const {Content} = Layout

function CreatorDashboard() {

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
                    <Col span={16} >
                        <Content title="Content title" bordered={false} style={big_styles}  >
                            <h2>{<Link to="/dashboard/campaign-search">Find Campaigns & Brands</Link>}</h2>
                            <p>Content content</p>
                            <p>Content content</p>
                        </Content>
                    </Col>
                    <Col span={8}>
                        <Content title="Content title" bordered={false} style={styles}>
                            <h2>{<Link to="/dashboard/active-campaigns">My Brands & Campaigns</Link>}</h2>
                            <p>Content content</p>
                            <p>Content content</p>
                        </Content>
                        <Content title="Content title" bordered={false} style={styles}>
                            <h2>{<Link to="/dashboard/chats">Chats</Link>}</h2>
                            <CreatorMessages />
                        </Content>
                    </Col>
                </Row>
            </main>
        </>
    )
  }
  
  export default CreatorDashboard







