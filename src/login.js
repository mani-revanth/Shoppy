import React,{useState} from "react";
import ReactDOM from "react-dom";
import * as Components from "./Components";
import { UseUserAuth } from "./context/UserAuthContext";
//import { Alert } from "bootstrap";
import { useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
//import { async } from "@firebase/util";

export default function Login() {
  const [iemail,setIemail]=useState("");
  const [uemail,setUemail]=useState("");
  const [ipass,setIpass]=useState("");
  const [upass,setUpass]=useState("");
  //const [error,setError]=useState("");
  const [signIn1, toggle] = React.useState(true);
  const {signUp}=UseUserAuth();
  const {loggingIn,googleSignIn,passreset}=UseUserAuth();
  const navigation=useNavigate();
  const handleSignin=async ()=>{
    //e.preventDefault();
    try{
      //await signUp()
      await loggingIn(iemail,ipass);
      //console.log(iemail);
      navigation("/home");
    }catch(err){
      alert(err.message);
    }
  }

  const handleSignup =async ()=>{
    //console.log("hello world");
    try{
      await signUp(uemail,upass);
      alert("your sigup is completed succesfully");
      navigation("/");
    }catch(err){
      alert(err.message);
      //setError(err.message);
    }
  }

  const handlegooglesign =async ()=>{
    try{
      await googleSignIn();
      navigation("/home");
    }catch(err){
      alert(err.message);
    }
  }

  const handleforgetpass = async ()=>{
    try{
      await passreset(iemail);
      alert("password reset email sent");
    }catch(err){
      alert(err.message);
    }
  }
  return (
    
    <div style={{height:'100vh',maxWidth:'100%',width:'100vw',justifyContent:'center',display:'flex',alignItems:'center',textAlign:'center',backgroundImage:`url(./backgroun2.svg)`,backgroundBlendMode:'overlay',backgroundSize:'cover',backgroundRepeat:'no-repeat',position:'relative',backgroundPosition:'center',backgroundAttachment:'fixed'}}>
    
    <img style={{width:'100%',height:'100%',minHeight:'50rem',position:'absolute',zIndex:'0'}} src='./Colored Shapes.svg'/>

    <Components.Container>
      <Components.SignUpContainer signingIn={signIn1}>
        <Components.Form onSubmit={(e)=>{e.preventDefault();handleSignup();}}>
          <Components.Title>Create Account</Components.Title>
          <Components.Input type="email" placeholder="Email" 
            onChange={(e)=>{setUemail(e.target.value);}}
          />
          <Components.Input type="password" placeholder="Password" 
            onChange={(e)=>{setUpass(e.target.value)}}
          />
          <Components.Button style={{borderRadius:'0',backgroundColor:'#617143'}} type="submit">Sign Up</Components.Button>
          <br/>
          <Components.respoText>already have an account ?</Components.respoText>
          <Components.respoText style={{cursor:'pointer',fontWeight:'bold',fontSize:'120%'}} onClick={()=>toggle(true)}>sign-in</Components.respoText>
        </Components.Form>
      </Components.SignUpContainer>
      <Components.SignInContainer signingIn={signIn1}>
        <Components.Form onSubmit={(e)=>{e.preventDefault();handleSignin();}}>
          <Components.Title>Sign in</Components.Title>
          {/*error && <Alert variant="danger">{error}</Alert>*/}
          <Components.Input type="email" placeholder="Email" 
            onChange={(e)=>{setIemail(e.target.value)}}
          />
          <Components.Input type="password" placeholder="Password" 
            onChange={(e)=>{setIpass(e.target.value)}}
          />
          <div style={{display:'flex',justifyContent:'space-between',width:'100%',}}>
          <Components.Button style={{height:'80%',width:'50%',borderRadius:'0',backgroundColor:'#4E31AA'}} type="submit">Sign-In</Components.Button>
          <Components.Anchor onClick={(e)=>{e.preventDefault();handleforgetpass()}} style={{cursor:'pointer'}}>Forgot password?</Components.Anchor>
          </div>
          <GoogleButton onClick={(e)=>{e.preventDefault();handlegooglesign();}} style={{width:'100%'}}/>
          <br/>
          <Components.respoText>dont have account ?</Components.respoText>
          <Components.respoText style={{cursor:'pointer',fontWeight:'bold',fontSize:'120%'}} onClick={()=>toggle(false)}>sign up</Components.respoText>
        </Components.Form>
      </Components.SignInContainer>
      <Components.OverlayContainer signingIn={signIn1}>
        <Components.Overlay signingIn={signIn1}>
          <Components.LeftOverlayPanel signingIn={signIn1}>
            <Components.Title>Welcome Back!</Components.Title>
            <Components.Paragraph>
              To keep connected with us please login with your personal info
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(true)}>
              Sign In
            </Components.GhostButton>
          </Components.LeftOverlayPanel>
          <Components.RightOverlayPanel signingIn={signIn1}>
            <Components.Title>Hello, Friend!</Components.Title>
            <Components.Paragraph>
              Enter your personal details and start journey with us
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(false)}>
              Sign Up
            </Components.GhostButton>
          </Components.RightOverlayPanel>
        </Components.Overlay>
      </Components.OverlayContainer>
    </Components.Container>
    </div>
  );
}