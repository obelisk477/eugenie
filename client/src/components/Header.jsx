import { Link } from 'react-router-dom';
import { useCurrentUserContext } from '../context/CurrentUser';

 function Header() {
  const { isLoggedIn, logoutUser } = useCurrentUserContext();

  return (
    <nav>
      {isLoggedIn() ? (
        <>
          <Link to="/dashboard">Dashboard</Link>
          <button type="button" onClick={logoutUser}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/creator-registration">Creator Signup</Link>
          <Link to="/brand-registration">Brand Signup</Link>
        </>
      )}
    </nav>
  );
 }

 export default Header