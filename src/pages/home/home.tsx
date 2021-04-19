import React from 'react'
import CurrentlyReading from '../../components/currently-reading'
import Discover from '../../components/discover'
import Greetings from '../../components/greetings'
import Review from '../../components/reviews'
import {mockedOriginalsData} from "../../helpers/mock.helper";

function Home() {
  return (
    <div className="home">
      <Greetings userName={'Mehmed Al Fatih'}/>
      <Discover/>
      <CurrentlyReading title={'Originals'}
       author={'Adam Grant'}
       currentChapter={'2'}
       totalChapers={'9'}
       detail={mockedOriginalsData}/>

       <Review/>
    </div>
  )
}

export default Home
