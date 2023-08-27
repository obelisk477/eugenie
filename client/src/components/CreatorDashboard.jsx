import { Link } from 'react-router-dom';
import { Card } from 'antd';


function CreatorDashboard() {
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
                title={<Link to="/dashboard/active-campaigns">My Brands & Campaigns</Link>}
                style={{
                    width: 300,
                }}
                >
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
                </Card>
                <Card
                title={<Link to="/dashboard/campaign-search">Find Campaigns & Brands</Link>}
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
  
  export default CreatorDashboard







