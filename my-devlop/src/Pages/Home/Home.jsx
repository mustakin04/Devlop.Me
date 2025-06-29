import React from 'react'
import Navbar from '../../Component/Navbar/Navbar'
import Banner from '../../Component/Banner/Banner'
import Skill from '../../Component/Skill/Skill'
import Developing from '../../Component/Developing/Developing'

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Skill></Skill>
      <Developing></Developing>
    </div>
  )
}

export default Home