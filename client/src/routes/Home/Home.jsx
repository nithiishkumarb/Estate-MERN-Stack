import React from 'react'
import "./home.scss"
import Search from "../../components/Search/Search"
import bg from "../../assets/bg.png"
const Home = () => {
  return (
    <div className='home'>
        <div className='textContainer'>
        <div className='wrapper'>
          <h1 className='title'>Find Real Estate & Get Your Dream Place</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos explicabo suscipit cum eius, iure est nulla animi consequatur facilis id pariatur fugit quos laudantium temporibus dolor ea repellat privident impedit!</p>
          <Search/>
          <div className='boxes'>
            <div className='box'>
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className='box'>
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className='box'>
              <h1>1200</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
        </div>
        <div className='imgContainer'>
          <img src={bg} alt="bg"/>
        </div>
    </div>
  )
}

export default Home