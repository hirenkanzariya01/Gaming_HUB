import React from 'react'
import './HomePage.css'
import BannerImage from '../Images/banner-image.jpg'
import { IoCloudDownloadOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlinePlayCircle } from "react-icons/md";
import { PiNewspaperClipping } from "react-icons/pi";
import Tranding from './Tranding';


function HomePage() {
  return (
    <>
      <div className="main">
        <div className="heroSection">
          <div className="mainHeading">
            <h3>Welcome To Lugx</h3>
            <h1>Best Gaming Site Ever!</h1>
            <p>LUGX Gaming is free Bootstrap 5 HTML CSS website template for your gaming websites. You can download and use this layout for commercial purposes. Please tell your friends about TemplateMo</p>

            <div className="searchBox">
              <input type="text" className='input' placeholder='Type Something ' />
              <button>SEARCH NOW</button>
            </div>
          </div>

          <div className="mainImage">
            <img src={BannerImage} alt="" className='heroImage' />
            <div className="price">
              <h2>$22</h2>
            </div>
            <div className="discount">
              <h2>-40%</h2>
            </div>
          </div>


        </div>


        <div className="units">

          <div className="unit">
            <div className="icon">
              <IoCloudDownloadOutline className='i' />
            </div>
            <p>FREE STORAGE </p>
          </div>

          <div className="unit">
            <div className="icon">
              <FaRegUserCircle className='i' />
            </div>
            <p>USER MORE</p>
          </div>

          <div className="unit">
            <div className="icon">
              <MdOutlinePlayCircle className='i' />
            </div>
            <p>REPLAY READY </p>
          </div>

          <div className="unit">
            <div className="icon">
              <PiNewspaperClipping className='i' />
            </div>
            <p>EASY LAYOUT</p>
          </div>

        </div>

      </div>
        <Tranding />
    </>
  )
}

export default HomePage