import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  const currentPage = useLocation().pathname;

  return (
    <ul>
      <li>
        <Link
          to="/"
        //   className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/signup"
        //   className={currentPage === '/signup' ? 'nav-link active' : 'nav-link'}
        >
          Signup
        </Link>
      </li>
    </ul>
  );
}

export default Navigation;
