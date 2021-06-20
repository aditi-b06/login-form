import React,{useState} from 'react';
import FacebookLogin from 'react-facebook-login';
import '../index.css';

function Facebook(){
    const [name,setname]=useState("");
    const[url,seturl]=useState("");
    const [email,setemail]=useState("");
    const [id,setid]=useState("");
   const responseFacebook=(response)=>{
    console.log("login result",response);
    
     setname(response.name);
     seturl(response.picture.data.url);
     setemail(response.email);
     setid(response.id);
  }
   const componentClicked=(data)=>{
    console.warn(data);
  }
  if(name!=""){
    // window.location.href="/profile-info";
  }
  console.log("url:",url);
  console.log(id);
    return(
      <div>
        <FacebookLogin
        cssClass="fbicon"
        appId="2917180978553106"
        autoLoad={true}
        fields="name,email,picture"
        onClick={componentClicked}
        callback={responseFacebook}
        icon="fa-facebook"
      />
      </div>
    )
  }
export default Facebook;