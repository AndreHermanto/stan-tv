import React, {useEffect} from 'react';
import { Link, useNavigate } from "react-router-dom";

function Error(){
  const navigate = useNavigate();
  useEffect(() => {
    document.addEventListener("keydown", (e) => goBackHome(e));
  })
  const goBackHome = (e:KeyboardEvent) => {
    if(e.code === 'Backspace'){
      navigate('/home')
    }
  }

  return <div>
    An unknown error occured. Please try again later.
    Press Backspace to go back <Link to="/home">Home</Link>.
    </div>
}

export default Error;