import React from 'react'
import { useHistory } from "react-router-dom";
function BackButton() {
  const history = useHistory();
  return (
    <div>
            <button onClick={() => history.goBack()}>{'<--'}</button>

    </div>
  )
}

export default BackButton
