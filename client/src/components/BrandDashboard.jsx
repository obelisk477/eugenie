import { Link } from 'react-router-dom';
import { Card, Row, Col, Layout } from 'antd';
const {Content} = Layout

function BrandDashboard() {
    
    const big_styles={
        backgroundColor:'lightgray',
        alignSelf: 'center',
        height: '76vh',
        padding: '4vh',
        margin: '2vh'
      }
    const styles={
        backgroundColor:'lightgrey',
        height: '37vh',
        padding: '4vh',
        margin: '2vh',
      }
    return (
        <>
        <main id="brandDashboard">
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

        </main>
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
            title={<Link to="/dashboard/creator-search">Find Creators</Link>}
            style={{
                width: 300,
            }}
            >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
            </Card>
            <Card
            title={<Link to="/dashboard/my-campaigns">My Campaigns</Link>}
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
  
  export default BrandDashboard