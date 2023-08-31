import { AdvancedImage } from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
import { Carousel, Col, Row, Input, Modal } from 'antd';
import { useCurrentUserContext } from "../context/CurrentUser";
import { useQuery } from '@apollo/client';
import { QUERY_CURRENT_CREATOR} from '../graphql/queries';
import { APPLY_TO_CAMPAIGN, DELETE_CAMPAIGN, ADD_TO_ACCEPTED, ADD_CREATIVE } from '../graphql/mutations';
import { useMutation } from '@apollo/client';
import { useState } from 'react';


function Library() {


  const {currentUser} = useCurrentUserContext()
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const styles = {
      img: {
        height: 'auto',
        width: '30vh',
        margin: '100px'
      },
      carousel: {
        marginTop: '10vh',
        backgroundColor:'lightgray',
      },
      row: {
        margin: '4vh 7vw',
        height: '50vh',
        alignItems: 'center'
      },
      textArea: {
        margin: '0 auto;'
      },
      form: {
        width: '25%'
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
  

    const [addCreative, { error: creativeError }] = useMutation(ADD_CREATIVE);

    const handleSubmit = (e) => {
        e.preventDefault()
        const url = "https://api.cloudinary.com/v1_1/dtmfixzij/image/upload";      
        console.log('hello')

        
        const files = document.querySelector("[type=file]").files;
        const formData = new FormData();
    
        for (let i = 0; i < files.length; i++) {
            let file = files[i];
            formData.append("file", file);
            formData.append("upload_preset", "qofsnecj");
    
            fetch(url, {
            method: "POST",
            body: formData
            })
            .then((response) => {
                return response.text();
            })
            .then(async (data) => {
                let parsedData = JSON.parse(data)
                console.log(parsedData.public_id)
                const mutationResponse = await addCreative({
                    variables: {
                        _id: currentUser._id,
                        creativeLibrary: parsedData.public_id
                    },
                });
                console.log(mutationResponse)
                showModal()
            });
        }

      
    }

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

//   const onChange = (currentSlide) => {
//     console.log(currentSlide);
//   };


    return (
        <>
            {images.map((image, i) => (
                <AdvancedImage key={i} cldImg={cld.image(image)} style={styles.img}/>    

            ))}
                
                <form id='collabForm' style={styles.form} method="post" encType="multipart/form-data" onSubmit={handleSubmit}>
                <h1>Upload your Assets</h1>
                    <input type="file" name="files[]" multiple />
                    <input type="submit" value="Upload Files" name="submit" />
                </form>
                <p id="data"></p>
                <Modal title="Success" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <p>Successfully uploaded!</p>
                </Modal>
        </>


    )
  }
  
  export default Library


