import React from 'react'
import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";

function ActiveCampaigns() {
  
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


  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dtmfixzij'
    }
  });

  const myImage = cld.image('okjbh5y3gzhxuifmr4ab');


    return (
      // <AdvancedImage cldImg={myImage} />
      <h2>Active Campaigns</h2>
    )
  }
  
  export default ActiveCampaigns


