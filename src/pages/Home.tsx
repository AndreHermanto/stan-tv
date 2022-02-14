import React, { useEffect, useState }from 'react';
import Carousel from "../components/Carousel";
import { useNavigate } from "react-router-dom";

function Home() {
  const [programs, setPrograms] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/StreamCo/tv-coding-challenge/master/data.json')
      .then(response => response.json())
      .then(data => setPrograms(data))
      .catch((e) => {
        navigate('/error')
      });
  }, [programs]);

  return (
    <div className="home">
      <Carousel programs={groupProgramIntoPage(programs,6)}/>
    </div>
  );
}

export default Home;

export const groupProgramIntoPage = (data: any, n: number) =>{
  let group: any[] = [];
  for (let i = 0, j = 0; i < data.length; i++) {
      if (i >= n && i % n === 0)
          j++;
      group[j] = group[j] || [];
      group[j].push(data[i])
  }
  return group;
}
