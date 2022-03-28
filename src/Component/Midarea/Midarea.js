import React from 'react';
import {  useNavigate } from 'react-router-dom';
import { AiOutlineArrowRight } from "react-icons/ai";
import {Oval} from "react-loader-spinner";
import { useEffect,useState } from 'react'
import axios from 'axios';
import '../Midarea/Midarea.css'

function Midarea({name}){
    const navigate=useNavigate()
   
    const[arr,setArr]=useState([])
    const[loading,setLoading]=useState(false)
   const parse=require('html-react-parser')
   let valarr=[]

  
   let arrs=[]
   useEffect(()=>{
   
        
        
          axios.get("https://brooksandblake.com/blogapis/wp-json/wp/v2/posts/")
          
          .then(res =>{
           
            valarr=res.data
            valarr.map((val)=>{
                val.categories.map((vals,ind)=>{
                   
                    if(vals===3){
                       
                       
                       
                   
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
           (<div className='Landingpage-body'>
               <div className='header-area'>
            <h1>{name}</h1>
            
            <div className='arrow-p'>
           
            <p>More {name}</p>
            <AiOutlineArrowRight/>
            </div>
            </div>
           
           
          
            <div className='post-container' >
               
                     <div className='mid-post'  >
                     
          
                        
                        { arr.map((val,index)=>{
                            return(
                                <div key={index} className="mid" onClick={(()=>{navigate(`/post/${val.id}`)})}  >
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
        </div>):
        (<div className='loader'><Oval
            type="Oval" width={40} color="#000000"/></div>)}
        </div>
    )


}

export default Midarea