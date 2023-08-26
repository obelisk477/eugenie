import { Switch } from 'antd';

const styles = {
    image: {
        height: 'auto',
        maxWidth: '100%',
        width: 'auto',
    },
    // switch: {
    //     width: '200px',
    //     height: '200px'
    // }
}


function SubHeader() {
    return (
        <>
          <img style={styles.image} src='/WelcomeTag.png' alt='brand-image'></img>
          
          <p>Flies you away on a carpet and shows you the world. 
            <br>
          </br>
          Shining, Shimmering, splendid.
          </p>
          
          <Switch id='switch' checkedChildren="Creator" unCheckedChildren="Brand" defaultChecked />
   
      
        </>
      

    )
}

export default SubHeader;