import { Link } from 'react-router-dom';
import {
   Col,
    Row,
  Button, 
} from 'antd';
import {
    UserOutlined,
    TeamOutlined
} from '@ant-design/icons';

function SubHeader() {
    return (
        <>
          <Row id="heroSection" >
            <Col span={24} id="heroTitle">
              <img className='subHeader' src='/WelcomeTag.png' alt='brand-image'></img>
            </Col>
          </Row>
          <Row id="heroSubTitleDiv" >
            <Col span={24} id="heroSubTitle">
            Flies you away on a carpet and shows you the world.
            </Col>
            <Col span={24} id="heroSubTitle">
            Shining, Shimmering, splendid
            </Col>
        </Row>
        <Row>
        <Link to="/creator-registration">
        <Button id='heroButtons' key="creator-registration" type="primary" shape="round" size={"large"} icon={<UserOutlined />}>
            Creator Signup
          </Button>
        </Link>
        <Link to="/brand-registration">
        <Button id='heroButtons' key="brand-registration" type="primary" shape="round" size={"large"} icon={<TeamOutlined />}>
          Brand Signup
          </Button>
        </Link>
        </Row>
        </>
    )
}

export default SubHeader;