import { userLogin, userRegister } from "../Reduxe/auth/authAction";
import store from "../Reduxe/store";

export const handleLogin = (e, email, password) =>{
    e.preventDefault()
    try{
        if( !email || !password){
            return alert("Please provide all feilds")
        }
        store.dispatch(userLogin({email, password}));
    }
    catch(error){
      console.log(error);
    }
};

export const handleRegister = (
    e,
    name,
    email,
    password,
    phone,
    address,
    
   
  ) => {
    e.preventDefault();
    try{
        store.dispatch(userRegister({name,  email, password,phone ,address}))
    }
    catch(error){
        console.log(error);
    }
  };


//   export const handleContact=(
//     e,
//     name,
//     email,
//     phone,
//     message
//   ) =>{
//     e.preventDefault();
//     try{
//         store.dispatch(contact({name,email,phone,message}))
//     } 
//     catch(error){
//         console.log(error)
//     }
//   }

export const showAdditionalFeild =()=>{
  // if(showAdditionalFeild===true){
  //   return 
  // } else{
  //   return ''
  }
