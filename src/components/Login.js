import React,{useState} from 'react'
import "../styles/login.css";
import {Link,useHistory} from "react-router-dom";
import {auth} from "../firebase.js";

function Login() {
	const history = useHistory();
	const [email,setEmail] = useState("");
	const [password,setPassword] = useState("");
	const signIn = e =>{
		e.preventDefault();

		// login
		auth.signInWithEmailAndPassword(email,password).then((auth)=>{
			console.log(auth);
			history.push("/")
		}).catch(error => alert(error.message))

	}

	const Register = e =>{
		e.preventDefault();

		// register
		auth.createUserWithEmailAndPassword(email,password).then((auth)=>{
			console.log(auth);
			if(auth){
				history.push('/')
			}
		}).catch(error => alert(error.message))

	}
  return (
	<div className="login">
		<Link to="/">
		<img className='login_logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
		</Link>
		<div className="login_container">
			<h1>Sign In</h1>
			<form action="">
				<h5>E-mail</h5>
				<input value={email} onChange={
					e=>setEmail(e.target.value)
				} type="text" />
				<h5>Password</h5>
				<input value ={password} onChange={
					e=> setPassword(e.target.value)
				} type="password" />
				<button onClick={signIn} type="submit" className='login_SignIn_btn'>Sign In</button>
			</form>
			<p>By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>
			<button onClick={Register} className='login_register_btn'>Create your Amazon Account</button>
		</div>
	</div>
  )
}

export default Login