import React from 'react'
import "./Rooms/Room.css"
import logo from "../Components/Assests/logo.png"
import "bootstrap-icons/font/bootstrap-icons.css"
import Navbar from './Navbar/Navbar'
const Room = () => {
  return (
    <>
    <div className='left-panel'>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="vilaa">
      Burhani Villa  <span className='bi bi-chevron-compact-down'></span>    
      </div>
      </div>

      <div className="left-btn">
      <div className="dashboard">
      <span className='bi bi-house-door'></span> <button>  Dashboard</button>
         </div>
         <div className="frontdesk">
         <span className='bi bi-pencil-square'></span><button>  FrontDesk</button>
         </div>
         <div className="guset">
         <span className='bi bi-person'></span><button> Guset </button>
         </div>
         <div className="room">
         <span className='bi bi-door-open'></span><button>  Rooms</button>
         </div>
         <div className="rates">
         <span className='bi bi-tag'></span><button>  Rates </button>
         </div>
         <div className="settings">
         <span className='bi bi-gear'></span><button> Settings</button>
         </div>

      </div>
      
      </>
  )
}

export default Room
