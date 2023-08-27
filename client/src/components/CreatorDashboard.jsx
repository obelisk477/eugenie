import { Link } from 'react-router-dom';
import { Card, Row, Col, Layout } from 'antd';
const {Content} = Layout



function CreatorDashboard() {

    const big_styles={
        backgroundColor:'white',
        alignSelf: 'center',
        height: '76vh',
        padding: '4vh',
        margin: '2vh'
      }
    const styles={
        backgroundColor:'white',
        height: '37vh',
        padding: '4vh',
        margin: '2vh',
      }

    return (
        <>
    <Row justify="center" align="top" style={{alignItems: 'center'}}>
        <Col span={18} >
            <Content title="Content title" bordered={false} style={big_styles}  >
                <p>Content content</p>
                <p>Content content</p>
                <p>Content content</p>
            </Content>
        </Col>
        <Col span={6}>
            <Content title="Content title" bordered={false} style={styles}>
                <p>Content content</p>
                <p>Content content</p>
                <p>Content content</p>
            </Content>
            <Content title="Content title" bordered={false} style={styles}>
                <p>Content content</p>
                <p>Content content</p>
                <p>Content content</p>
            </Content>
        </Col>
    </Row>
            {/* <Card
            title={<Link to="/dashboard/chats">Chats</Link>}
            style={{
                width: 300,
            }}
            >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
            </Card>
            <Card
            title={<Link to="/dashboard/active-campaigns">My Brands & Campaigns</Link>}
            style={{
                width: 300,
            }}
            >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
            </Card>
            <Card
            title={<Link to="/dashboard/campaign-search">Find Campaigns & Brands</Link>}
            style={{
                width: 300,
            }}
            >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
            </Card> */}
        </>

    )
  }
  
  export default CreatorDashboard







