import React from 'react';
import './Carousel.css';
import { useNavigate } from "react-router-dom";

function Carousel(props: any) {
  const { programs } = props;
  const navigate = useNavigate();

  const getProgramDetails = (program:any) => {
    navigate(`/program/${program.id}`, { state: {program: program} });
  }
  

  return (
  <section className="carousel" aria-label="Gallery" data-testid="carousel">
    <ol className="carousel__viewport">
      {
        programs.map((programPage:any, i:number) => {
          let next = i === programs.length - 1 ? 1 : i+2;
          let prev = i === 0 ? programs.length : i;
          return(      
          <li key={i} id={"carousel__slide"+(i+1)}
              className="carousel__slide">
            <div className="carousel__snapper">
              <div className="content">
                {programPage.map((program:any, i:number) => {
                  return <img key={program["id"]} onClick={() => getProgramDetails(program)} className='program-img' src={program["image"]} />
                  }
                )}

              </div>
            </div>
            <a href={"#carousel__slide"+(prev)}
              className="carousel__prev">Previous</a>
            <a href={"#carousel__slide"+(next)}
              className="carousel__next">Next</a>
          </li>
          )
        })
      }
    </ol>
    <aside className="carousel__navigation">
      <ol className="carousel__navigation-list">
        {
          programs.map((programPage:any, i:number) => {
            return(        
              <li key={i} className="carousel__navigation-item">
                <a href={"#carousel__slide"+(i+1)}
                  className="carousel__navigation-button">{i+1}</a>
              </li>
            )
          })
        }
      </ol>
    </aside>
  </section>
  );
}

export default Carousel;
