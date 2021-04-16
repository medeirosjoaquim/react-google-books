import React from 'react'
import Discover from '../../components/discover'
import Greetings from '../../components/greetings'
import SearchInput from '../../components/search-input/search-input'

function Home() {
  return (
    <div className="home">
      <SearchInput />
      <Greetings userName={'test'}/>
      <Discover/>
    </div>
  )
}

export default Home
