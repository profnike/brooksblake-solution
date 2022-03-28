import React from 'react';
import {  useParams } from 'react-router-dom';
import { useEffect,useState } from 'react'
import Header from '../../Component/Header/Header'
import user from '../../Asset/user-square.png'
import time from '../../Asset/Vector.png'
import facebook from '../../Asset/facebook.png'
import whatsapp from '../../Asset/whatsapp.png'
import twitter from '../../Asset/twitter.png'
import linkedin from '../../Asset/linkedin.png'
import calendar from '../../Asset/calendar-2.png'
import {Oval} from "react-loader-spinner";
import axios from 'axios';
 import '../Singlepage/Singlepage.css'
function Singlepage(){
    const[loading,setLoading]=useState(false)
    const params=useParams()
    let current=params.id
    
  
    const[authorr,setAuthorr]=useState("")
    const[post, setPost]=useState("")
    const[title, setTitle]=useState("")
    const[images, setImage]=useState("")
   
    const parse=require('html-react-parser')
    const[yr,setYr]=useState("")
    const[day,setDay]=useState("")
    
    const[month,setMonth]=useState("")
   
    let currval={}
    let postcontents=""
    let posttitle=""
    let postimage=""
    
    useEffect(()=>{
   
        
        
        axios.get("https://brooksandblake.com/blogapis/wp-json/wp/v2/posts/")
        
        .then(res =>{
         
            setLoading(true)
           
       
         
         let cont=res.data;
        
         let author=""
       
         cont.forEach((val)=>{
             if(val.id===(+current)){
                currval=val
             
              
               postcontents=`<div>
               ${val.content.rendered}
               </div>`
             posttitle=`<div>
             ${val.excerpt.rendered}
             </div>`
             postimage=`${val.jetpack_featured_media_url}`
               
              
               
             }
         
           
              if(val.author==1){
                  author="Admin"
               
              }
             let pubDate=(val.modified).toLocaleString()
            
              setYr(pubDate.split("-")[0])
              let mnth=pubDate.split("-")[1]
              let daytemp=pubDate.split("-")[2]
         
          setDay(daytemp.split("T")[0])
              let firstvalmonth=mnth.split("")[0]
              let secndvalmonth=mnth.split("")[1]
           
              if(firstvalmonth==="0"){
               mnth=secndvalmonth
              }
              let months = [ "","January", "February", "March", "April", "May", "June", 
           "July", "August", "September", "October", "November", "December" ];

           let selectedMonthName = months[mnth];
           setMonth(selectedMonthName)
          
             

         })
        
        
         setPost(postcontents)
         setTitle(posttitle)
         setImage(postimage)
         setAuthorr(author)
       
         
        
        })
         .catch (err =>{
          
       
        })
      
  },[])   
   
 
   
    return(
        <div className='total-page'>
            <Header/>

             {loading?
           (
            <div className='single-page'>
            <h3>{parse(title)}</h3>
            <div className='sharePost'>
            <p className='sharethisPost'>Share This Post:</p>
            <span>
                <img src={facebook} alt=""/>
                <img src={twitter} alt=""/>
                <img src={whatsapp} alt=""/>
                <img src={linkedin} alt=""/>
            </span>
            </div>
            <div className='single-pageimage-div'>
           
          <img src={images} alt=""/>
          </div>
          <div className='about-post'>
              <span>
              <img src={user} alt=""/>
              {authorr}
              </span>
              <span>
              <img src={calendar} alt=""/>
                  {day} {month} {yr}
              </span>
              <span>
                  <img src={time} alt=""/>
                  <p>15 mins Read</p>
              </span>

          </div>
         
          {parse(post)}
         
          <h3 className='comment-header'>Reader Comments</h3>
          <div className='comments'>
              <div >
              <h3>Nil Comments</h3>
              </div>
          <div className='discussion-area'>
              <h4 className='join'>Join the discussion</h4>
              <input className='comment-input' placeholder='Write your comment'/>
              <div className='input-area'>
                  <span>
              <label>Email Address</label>
                  <input className='other-input'/>
                  </span>
                  <span>
                  <label>Your Name</label>
                  <input className='other-input'/>
                  </span>
                  
              </div>
              <button>Submit</button>
              </div>
          </div>
          </div>):
        (<div className='loader'><Oval
            type="Oval" width={40} color="#000000"/></div>)}
        </div>
    )
}
export default Singlepage