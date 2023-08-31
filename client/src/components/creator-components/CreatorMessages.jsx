import { Avatar, List} from 'antd'
import { Link } from 'react-router-dom'


  const Chats = ({ chats }) => {
    
return (
  <>
  <List
  itemLayout="horizontal"
  dataSource={chats}
  renderItem={(item, index) => (
    <List.Item key={item._id}>
      <List.Item.Meta
        avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
        title={<Link to="/dashboard/chats/">{item.brand}</Link>}
        description={item.chatLog}
      />
    </List.Item>
  )}
/>
  </>
)
};

  export default Chats;
