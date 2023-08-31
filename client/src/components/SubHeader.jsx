import { Link } from "react-router-dom";
import { Col, Row, Button, Card, Avatar, Layout } from "antd";
import {
  UserOutlined,
  TeamOutlined,
  CommentOutlined,
  SmileOutlined,
  SolutionOutlined

} from "@ant-design/icons";


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
          Shining, Shimmering, Splendid
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
            icon={<UserOutlined />}>
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
            icon={<TeamOutlined />}>
            Brand Signup
          </Button>
        </Link>
      </Row>
      <div className="info">
      <h3 id='subTitleh3'>HOW IT WORKS</h3>
      <h1 id='subTitleh1'>Influencer Marketing <br/> Made Easy</h1>
      <Row className="card-section" gutter={60}>
        <Card style={{ width: 280, margin: 10 }}>
        <Avatar style={{ backgroundColor: '#90fdc7', color: 'black' }} icon={<SolutionOutlined />} />
          <h3> Create & Find Campaigns </h3>
          <p>Browse through and find what sparks your interest!</p>
        </Card>
        <Card style={{ width: 280, margin: 10}}>
        <Avatar style={{ backgroundColor: '#90fdc7', color: 'black' }} icon={<CommentOutlined />} />
            <h3> Negotiate & Accept Terms </h3>
            <p>Ensure that the deal is the right fit for you!</p>
          </Card>
        <Card
          style={{ width: 280, margin: 10}}>
            <Avatar style={{ backgroundColor: '#90fdc7', color: 'black' }} icon={<SmileOutlined />} />
            <h3>Enjoy the Results</h3>
            <p>Need we say more?</p>
          </Card>
      </Row>
      </div>
    </Layout>
  );
}

export default SubHeader;
