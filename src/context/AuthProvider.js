import axios from "axios"
import { useContext, createContext, useEffect, useState } from "react";

const authContext = createContext(null);

function AuthProvider({ children }) {
    // const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);

    // useEffect(()=>{
    //     if(token){
    //         (async()=>{
    //             try{
    //                 console.log("From the try block: ", token)
    //                 const res = await axios({
    //                     method:'GET',
    //                     headers: {
    //                         authorization: token, // passing token as an authorization header
    //                     },
    //                     url:"http://13.127.127.40/api/user/",
    //                 })
    //                 console.log("User resposne: ",res)
    //             }catch(err){console.log(err)}
                
    //         })();
    //     }
    // }, [token])
    
    return (
        
        <authContext.Provider value={{ token, handleToken: setToken }}>
            {children}
        </authContext.Provider>
    );
}

const useAuth = () => useContext(authContext);

export { useAuth, AuthProvider };