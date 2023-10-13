import React from'react';
import banner from '../images/alia.png';
import second from '../images/2nd.png';
import third from '../images/3rd.png';
import fourth from '../images/4th.png';

function Banner(){
    return(
        <>
    <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={second} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={third} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={fourth} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={banner} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
       
        </>
       
        );
    }
    
    
    export default Banner;