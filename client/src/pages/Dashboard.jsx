import { useCurrentUserContext } from '../context/CurrentUser';

import BrandDashboard from '../components/brand-components/BrandDashboard'
import CreatorDashboard from '../components/creator-components/CreatorDashboard'

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