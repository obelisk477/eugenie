
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { useCurrentUserContext } from '../context/CurrentUser';
// import { Layout, Menu } from 'antd'
import { Layout, Menu } from 'antd';
import {
  HomeOutlined,
  LoginOutlined,
  LogoutOutlined
} from '@ant-design/icons';


const { Header } = Layout
 function MainHeader() {
  const { isLoggedIn, logoutUser } = useCurrentUserContext();


  const [current, setCurrent] = useState('2');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <Header id="outerNav">
    {isLoggedIn() ? (
      <>
        <Layout className="layout">
          <Header id='innerNav'>
          <div>
            <Link to="/"><img className='logo' src='/eugenie.png' alt='brand-image' height='99px' width='66px'></img></Link>
          </div>
          <Menu selectedKeys={[current]} onClick={onClick} mode="horizontal" theme="light" id="menuItem">
            <Menu.Item key='dashboard' icon={<HomeOutlined />}><Link to="/dashboard">Dashboard</Link></Menu.Item>
            <Menu.Item key='logout' onClick={logoutUser} icon={<LogoutOutlined />}>Logout</Menu.Item>
            </Menu>
          </Header>
        </Layout>
      </>
      ) : (
      <>
        <Layout className="layout">
          <Header id='innerNav' style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
            <Link to="/"><img className='logo' src='/eugenie.png' alt='brand-image'></img></Link>
              </div>
            <Menu id="menuItem" theme="light" mode="horizontal" selectedKeys={[current]} onClick={onClick} style={{ marginRight: '10px' }}>
              <Menu.Item key="home" icon={<HomeOutlined />}><Link to="/">Home</Link></Menu.Item>
              <Menu.Item key="login" icon={<LoginOutlined />}><Link to="/login">Login</Link></Menu.Item>
            </Menu>
          </Header>
        </Layout>
      </>
  )} 
  </Header>
);
 }
 export default MainHeader;





