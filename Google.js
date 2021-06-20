
import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import New from './New';
const clientId = "397651191384-ggc76umffh7fkgm3gpup61gfn7aqsfpg.apps.googleusercontent.com";

function Google() {
  
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [Id, setId] = useState("");
    const [imgurl, setimgurl] = useState("");
    const [showloginButton, setShowloginButton] = useState(true);
    const [showlogoutButton, setShowlogoutButton] = useState(false);
    const onLoginSuccess = (res) => {
        console.log('Login Success:', res.profileObj);
        alert("bravo logged in");
        setname(res.profileObj.name);
        setemail(res.profileObj.email);
        setId(res.profileObj.Id);
        setimgurl(res.profileObj.imageUrl);
        setShowloginButton(false);
        setShowlogoutButton(true);
    };
   
    // console.log("got it");
    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };
    if(name!=""){
        // window.location.href="/profile-info";
      }
    const onSignoutSuccess = () => {
        alert("You have been logged out successfully");
        console.clear();
        setShowloginButton(true);
        setShowlogoutButton(false);
    };
   
    return (
        <div>
            {showloginButton ?
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Sign In"
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                /> : null}

            {showlogoutButton ?
                <GoogleLogout
                    clientId={clientId}
                    buttonText="Sign Out"
                    onLogoutSuccess={onSignoutSuccess}
                >
                </GoogleLogout> : null
            }

         
            
        </div>
    );
}

export default Google;