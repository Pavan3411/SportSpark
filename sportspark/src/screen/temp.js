import React from 'react';
import axios from 'axios';

function Temp() {
    const axios = require('axios').default;

    const API_KEY = 'f3e8af9f-24a3-4766-a92f-f0133087c3dd';


axios.get('https://api.cricapi.com/v1/cricScore?apikey=%f3e8af9f-24a3-4766-a92f-f0133087c3dd%')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  return (
    <div>
        
    </div>
  )
}

export default Temp;