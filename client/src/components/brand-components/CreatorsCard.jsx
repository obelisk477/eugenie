

import { Card, Avatar } from 'antd';
import { UserOutlined, TwitterOutlined, SoundOutlined, DollarOutlined, InstagramOutlined, YoutubeOutlined, FacebookOutlined} from '@ant-design/icons';
function CreatorsCard(){
  
    return(
    <>
    <div style={{display: 'flex', justifyContent: 'space-between'}}>
    <Card style={{ width: 300, marginTop: 50 }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
        <Avatar size={64} icon={<UserOutlined />} />
        <div style={{ marginLeft: 16 }}>
          <h2>Captain America</h2>
        </div>
      </div>
      <div>
        <h3>Platforms</h3>
        <InstagramOutlined style={{ fontSize: 24, marginRight: 10 }} />
        <YoutubeOutlined style={{ fontSize: 24, marginRight: 10 }} />
        <TwitterOutlined style={{ fontSize: 24, marginRight: 10 }} />
      </div>
      <div style={{ marginTop: 16 }}>
        <h3>Audience</h3>
        <Avatar size={40} icon={<SoundOutlined />} />
        <span style={{ marginLeft: 10 }}>950K</span>
      </div>
    </Card>
    <Card style={{ width: 300, marginTop: 50 }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
        <Avatar size={64} icon={<UserOutlined />} />
        <div style={{ marginLeft: 16 }}>
          <h2>Captain Marvel</h2>
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
        <span style={{ marginLeft: 10 }}>960K</span>
      </div>
    </Card>
    <Card style={{ width: 300, marginTop: 50 }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
        <Avatar size={64} icon={<UserOutlined />} />
        <div style={{ marginLeft: 16 }}>
          <h2>Mia Ramos</h2>
        </div>
      </div>
      <div>
        <h3>Platforms</h3>
        <InstagramOutlined style={{ fontSize: 24, marginRight: 10 }} />
        <YoutubeOutlined style={{ fontSize: 24, marginRight: 10 }} />
        <TwitterOutlined style={{ fontSize: 24, marginRight: 10 }} />

      </div>
      <div style={{ marginTop: 16 }}>
        <h3>Audience</h3>
        <Avatar size={40} icon={<SoundOutlined />} />
        <span style={{ marginLeft: 10 }}>400K</span>
      </div>
    </Card>
    <Card style={{ width: 300, marginTop: 50 }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
        <Avatar size={64} icon={<UserOutlined />} />
        <div style={{ marginLeft: 16 }}>
          <h2>Jack Sparrow</h2>
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
        <span style={{ marginLeft: 10 }}>740K</span>
      </div>
    </Card>
    </div>
  </>
  )
}

export default CreatorsCard;

