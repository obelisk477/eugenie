import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
import { Carousel, Col, Row, Input } from 'antd';
import { useCurrentUserContext } from "../context/CurrentUser";
import { useQuery } from '@apollo/client';
import { QUERY_CURRENT_CREATOR} from '../graphql/queries';




const { TextArea } = Input;

function Collab() {

  const { isBrand } = useCurrentUserContext()
  const { currentUser } = useCurrentUserContext()


  // const images = [
  //   'test_image_zkrfrt',
  //   'pexels-hatice-baran-16586894_vymsgz',
  //   'pexels-emre-akyol-17774693_z8bws7'
  // ]

  const styles = {
      img: {
        height: 'auto',
        width: '30vh',
        margin: '0 auto'
      },
      carousel: {
        marginTop: '10vh',
        backgroundColor:'#efeded',
      },
      row: {
        margin: '4vh 7vw',
        height: '50vh',
        alignItems: 'center'
      },
      textArea: {
        margin: '0 auto;'
      }
  }

  const contentStyle = {
      margin: 0,
      height: '160px',
      color: '#fff',
      lineHeight: '160px',
      textAlign: 'center',
      background: '#364d79',
    };
  
  // Cloudinary UPLOAD Boilerplate --- DO NOT DELETE ---
  // const url = "https://api.cloudinary.com/v1_1/dtmfixzij/image/upload";
  // const form = document.querySelector("form");

  // form.addEventListener("submit", (e) => {
  // e.preventDefault();

  // const files = document.querySelector("[type=file]").files;
  // const formData = new FormData();

  // for (let i = 0; i < files.length; i++) {
  //     let file = files[i];
  //     formData.append("file", file);
  //     formData.append("upload_preset", "qofsnecj");

  //     fetch(url, {
  //     method: "POST",
  //     body: formData
  //     })
  //     .then((response) => {
  //         return response.text();
  //     })
  //     .then((data) => {
  //         document.getElementById("data").innerHTML += data;
  //     });
  // }
  // });


  const { data } = useQuery(QUERY_CURRENT_CREATOR, {
    variables: {
        email:  currentUser.email
        }
    }
);
let images = []

if (data) {
    images = data.currentCreator.creativeLibrary
}

const cld = new Cloudinary({
cloud: {
  cloudName: 'dtmfixzij'
}
});

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };


    return (
      <Carousel style={styles.carousel} afterChange={onChange}>
          {images.map((image, i) => (
            <div key={i}>
            <Row gutter={[16, 0]} style={styles.row} >
              <Col span={8}>
                <AdvancedImage cldImg={cld.image(image)} style={styles.img}/>
              </Col>
              <Col span={8}>
                <h2>Brand Notes</h2>
                <TextArea rows={12} disabled={isBrand? false: true}/>
              </Col>
              <Col span={8}>
                <h2>Creator Notes</h2>
                <TextArea rows={12} disabled={isBrand? true: false}/>
              </Col>
            </Row>
            <h3 style={contentStyle}>{i+1}</h3>
          </div>
          ))}
      </Carousel>
    )
  }
  
  export default Collab


