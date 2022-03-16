import React from 'react';
import { AiOutlineArrowRight } from "react-icons/ai";
import {Oval} from "react-loader-spinner";

import { useEffect,useState } from 'react'
import axios from 'axios';
import './Lastarea.css'

function Lastarea({name,num}){
    const [data,setData]=useState([])
    const[loading,setLoading]=useState(false)
   const parse=require('html-react-parser')
    useEffect(()=>{
    
        
        
          axios.get("https://brooksandblake.com/blogapis/wp-json/wp/v2/posts/")
          
          .then(res =>{
           
          
           setData(res.data)
           setLoading(true)
          
          
         
          })
           
         
          
        
       .catch (err =>{
          
        console.log(err)
          })
       
    },[])    
    
    console.log(data)
  
    let cont=""
    
   
    
    return(

        <div>
            {loading?
            (
           <div className='Landingpage-body'>
           <div className='header-area'>
            <h1>{name}</h1>
            
            <div className='arrow-p'>
           
            <p>More {name}</p>
            <AiOutlineArrowRight/>
            </div>
            </div>
           
            {  data.map((val,indxx)=>{
                val.categories.map((vals)=>{
                   
                    if(((vals===6)&&(num===6))){
                      

                       
                      
                  
                       
                       return( cont+=`<div className="check">
                       <div className="image-div"><img src=${val.jetpack_featured_media_url} alt=""/></div>
                       <h4 className="title-parag"> ${val.title.rendered}</h4>
                        <p>${val.excerpt.rendered}</p>
                        </div>`

                        )
                              
                               
                     
                    }
              
             
                   
                       
               

                       
                  
                  
                      
                  
                       
               
            
                })
                return ""

              })}
          
            <div className='post-container'>
               
                     <div className='each-post'>
                         {parse(cont)}
              
           
            </div>
           
            </div>
        </div>) :
        (<div className='loader'><Oval
            type="Oval" width={40} color="#000000"/></div>)}
        </div>
    )


}

export default Lastarea