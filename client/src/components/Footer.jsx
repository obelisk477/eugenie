import { List, Col, Layout, Row } from "antd";

const { Footer } = Layout;

const styles = {
  footer: {
    height: "15vh",
  },
  list: {
<<<<<<< HEAD
    marginTop: "2.5em",
    // display: "flex",
    flexDirection: "column",
=======
    margin: '20vh'
>>>>>>> 1c2d8a22119ff54f05ab0a455718f0c6ff31de11
  },
  li: {
    listStyleType: 'none',
    padding: 0,
    margin: 0
  },
  ul: {
    padding: 0
  },
  h2: {
    marginTop: 10
  }
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

<<<<<<< HEAD
function generateString(contentArray) {
  let result = "";
  for (let i = 0; i < contentArray.length; i++) {
    result +=  contentArray[i] + "\n" ;
  }
  return  result ;
  // return contentArray.join("\n");
}

=======
>>>>>>> 1c2d8a22119ff54f05ab0a455718f0c6ff31de11
function FooterSection() {
  return (
      <Footer style={styles.footer}>
        <List
          grid={{ gutter: 140, column: 3 }}
          dataSource={footerData}
          style={styles.list}
          renderItem={(item) => (
<<<<<<< HEAD
            <Row style={styles.list}>
              <Col span={12}>
            <List.Item >
              <List.Item.Meta title={item.title} />
              
            {generateString(item.content)}
           
=======
            <List.Item>
              <h2 style={styles.h2}>{item.title}</h2>
              <ul style={styles.ul}>
                {item.content.map(item => <li key={item} style={styles.li}>{item}</li>)}
              </ul>
              
>>>>>>> 1c2d8a22119ff54f05ab0a455718f0c6ff31de11
            </List.Item>
            </Col>
            </Row>
          )}
        />
      </Footer>
  );
}

export default FooterSection;
