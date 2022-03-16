import React from 'react';
import Header from '../../Component/Header/Header'
import { useEffect,useState } from 'react'
 import axios from 'axios'
import '../Landingpage/Landingpage.css'
import Singlepost from '../../Component/Firstarea/Firstarea';
import Midarea from '../../Component/Midarea/Midarea';
import Lastarea from '../../Component/Lastarea/Lastarea';

function Landingpage(){
    const [data,setData]=useState([])
   
   
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
    return(

        <div className='Landingpage'>
            <Header/>
            <Singlepost name={"Blog"}num={2} />
            <Midarea name={"Editorial"} num={3}/>
            <Lastarea name={"News"} num={6}/>
           
        </div>
    )


}

export default Landingpage