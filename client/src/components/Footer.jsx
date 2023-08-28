import { List, Col, Layout, Row } from "antd";

const { Footer } = Layout;

const styles = {
  footer: {
    paddingBottom: "5em",
  },
  list: {
    marginTop: "2.5em",
    // display: "flex",
    flexDirection: "column",
  },
};
const footerData = [
  {
    title: "Support",
    content: ["FAQ", "How It Works", "Features", "Contact"],
  },

  {
    title: "Links",
    content: ["GitHub"],
  },

  {
    title: "Contact",
    content: ["123 456 789 10", "007 Genie Rd, Lamp City USA"],
  },
];
// const contentList = footerData.map(( content, index ) => content)

function generateString(contentArray) {
  let result = "";
  for (let i = 0; i < contentArray.length; i++) {
    result +=  contentArray[i] + "\n" ;
  }
  return  result ;
  // return contentArray.join("\n");
}

function FooterSection() {
  return (
    <Layout>
      <Footer style={styles.footer}>
        <List
          grid={{ gutter: 140, column: 3 }}
          dataSource={footerData}
          renderItem={(item) => (
            <Row style={styles.list}>
              <Col span={12}>
            <List.Item >
              <List.Item.Meta title={item.title} />
              
            {generateString(item.content)}
           
            </List.Item>
            </Col>
            </Row>
          )}
        />
      </Footer>
    </Layout>
  );
}

export default FooterSection;
