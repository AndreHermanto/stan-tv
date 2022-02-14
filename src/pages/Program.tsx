import React, {useEffect, useState} from 'react';
import { useNavigate, useLocation, useParams } from "react-router-dom";
import Movie from "../components/Movie"

function Program() {
  const location = useLocation();
  const navigate = useNavigate();
  const params = useParams();
  const [program, setProgram] = useState({}); 
  useEffect(() => {
    document.addEventListener("keydown", (e) => goBackHome(e));
    
    if(hasProgramState(location.state) && params.programId == location.state.program.id){
      setProgram(location.state.program)
    }else{
      fetch('https://raw.githubusercontent.com/StreamCo/tv-coding-challenge/master/data.json')
      .then(response => response.json())
      .then(data => {
        const found = data.find((program: any) => program.id == params.programId);
        if(found){
          setProgram(found)
        }else{
          navigate('/error')
        }  
      })
      .catch((e) => {
        navigate('/error')
      });
    }
  });

  const goBackHome = (e:KeyboardEvent) => {
    if(e.code === 'Backspace'){
      navigate('/home')
    }
  }

  const hasProgramState = (state: object | null | any): state is any => {
    return state && (state as any).program !== undefined;
  }
 
  return (
    <div className='program'>
      <Movie program={program}/>
    </div>
  );
}

export default Program;
