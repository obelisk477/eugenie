import { useCurrentUserContext } from '../context/CurrentUser';
import BrandDashboard from '../components/BrandDashboard'
import CreatorDashboard from '../components/CreatorDashboard'

function Dashboard() {

  let userType = useCurrentUserContext().currentUser?.brandName ? 'brand' : 'creator'

  const renderDashboard = () => {
    if (userType === 'brand') {
      return <BrandDashboard />
    }
    if (userType === 'creator') {
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