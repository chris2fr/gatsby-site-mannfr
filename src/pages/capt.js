import React, { useState } from "react";
import { GoogleReCaptchaProvider,
  GoogleReCaptcha } from 'react-google-recaptcha-v3';


const CaptPage = ({ pageContext }) => {

  const [token, setToken] = useState();

  const handleVerify = () => {
    setToken(token);
  }

  return(
    <GoogleReCaptchaProvider
    reCaptchaKey="6LfgqDIaAAAAAHJUSM80IG63hPx2oguFyQC4BEgf"
    language="en"
  > 
    <p>Life is good above.</p>
    <GoogleReCaptcha onVerify={handleVerify}>
      <p>Life is good on the inside.</p>
      </GoogleReCaptcha>
    <p>Life is good below.</p>
  </GoogleReCaptchaProvider>
  );

};

export default CaptPage;