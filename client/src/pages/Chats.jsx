import { Layout, Button, Form, Mentions, Space } from "antd";

const { getMentions } = Mentions;

const { Content, Sider } = Layout;
const contentStyle = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#108ee9",
  maxHeight: "100%",
};
const siderStyle = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#3ba0e9",
};

function Chats() {
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
      <Layout>
        <Layout hasSider>
          <Sider style={siderStyle}>Sider</Sider>
          <Content style={contentStyle}>
            <Form form={form} layout="horizontal" onFinish={onFinish}>
              <Form.Item  
                name="message"
                label="Response"
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
                  className='messagesForm' 
                  options={[
                    {
                      value: "afc163",
                      label: "afc163",
                    },
                    {
                      value: "zombieJ",
                      label: "zombieJ",
                    },
                    {
                      value: "yesmeck",
                      label: "yesmeck",
                    },
                  ]}
                />
              </Form.Item>
              <Form.Item
                wrapperCol={{
                  span: 14,
                  offset: 6,
                }}
              >
                <Space wrap>
                  <Button htmlType="submit" type="primary">
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

export default Chats;
