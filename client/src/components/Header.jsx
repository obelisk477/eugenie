
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { useCurrentUserContext } from '../context/CurrentUser';
// import { Layout, Menu } from 'antd'
import { Layout, Menu, Button } from 'antd';
import {
  HomeOutlined,
  UserOutlined,
  LoginOutlined,
  TeamOutlined
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
  <Header
style = {{
        
  }}
>

{isLoggedIn() ? (
        <>
        <Menu 
        selectedKeys={[current]} onClick={onClick} mode="horizontal" theme="light">
          <Menu.Item key='dashboard'>
            <Link to="/dashboard">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key='logout' onClick={logoutUser}>
          Logout
        </Menu.Item>
          </Menu>
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
        {/* <Menu.Item key="creator-registration" icon={<UserOutlined />}><Link to="/creator-registration">Creator Signup</Link></Menu.Item> */}
        {/* <Menu.Item key="brand-registration" icon={<TeamOutlined />}><Link to="/brand-registration">Brand Signup</Link></Menu.Item> */}
      </Menu>
      {/* <div>
        <Button type="primary" style={{ marginRight: '10px' }}>Sign in</Button>
        <Button>Sign up</Button>
      </div> */}
    </Header>
  </Layout>


        {/* <Menu
          mode="horizontal" theme="dark">
            <Menu.Item key='login'><Link to="/login">Login</Link></Menu.Item>
            <Menu.Item key='creator-registration'><Link to="/creator-registration">Creator Signup</Link></Menu.Item>
            <Menu.Item key='brand-registration'><Link to="/brand-registration">Brand Signup</Link></Menu.Item>
        </Menu> */}

        </>
      )} 
 </Header>
);
 }
 export default MainHeader;





