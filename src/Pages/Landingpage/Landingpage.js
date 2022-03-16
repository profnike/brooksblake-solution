import React from 'react';
import Header from '../../Component/Header/Header'
import { useEffect,useState } from 'react'
 import axios from 'axios'
import '../Landingpage/Landingpage.css'
import Singlepost from '../../Component/Singlepost/Singlepost';

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
            <Singlepost name={"Editorial"}num={3} />
            {/* <Singlepost name={"Editorial"}num={3} />
            <Singlepost name={"Match Review"}num={5} /> */}
            <Singlepost name={"News"}num={6} />
            {/* <Singlepost name={"Player Focus"}num={7} /> */}
        </div>
    )


}

export default Landingpage