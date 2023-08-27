
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { useCurrentUserContext } from '../context/CurrentUser';
import { Layout, Menu } from 'antd'



const { Header } = Layout
 function MainHeader() {
  const { isLoggedIn, logoutUser } = useCurrentUserContext();


  const [current, setCurrent] = useState('2');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
  <Header>
    {isLoggedIn() ? (
      <>
      <Menu
        selectedKeys={[current]}
        onClick={onClick} 
        mode="horizontal"
        theme="dark">
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
      <Menu
        mode="horizontal"
        theme="dark"
        selectedKeys={[current]}
        onClick={onClick} >
          <Menu.Item key='login'><Link to="/login">Login</Link></Menu.Item>
          <Menu.Item key='creator-registration'><Link to="/creator-registration">Creator Signup</Link></Menu.Item>
          <Menu.Item key='brand-registration'><Link to="/brand-registration">Brand Signup</Link></Menu.Item>
      </Menu>
      </>
    )} 
  </Header>
);
 }
 export default MainHeader;





