

import { Card, Avatar } from 'antd';
import { UserOutlined, SoundOutlined, DollarOutlined, InstagramOutlined, YoutubeOutlined, FacebookOutlined} from '@ant-design/icons';
function CreatorsCard(){
  
    return(
    <>
    <Card style={{ width: 300, marginTop: 100 }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
        <Avatar size={64} icon={<UserOutlined />} />
        <div style={{ marginLeft: 16 }}>
          <h2>User's Name</h2>
        </div>
      </div>
      <div>
        <h3>Platforms</h3>
        <InstagramOutlined style={{ fontSize: 24, marginRight: 10 }} />
        <YoutubeOutlined style={{ fontSize: 24, marginRight: 10 }} />
        <FacebookOutlined style={{ fontSize: 24, marginRight: 10 }} />
      </div>
      <div style={{ marginTop: 16 }}>
        <h3>Audience</h3>
        <Avatar size={40} icon={<SoundOutlined />} />
        <span style={{ marginLeft: 10 }}>400k</span>
      </div>
      <div style={{ marginTop: 16 }}>
        <h3>Cost/Campaign</h3>
        <DollarOutlined style={{ fontSize: 24, marginRight: 10 }} />
     <span> $40-60K </span>
      
      </div>
    </Card>
  </>
  )
}

export default CreatorsCard;

