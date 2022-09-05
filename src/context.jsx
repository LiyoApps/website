import React, { useContext, useReducer } from 'react' 
import { useEffect } from 'react';
import reducer from './reducer'


const AppContext = React.createContext();
const API="https://jsonplaceholder.typicode.com/posts"
const initialState={
    name:"",
    image:"",
    services:[]
}

const AppProvider = ({children}) =>{
    const [state,dispatch]=useReducer(reducer,initialState);
    const updateHomePage=()=>{
        return dispatch(
            {
                type:"HOME_UPDATE",
                payload:{
                    name:"Liyo",
                    image:"./images/hero3.gif"
                }
            }
        )
    }
    const updateAboutPage=()=>{
        return dispatch(
            {
                type:"ABOUT_UPDATE",
                payload:{
                    name:"Liyo",
                    image:"./images/hero1.jpg"
                }
            }
        )
    }
    const getServices = async(url)=>{
        try{
            const res= await fetch(url);
            const data=await res.json();
            dispatch({type:"GET_SERVICES",payload:data})

        }catch(error){
            console.log(error)

        }
    }
    useEffect(()=>{
        getServices(API);
    },[])
    return <AppContext.Provider value={{...state,updateHomePage,updateAboutPage}}>
        {children}
    </AppContext.Provider>
}
const useGlobalContext=()=>{
    return useContext(AppContext);
}

export {AppContext,AppProvider,useGlobalContext}