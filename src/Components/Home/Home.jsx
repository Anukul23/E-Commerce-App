import React from 'react'
import "../Home/Home.css"
import graph from "../Assests/graph.png"
import feedback from "../Assests/feedback.png"
const Home = () => {
  return (
    <div className='home-main'>
    <div className='home'>
        <h3>Today <span className='bi bi-chevron-left'></span> <span className='bi bi-chevron-right'></span> November 2023</h3> 
      
    </div>
<hr></hr>
    
    <div className="room-details">
            
    
         <div className="rooms-catagory">
            <p><b>Rooms</b> <span>09 <hr/></span></p>
            <p>Standard rooms</p>
            <p>Courtyard rooms</p>
            <p>Executive rooms</p>
            <p>Presidential Rooms</p>
            </div>  
            <div className="friday">
                <h4>09</h4>
                <p>Friday</p>
                <p><button className='btn btn-info'>7</button></p>
                <p><button className='btn btn-warning'>1</button></p>
                <p><button className='btn btn-success'>3</button></p>
                <p><button className='btn btn-primary'>6</button></p>
                </div> 
                

                    <div className="friday">
                <h4>10</h4>
                <p>saturday</p>
                <p><button className='btn btn-danger'>7</button></p>
                <p><button className='btn btn-primary'>1</button></p>
                <p><button className='btn btn-success'>3</button></p>
                <p><button className='btn btn-info' >6</button></p> 
                </div> 
                
                    <div className="friday">
                <h4>11</h4>
                <p>Sunday</p>
                <p><button className='btn btn-primary'>7</button></p>
                <p><button className='btn btn-info'>1</button></p>
                <p><button className='btn btn-danger'>3</button></p>
                <p><button className='btn btn-warning c'>6</button></p>
                </div> 
                

                    <div className="friday">
                <h4>12</h4>
                <p>Monday</p>
                <p><button className='btn btn-danger'>7</button></p>
                <p><button className='btn btn-info'>1</button></p>
                <p><button className='btn btn-primary'>3</button></p>
                <p><button className='btn btn-warning'>6</button></p>
                </div>
                    <div className='friday'>
                <h4>13</h4>
                <p>Tusday</p>
                <p><button className='btn btn-danger'>7</button></p>
                <p><button className='btn btn-success'>1</button></p>
                <p><button className='btn btn-info'>3</button></p>
                <p><button className='btn btn-success'>6</button></p>
                </div>
                

                    <div className="friday">
                <h4>14</h4>
                <p>Wednesday</p>
                <p><button className='btn btn-info'>7</button></p>
                <p><button className='btn btn-success'>1</button></p>
                <p><button className='btn btn-info'>3</button></p>
                <p><button className='btn btn-warning'>6</button></p>
                </div> 
                

                    <div className="friday">
                <h4>15</h4>
                <p>Thursday</p>
                <p><button className='btn btn-success'>7</button></p>
                <p><button className='btn btn-info'>1</button></p>
                <p><button className='btn btn-info'>3</button></p>
                <p><button className='btn btn-danger'>6</button></p>
                </div> 
                
    </div>

     <div className="row-2">
        <div className="col-1">
        <div className="heading">
            <h4><span className='bi bi-calendar3'></span> Arrivals <span className='bi bi-chevron-right'></span></h4>
            <div>
                <span className='bi bi-three-dots-vertical'></span>
            </div>
        </div>
        <hr/>
        <div className="guest-list">
        <div className="list-1">
          <ul>
            <li><b>1.  Rahmatulaah</b></li>
            <p>#201 Single room</p>
            <li><b>2.  Shaukath</b></li>
            <p>#103 Double room</p>
            <li><b>3.  Imtiyaz ali</b></li>
            <p>#202 Single room</p>
            <li><b>4.  Shaukath</b></li>
            <p>#103 Double room</p>
          </ul>
          <ul>
            <li><button>Check-In</button></li>
            <li><button>Check-In</button></li>
            <li><button>Check-In</button></li>
            <li><button>Check-In</button></li>
          </ul>
       
        </div>
        <div className="list-1">
        <ul>
            <li><b>5.  Rahmatulaah</b></li>
            <p>#201 Single room</p>
            <li><b>6.  Shaukath</b></li>
            <p>#103 Double room</p>
            <li><b>7.  Imtiyaz ali</b></li>
            <p>#202 Single room</p>
            <li><b>8.  Shaukath</b></li>
            <p>#103 Double room</p>
          </ul>
          <ul>
            <li><button>Check-In</button></li>
            <li><button>Check-In</button></li>
            <li><button>Check-In</button></li>
            <li><button>Check-In</button></li> 
            </ul>
        </div>
        </div>
        </div>
        <div className="col-2">
        <div className="heading">
            <h4><span className='bi bi-calendar3'></span> Departures <span className='bi bi-chevron-right'></span></h4>
            <div>
                <span className='bi bi-three-dots-vertical'></span>
            </div>
        </div>
        <hr/>
        <div className="guest-list">
        <div className="list-1">
          <ul>
            <li><b>1.  Rahmatulaah</b></li>
            <p>#103 Double room</p>
            <li><b>2.  Shaukath</b></li>
            <p>#103 Double room</p>
            <li><b>3.  Imtiyaz ali</b></li>
            <p>#202 Single room</p>
            <li><b>4.  Shaukath</b></li>
            <p>#103 Double room</p>
          </ul>
          <ul>
            <li><button>Check-In</button></li>
            <li><button>Check-In</button></li>
            <li><button>Check-In</button></li>
            <li><button>Check-In</button></li>
          </ul>
       
        </div>
        </div>
        </div>
        </div>
        <div className='r3-container'>
            <div className="left">
             <div className="titel">
                <h4><span className=''></span>Employee Tasks <span className=''></span></h4>
               </div>
               <hr/>
               <div className="work-detail">
                <div className="work-list">
                <h5>Room Clening</h5>
                <p>Housekeeping</p>
                <h5>Laumdry</h5>
                <p>Laundry</p>
                <h5>Electrical Reparis</h5>
                <p>Housekeeping</p>
                <h5>Room Cleaning</h5>
                <p>Housekeeping</p>
                </div>
                <div className='day-list'>
                    <ul>
                        <li>Today</li>
                        <li>Today</li>
                        <li>Tommorow</li>
                        <li>2 days</li>
                    </ul>
                </div>
               </div>
            </div>
            <div className="right">
                <div className="titel-right">
                    <h4> <span className=''></span>Service Request <span className=''></span></h4>
                </div>
                <hr/>
                <div className="service-details">
                    <div className="service-list">
                    <h5>Cappuccino</h5>
                <p>Ismail khan</p>
                <h5>laundry</h5>
                <p>samreen</p>
                <h5>Rented Car</h5>
                <p>Asraf siddique</p>
                <h5>Rented Car</h5>
                <p>Asraf siddique</p>
                    </div>
                    <div className="servie-time">
                        <ul>
                            <li>23mins ago</li>
                            <li>23mins ago</li>
                            <li>23mins ago</li>
                            <li>1hr ago</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
          <div className="row-4-container">
            <div>
                <img src={graph} alt="" />
            </div>
            <div>
                <img src={feedback} alt="" />
            </div>
          </div>
         </div>
  )
}

export default Home

