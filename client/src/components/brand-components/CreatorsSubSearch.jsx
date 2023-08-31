
import { Card, Avatar } from 'antd';
import { UserOutlined, SoundOutlined, DollarOutlined, InstagramOutlined, YoutubeOutlined, FacebookOutlined} from '@ant-design/icons';
function CreatorsSubSearch(){
  
    return(
    <>
    <Card size='small' style={{ width: 300,  }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
        <Avatar size={32} icon={<UserOutlined />} />
        <div style={{ marginLeft: 16 }}>
          <h3>Captain America</h3>
        </div>
      </div>
    </Card>
    <br></br>
    <Card  size='small' style={{ width: 300, }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
        <Avatar size={32} icon={<UserOutlined />} />
        <div style={{ marginLeft: 16 }}>
          <h3>Captain Marvel</h3>
        </div>
      </div>
    </Card>
    <br></br>
    <Card  size='small' style={{ width: 300, }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
        <Avatar size={32} icon={<UserOutlined />} />
        <div style={{ marginLeft: 16 }}>
          <h3>Jack Sparrow</h3>
        </div>
      </div>
    </Card>
    <br></br>
    <Card  size='small' style={{ width: 300, }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
        <Avatar size={32} icon={<UserOutlined />} />
        <div style={{ marginLeft: 16 }}>
          <h3>Mia Ramos</h3>
        </div>
      </div>
    </Card>
  </>
  )
}

export default CreatorsSubSearch;
