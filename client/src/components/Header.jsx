import { Link } from 'react-router-dom';
import { useCurrentUserContext } from '../context/CurrentUser';
import { Layout, Menu } from 'antd'

const { Header } = Layout
 function MainHeader() {
  const { isLoggedIn, logoutUser } = useCurrentUserContext();
  return (
    <Header
      style = {{
      }}
    >
      {isLoggedIn() ? (
        <>
        <Menu
          mode="horizontal"
          theme="dark">
          <Menu.Item key='dashboard'>
            <Link to="/dashboard">Dashboard</Link>
          </Menu.Item>
          <button type="button" onClick={logoutUser}>Logout</button>
          </Menu>
        </>
      ) : (
        <>
        <Menu
          mode="horizontal"
          theme="dark">
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





