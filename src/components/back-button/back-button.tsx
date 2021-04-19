import React from 'react'
import { useHistory } from "react-router-dom";
const leftArrow = require("../../assets/images/arrow-left.svg") as string;

function BackButton() {
  const history = useHistory();
  return (
    <div onClick={()=> history.goBack()}>
      <img width={24} height={24} src={leftArrow} alt="Go back" />
    </div>
  )
}

export default BackButton
