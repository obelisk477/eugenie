import { Layout, Button, Form, Mentions, Space, Avatar, List } from "antd";

const { getMentions } = Mentions;

const { Content, Sider } = Layout;
const contentStyle = {
  textAlign: "center",
  // minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#108ee9",
  maxHeight: "100%",
  display: 'flex',
 justifyContent: 'center'
};
const siderStyle = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#3ba0e9",
};

const data = [
  {
    title: "Ant Design Title 1",
  },
  {
    title: "Ant Design Title 2",
  },
  {
    title: "Ant Design Title 3",
  },
];

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
  return (
    <>
      <h1>Chats</h1>
      <Layout className="messagesPage">
        <Layout hasSider >
          <Sider style={siderStyle}>
            Your Messages
            <List
              itemLayout="horizontal"
              dataSource={data}
              renderItem={(item, index) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      <Avatar
                        src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
                      />
                    }
                    title={<a href="https://ant.design">{item.title}</a>}
                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                  />
                </List.Item>
              )}
            />
          </Sider>
          <Content style={contentStyle}>
            <Form form={form} layout="horizontal" onFinish={onFinish} className="messagesForm">
              <Form.Item
                className="messageResponse"
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
                  placeholder="You can use @ to ref user here"
                  className="messagesForm"
                />
              </Form.Item>
              <Form.Item
                wrapperCol={{
                  span: 14,
                  offset: 6,
                }}
              >
                <Space wrap>
                  <Button  htmlType="submit" type="primary" className="sendMessage">
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
