import { List } from "antd";
import { Layout } from "antd";
const { Footer } = Layout;

const styles = {
  footer: {
    height: "15vh",
  },
  list: {
    margin: '20vh'
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

function FooterSection() {
  return (
      <Footer style={styles.footer}>
        <List
          grid={{ gutter: 140, column: 3 }}
          dataSource={footerData}
          style={styles.list}
          renderItem={(item) => (
            <List.Item>
              <h2 style={styles.h2}>{item.title}</h2>
              <ul style={styles.ul}>
                {item.content.map(item => <li key={item} style={styles.li}>{item}</li>)}
              </ul>
              
            </List.Item>
          )}
        />
      </Footer>
  );
}

export default FooterSection;
