import {useState,useEffect,createContext} from 'react'

export const UserContext=createContext();

export const UserProvider=({children})=>{
    const[user,setUser]=useState(null);


        const fetchRandomUser=()=>{
            fetch('https://randomuser.me/api')
                .then(res=>res.json())
                .then(data=>setUser(data.results[0]))
                .catch(error=>console.error('Error al cargar usuario',error));
            };

useEffect(()=>{
    fetchRandomUser();
},[]);    

return(
    <UserContext.Provider value={{user,fetchRandomUser}}  >
            {children}
    </UserContext.Provider>
  
);
};