import React from'react';

import ma from '../images/discount.png'
import mb from '../images/mobile.png'
import mc from '../images/electronics.png'
import md from '../images/tv.png'
import me from '../images/fashion.png'
import mf from '../images/beauty.png'
import mg from '../images/home.png'
import mh from '../images/furniture.png'
import mi from '../images/flight.png'
import mj from '../images/grocery.png'
function Menu(){
    return(
        <>
        <div className='row mt-2 com'>
        <div className='col-md-1 '>
              <br></br>
        </div>
        <div className='col-md-1 '>
            <img src={ma} height={40}/>  
            <p>Top Offers</p>
        </div>
        <div className='col-md-1 '>
            <img src={mb} height={40}/>  
            <p>Mobile </p>
        </div>
        <div className='col-md-1 '>
            <img src={mc} height={40}/>  
            <p>Electronics</p> 
        </div>
        <div className='col-md-1'>
            <img src={md} height={40}/>  
            <p>TVs App</p> 
        </div>
        <div className='col-md-1 '>
        <img src={me} height={40}/>  
            <p>Fashion</p> 
        </div>
        <div className='col-md-1 '>
        <img src={mf} height={40}/>  
            <p>Beauty</p> 
        </div>
        <div className='col-md-1'>
        <img src={mg} height={40}/>  
            <p>Kitchen</p> 
        </div>
        <div className='col-md-1 '>
        <img src={mh} height={40}/>  
            <p>Furniture</p> 
        </div>
        <div className='col-md-1'>
        <img src={mi} height={40}/>  
            <p>Flights</p> 
        </div>
        <div className='col-md-1 '>
        <img src={mj} height={40}/>  
            <p>Grocery</p> 
        </div>
        <div className='col-md-1 '>
              <br></br>
        </div>
    </div>
    </>
        );
    }
    
    
    export default Menu;