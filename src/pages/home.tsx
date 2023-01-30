import React from 'react'
import mainLogo from '../assets/poikus/poikus.png'

const Home = () => {
  return (
    <div className={`flex bg-primary h-screen w-screen flex-col justify-center items-center content-center`}>
      <p className="text-2xl text-secondary">React Typescipt Template</p>
      <p id="owner" className="text-secondary">
        Created by Omer Hamid Kamisli for POIKUS
      </p>
      <img src={mainLogo} width={300} className="absolute bottom-20" />
    </div>
  )
}

export default Home
