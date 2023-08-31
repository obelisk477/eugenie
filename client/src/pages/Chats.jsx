import { Layout, Button, Form, Mentions, Space, Avatar, List } from "antd";
import { useQuery} from "@apollo/client";
import { QUERY_ALL_CHATS } from "../graphql/queries";


const { getMentions } = Mentions;

const { Content, Sider } = Layout;
const contentStyle = {
  textAlign: "center",
  font: '20px',
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#BCE7FD",
  maxHeight: "100%",
  display: 'flex',
 justifyContent: 'center'
};
const siderStyle = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#BCE7FD",
  alignItems: "center",
  paddingRight: '10px',
  paddingLeft: '10px',
  border: "solid white",
  fontWeight: "bold"
};

function ChatMessages() {
  const [form] = Form.useForm();

  const onFinish = async () => {
    try {
      const values = await form.validateFields();
      console.log("Submit:", values);
    } catch (errInfo) {
      console.log("Error:", errInfo);
    }
  };
  const checkMention = async (_, value) => {
    const mentions = getMentions(value);
    if (mentions.length < 2) {
      throw new Error("More than one must be selected!");
    }
  };


  const { data:chatData } = useQuery(QUERY_ALL_CHATS);
  const chats = chatData?.getAllChats || [];

  return (
    <>
      <h1 className="">Chats</h1>
      <Layout className="messagesPage">
        <Layout hasSider >
          <Sider style={siderStyle}>
            Your Messages
            <List
              itemLayout="horizontal"
              dataSource={chats}
              renderItem={(item, index) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      <Avatar
                        src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
                      />
                    }
                    title={item.brand.brandName}
                    description={item.chatLog}
                  />
                </List.Item>
              )}
            />
          </Sider>
          <Content style={contentStyle}>
            <Form form={form} layout="horizontal" onFinish={onFinish} className="messagesForm">
              <Form.Item
                name="message"
                labelCol={{
                  span: 6,
                }}
                wrapperCol={{
                  span: 16,
                }}
                rules={[
                  {
                    required: true,
                    validator: checkMention,
                  },
                ]}
              >
                <Mentions
                  rows={3}
                  placeholder="What's your response"
                  className="messagesForm"

                  
                />
              </Form.Item>
              <Form.Item
                wrapperCol={{
                  span: 14,
                 
                }}
              >
                <Space wrap >
                  <Button htmlType="submit" 
                  id="sendMessage"
                   type="primary" >
                    Send
                  </Button>
                </Space>
              </Form.Item>
            </Form>
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

export default ChatMessages;
