import { Link } from 'react-router-dom';
import { Card } from 'antd';

function BrandDashboard() {
    return (
        <>
            <Card
            title={<Link to="/dashboard/chats">Chats</Link>}
            style={{
                width: 300,
            }}
            >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
            </Card>
            <Card
            title={<Link to="/dashboard/creator-search">Find Creators</Link>}
            style={{
                width: 300,
            }}
            >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
            </Card>
            <Card
            title={<Link to="/dashboard/my-campaigns">My Campaigns</Link>}
            style={{
                width: 300,
            }}
            >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
            </Card>
        </>
    )
  }
  
  export default BrandDashboard