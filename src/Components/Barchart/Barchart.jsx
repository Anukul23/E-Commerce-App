import React from 'react'
import "./Barchart.css"
import {Bar} from "react-chartjs-2"
import Chart  from "chart.js/auto"
import {UserData} from "../../data"
import { useState } from 'react';
const Barchart = (props) => {
    const [userdata,setuserdat]=useState({
        labels:UserData.map((data)=>data.month),
        datasets:[{
         label:"users gained",
         data:UserData.map((data)=>data.usergain),
         backgroundColor:["blue"]
        }]
      
       })
    
  return (
    <div style={{display:'flex', marginTop:20}}>
    <div  style={{width:700,  marginLeft:200 ,marginTop:58}}>
      <Bar data={userdata} />
      </div>

      <div className="left" style={{height:400 ,marginLeft:60}}>
             <div className="titel">
                <h4><span className='bi bi-calendar3'></span>Guest Feedback <span className=''></span></h4>
               </div>
               <hr/>
               <div className="work-detail">
                <div className="work-list">
                <p style={{marginTop:-38}}>Salman</p> 
                <div style={{width:200, marginLeft:216, marginTop:-6}}>
                <span  className='bi bi-star-fill' ></span>
                <span className='bi bi-star-fill' ></span>
                <span className='bi bi-star-fill' ></span>
                </div>
                <h5> Amenities could be better . </h5>
                
                <p>Shenaaz</p>
                <div style={{width:200, marginLeft:216, marginTop:-6}}>
                <span className='bi bi-star-fill' ></span>
                <span className='bi bi-star-fill'></span>
                <span className='bi bi-star-fill'></span>
                <span className='bi bi-star-fill' ></span>
               
                
                </div>
                <h5>Good place to visit in summer .</h5>
                
                <p>Housekeeping</p>
               <div style={{width:200, marginLeft:216, marginTop:-6}}>
               <span className='bi bi-star-fill' ></span>
                <span className='bi bi-star-fill' ></span>
                <span className='bi bi-star-fill' ></span>
                
               </div>
                

                <h5>Check in experience is so pathetic .</h5>
                <h5> </h5>
                <p>Housekeeping</p>
                <div style={{width:200, marginLeft:216, marginTop:-6}}>
                <span className='bi bi-star-fill' ></span>
                <span className='bi bi-star-fill' ></span>
                </div>

                </div>
                
               </div>
            </div>
    </div>
  )
}

export default Barchart
