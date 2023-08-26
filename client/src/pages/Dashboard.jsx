import { useCurrentUserContext } from '../context/CurrentUser';

import BrandDashboard from '../components/BrandDashboard'
import CreatorDashboard from '../components/CreatorDashboard'


function Dashboard() {

  const isBrand = useCurrentUserContext().isBrand

  const renderDashboard = () => {
    if (isBrand) {
      return <BrandDashboard />
    }
    if (!isBrand) {
      return <CreatorDashboard />
    }
  }
  
  return (
    <>
      {renderDashboard()}
    </>
  )
}

export default Dashboard