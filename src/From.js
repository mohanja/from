import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './From.css'

const From=()=>{

    const naviaget=useNavigate()

    const[values,setValues]=useState({
        username:'',
        email:'',
        password:'',
        copassword:''
    })
     

const [errors,setErrors]=useState({})

    function formValied(e){
        e.preventDefault()
const{name,value}=e.target
    
setValues({
        ...values, [name] : value
    
})

    }

    const hadilSumbit=(e)=>{
        e.preventDefault()
        const valiedError={}
        if(!values.username.trim()){
            valiedError.username="username is requried"
        }

         if(!values.email.trim()){
            valiedError.email="email is requried"
        }

               if(!values.password.trim()){
            valiedError.password="password is requried"
        }else if(values.password.length<5){
            valiedError.password="password is at list 5 digit"
        }

                if(!values.copassword.trim()){
            valiedError.copassword="confirm password is requried"
        }else if(values.copassword !== values.password){
            valiedError.email="confirm password dose not match"
        }
        setErrors(valiedError)

        if(Object.keys(valiedError).length===0){
            
            alert("form sumbitted successfully")
            naviaget("/home")
        //    window.location.href="https://master--incomparable-pony-50ee4c.netlify.app/"
        }
    }

    return(
          <>
    <div  class="form">
      <div class="title">Welcome</div>
      <div class="subtitle">Let's create your account!</div>
      <form onSubmit={hadilSumbit}>
      <div class="input-container ic1">
        <input id="firstname" class="input" name="username" onChange={formValied} type="text" placeholder=" " />
        <div class="cut"></div>
        <label for="firstname" class="placeholder">User name</label>
      </div>
      {errors.username && <p>{errors.username}</p>}
      <div class="input-container ic2">
        <input id="lastname" class="input" name="email" onChange={formValied} type="text" placeholder=" " />
        <div class="cut"></div>
        <label for="lastname" class="placeholder">Email</label>
      
      </div>
      {errors.email && <p>{errors.email}</p>}
      <div class="input-container ic2">
        <input id="email" class="input" onChange={formValied} name="password" type="text" placeholder=" " />
        <div class="cut "></div>
        <label for="email" class="placeholder">Password</label>
       
      </div>
      {errors.password && <p>{errors.password}</p>}
      <div class="input-container ic2">
        <input id="email" class="input" onChange={formValied} name="copassword" type="text" placeholder=" " />
        <div class="cut"></div>
        <label for="email"  class="placeholder">Confirm Password</label>
      
      </div>
      {errors.copassword && <p>{errors.copassword}</p>}
      <button type="sumbit" class="submit">submit</button>
      </form>
    </div>
    </>
    )
}

export default From