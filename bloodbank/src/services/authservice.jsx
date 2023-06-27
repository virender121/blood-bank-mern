import { userLogin, userRegister } from "../Reduxe/auth/authAction";
import store from "../Reduxe/store";

export const handleLogin = (e, email, password, role) =>{
    e.preventDefault()
    try{
        if(!role || !email || !password){
            return alert("Please provide all feilds")
        }
        store.dispatch(userLogin({email, password, role}));
    }
    catch(error){
      console.log(error);
    }
};

export const handleRegister = (
    e,
    name,
    role,
    email,
    password,
    phone,
    organisationName,
    address,
    hospitalName,
   
  ) => {
    e.preventDefault();
    try{
        store.dispatch(userRegister({name, role, email, password,phone, organisationName,address, hospitalName}))
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
