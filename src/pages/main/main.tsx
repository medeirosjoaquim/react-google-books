import React from 'react'
import BottomBar from '../../components/bottom-bar/bottom-bar'
import SearchInput from '../../components/search-input/search-input'

function Main() {
  return (
    <div className="main">
      <SearchInput />
      <BottomBar />
    </div>
  )
}

export default Main
