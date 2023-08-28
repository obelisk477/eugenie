import { Link } from 'react-router-dom';
import { Card, Row, Col, Layout } from 'antd';
const {Content} = Layout

const { TextArea } = Input;
import {
    DatePicker,
    Form,
    Input,
    InputNumber,
    Button
  } from 'antd';


function BrandDashboard() {
    
    const big_styles={
        backgroundColor:'#C492B1',
        alignSelf: 'center',
        height: '76vh',
        padding: '1vh',
        margin: '2vh'
      }
    const styles={
        backgroundColor:'#C492B1',
        height: '37vh',
        padding: '1vh',
        margin: '2vh',
      }
    return (
        <>
        <main id="brandDashboard">
        <Row justify="center" align="top" style={{alignItems: 'center'}}>
        <Col span={18} >
            <Content title="Content title" bordered={false} style={big_styles}  >
            <Card
            title={<Link to="/dashboard/my-campaigns">My Campaigns</Link>} style={{ width: "100%", height: "100%" }}>
                <Form
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      style={{
        maxWidth: 600,
      }}
    >
      <Form.Item key="title" label="Title"><Input /></Form.Item>
      {/* <Form.Item label="Select"><Select><Select.Option value="demo">Demo</Select.Option></Select></Form.Item> */}
      <Form.Item key="description" label="Description"><TextArea rows={4} /></Form.Item>
      <Form.Item key="applyBy" label="Apply By">
        <DatePicker />
      </Form.Item>
      <Form.Item key="postBy" label="Post By">
        <DatePicker />
      </Form.Item>
      <Form.Item key="requirements" label="Requirements"><TextArea rows={4} /></Form.Item>
      <Form.Item key="deliverables" label="Deliverables"><TextArea rows={4} /></Form.Item>
      <Form.Item key="compensation" label="Compensation">
        <InputNumber />
      </Form.Item>
      <Form.Item>
        <Button type="primary">Create Campaign</Button>
      </Form.Item>

    </Form>

            </Card>
            </Content>
        </Col>
        <Col span={6}>
            <Content title="Content title" bordered={false} style={styles}>
            <Card
            title={<Link to="/dashboard/chats">Chats</Link>}
            style={{
                width: "100%",
                height: "100%"
            }}
            ></Card>
            </Content>
            <Content title="Content title" bordered={false} style={styles}>
            <Card title={<Link to="/dashboard/creator-search">Find Creators</Link>}
            style={{
                width: "100%",
                height: "100%"
            }}
            ></Card>
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