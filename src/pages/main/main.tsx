import React from 'react'
import Greetings from '../../components/greetings'
import SearchInput from '../../components/search-input/search-input'

function Main() {
  return (
    <div className="main">
      <SearchInput />
      <Greetings userName={'test'}/>
    </div>
  )
}

export default Main
