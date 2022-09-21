import "./Login.css";
import { useState } from "react";
import { useNavigate  } from "react-router-dom";
export default function Login() {
  let navigate  = useNavigate();
  const [name,setName]=useState();
  const [password,setpassword]=useState();
  const [errorMessage,setErrorMessage]=useState(false)

  console.log(name)
  console.log(password)

  const userLogin=()=>{
    if(name==="admin" && password==="admin"){
      localStorage.setItem("userName", "Admin")
      navigate('/Home')
     
    }else{
      setErrorMessage(true)
    }

  }
  return (
    <div> 
    <div className="login" > </div>
    <div className="center"> 
    <div className="card">
      <form > 
      <div className="header">
        <div className="logo"></div>
        <div>LOGO</div>
      </div>
      <div className="sub_header">Log in to your account</div>

      <div className="txt_field">
        <input type="text" required onChange={(e)=>{setName(e.target.value)}}></input>
        <span></span>
        <label> UserName</label>       
      </div>
      {errorMessage &&  <p className="error">invalid username</p>} 
      <div className="txt_field">
        <input type="Password" required onChange={(e)=>{setpassword(e.target.value)}}></input>
        <span></span>
        <label> Password</label>
      </div>
      {errorMessage && <p className="error">invalid password</p>} 
      <input value="login" type="submit" onClick={userLogin}></input>
      </form>
    </div>
    <div className="footer"> 
    <div className="text1">Can't log in? </div>
     <div className="text2"> Privacy policy Terms of user</div>
    </div>

    </div>
    </div>
  );
}
