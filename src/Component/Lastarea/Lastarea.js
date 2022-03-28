import React from 'react';
import { AiOutlineArrowRight } from "react-icons/ai";
import {Oval} from "react-loader-spinner";
import {  useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react'
import axios from 'axios';
import './Lastarea.css'

function Lastarea({name}){
  
    const[loading,setLoading]=useState(false)
    const[arr,setArr]=useState([])
   const parse=require('html-react-parser')
   const navigate=useNavigate()
   let valarr=[]

   let arrs=[]
    useEffect(()=>{
    
        
        
          axios.get("https://brooksandblake.com/blogapis/wp-json/wp/v2/posts/")
          
          .then(res =>{
            valarr=res.data
            valarr.map((val)=>{
                val.categories.map((vals,ind)=>{
                   
                    if(vals===6){
                       
                     
                       
                   
                    arrs.push(Object.assign({},val))
                    setArr(arrs)

                    }
                   
                    
                })
             
             
                   

            })
          
        //    setData(res.data)
           setLoading(true)
          
          
         
          })
           
         
          
        
       .catch (err =>{
          
       
          })
       
    },[])    
    
   
  
   
    
   
    
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
           
            
          
            <div className='post-container'>
               
                     <div className='each-post'>
                        
                         { arr.map((val,index)=>{
                            return(
                                <div key={index} className="check" onClick={(()=>{navigate(`/post/${val.id}`)})}  >
               <div className="image-div"><img src={val.jetpack_featured_media_url} alt=""/></div>
               <div>
               <h4 className="title-parag"> {parse(val.title.rendered)}</h4>
                <span >{parse(val.excerpt.rendered)}</span>
                </div>
                </div>
                            )


                        })}
                       
                       
              
           
            </div>
           
            </div>
        </div>) :
        (<div className='loader'><Oval
            type="Oval" width={40} color="#000000"/></div>)}
        </div>
    )


}

export default Lastarea