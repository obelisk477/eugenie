import { Navigate, useLocation } from "react-router-dom";

import { useCurrentUserContext } from "../context/CurrentUser";

function CreatorProtectedRoute({ children }) {
  const { isLoggedIn } = useCurrentUserContext();
  const { isBrand } = useCurrentUserContext()
  console.log(isBrand)
  const location = useLocation();
  if (!isLoggedIn() || isBrand) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default CreatorProtectedRoute;
