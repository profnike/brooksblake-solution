import React from 'react';
import Header from '../../Component/Header/Header'
import parse from 'html-react-parser'
import{html,render} from 'lit';
import { useEffect,useState } from 'react'
import axios from 'axios';
import '../Singlepost/Singlepost.css'

function Singlepost({name,num}){
    const [data,setData]=useState([])
    const [display,setDisplay]=useState({})
    const[arrs,setArrs]=useState([])
   const parse=require('html-react-parser')
    useEffect(()=>{
    
        
        
          axios.get("https://brooksandblake.com/blogapis/wp-json/wp/v2/posts/")
          
          .then(res =>{
           
          
           setData(res.data)
           
          
          
         
          })
           
         
          
        
       .catch (err =>{
          
            console.log(err)
          })
       
    },[])    
    
    console.log(data)
    let content=""
    let cont=""
    let showtext=""
    data.map((val)=>{
        showtext+=val.excerpt.rendered

    })
   
    
    return(

        <div>
           <div className='Landingpage-body'>
            <h1>{name}</h1>
           
            {  data.map((val,indxx)=>{
                val.categories.map((vals)=>{
                   
                    if(((vals===2)&&(num===2))||((vals===3)&&(num===3))||((vals===6)&&(num===6))||((vals===7)&&(num===7))){
                      

                       
                      
                  
                       
                       return( cont+=`<div className="check">
                       <div className="image-div"><img src=${val.jetpack_featured_media_url} alt=""/></div>
                       <h4 className="title-parag"> ${val.title.rendered}</h4>
                        <p>${val.excerpt.rendered}</p>
                        </div>`

                        )
                              
                               
                     
                    }
              
             
                   
                       
                    if(((vals===3)&&(num===3))){
                      

                       
                      
                  
                       
                        return( cont+=`<div className="check seperate">
                        <div className="image-div"><img src=${val.jetpack_featured_media_url} alt=""/></div>
                        <h4 className="title-parag"> ${val.title.rendered}</h4>
                         <p>${val.excerpt.rendered}</p>
                         </div>`
 
                         )
                               
                                
                      
                     }
               

                       
                      
                  
                      
                  
                       
                //     return( cont+=`<div className="check">
                //     <div className="image-div"><img src=${val.jetpack_featured_media_url} alt=""/></div>
                //     <h4 className="title-parag"> ${val.title.rendered}</h4>
                //      <p>${val.excerpt.rendered}</p>
                //      </div>`

                //      )
                           
                            
                  
                //  }
            
                })
                return ""

              })}
              {/* {  data.map((val,indxx)=>{
                val.categories.map((vals)=>{
                
             
                    if(((vals===3)&&(num===3))){
                      

                       
                      
                  
                       
                        return( cont+=`<div className="check">
                        <div className="image-div"><img src=${val.jetpack_featured_media_url} alt=""/></div>
                        <h4 className="title-parag"> ${val.title.rendered}</h4>
                         <p>${val.excerpt.rendered}</p>
                         </div>`
 
                         )
                               
                                
                      
                     }
               

                       
                      
                  
                       
             
            
                })
                return ""

              })} */}
            <div className='post-container'>
               
                     <div className='each-post'>
                         {parse(cont)}
              
           
            </div>
            </div>
        </div>
        </div>
    )


}

export default Singlepost