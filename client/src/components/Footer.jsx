import { List } from 'antd';

const styles = {
footer: {
  paddingBottom: '5em',
},
list: {
  marginTop: '2.5em',
  display: 'flex',
  flexDirection: 'column' 

}

}
const footerData = [
{
  title: 'Support',
  content: [ 'FAQ', 'How It Works', 'Features', 'Contact']
},

{
  title: 'Links',
  content: ['GitHub'],
},

{
  title: 'Contact',
  content: [ '123 456 789 10', '007 Genie Rd, Lamp City USA']
}
]
// const contentList = footerData.map(( content, index ) => content)

function generateString(contentArray) {
  let result = '';
  for (let i = 0; i < contentArray.length; i++ ) {
    result += contentArray[i] +  '\n'; 
  }
  return result;
  // return contentArray.join('\n');
}

function Footer() {

  return (
    <footer style={styles.footer}>
<List 
grid={{ gutter: 140, column: 3 }}
dataSource = {footerData}
renderItem= {(item) => (
<List.Item style={styles.list}>

<List.Item.Meta 
title = {item.title}
// description = {item.content}
/>
{/* {item.content} */}
{generateString(item.content)}

</List.Item>

)}
/>

    </footer>
  )
}

export default Footer