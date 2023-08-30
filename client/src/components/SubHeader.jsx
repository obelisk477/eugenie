import { Link } from "react-router-dom";
import { Col, Row, Button, Card } from "antd";
import {
  UserOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Layout } from 'antd'
// const { Content } = Layout;

function SubHeader() {
  return (
    <Layout>
      <Row id="heroSection">
        <Col span={24} id="heroTitle">
          <img
            className="subHeader"
            src="/WelcomeTag.png"
            alt="brand-image"
          ></img>
        </Col>
      </Row>
      <Row id="heroSubTitleDiv">
        <Col span={24} id="heroSubTitle">
          Flies you away on a carpet and shows you the world.
        </Col>
        <Col span={24} id="heroSubTitle">
          Shining, Shimmering, splendid
        </Col>
      </Row>

      <Row className="registrationButtons">
        <Link to="/creator-registration">
          <Button
            id="heroButtons"
            key="creator-registration"
            type="primary"
            shape="round"
            size={"large"}
            icon={<UserOutlined />}
          >
            Creator Signup
          </Button>
        </Link>
        <Link to="/brand-registration">
          <Button
            id="heroButtons"
            key="brand-registration"
            type="primary"
            shape="round"
            size={"large"}
            icon={<TeamOutlined />}
          >
            Brand Signup
          </Button>
        </Link>
      </Row>
      <div className="info">
      <h2>How It Works</h2>
      <h1>Influencer Marketing Made Easy</h1>
      <Row className="card-section" gutter={60}>
        <Card
          style={{ width: 300, margin: 35 }}
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          title="Create and Find Campaigns"
        ></Card>
        <Card
          style={{ width: 300, margin: 35}}
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          title="Negotiate and Accept Terms"
        ></Card>
        <Card
          style={{ width: 300, margin: 35}}
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          title="Enjoy the Results"
        ></Card>
      </Row>
      </div>
    </Layout>
  );
}

export default SubHeader;
