import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faStar, faClock } from '@fortawesome/free-solid-svg-icons'; 
import { Datahome } from './data';

const ItemHome = (prop) => {
    return (
        <div className='col-md-3 col-sm-6 col-xs-12 px-2 '> 
            <div className='Option_food'>
                <img className='img_food' src={prop.image} alt="Food"></img>
                <h5 className='namefood text-sm text-md text-lg'>{prop.title}</h5>
                <div className='infor'>
                    <span className='text-sm text-md text-lg'><FontAwesomeIcon icon={faStar} style={{color: "#FFD43B"}} />{prop.rate}</span>
                    <span className='text-sm text-md text-lg'><FontAwesomeIcon icon={faClock} style={{color: "#000000"}} />{prop.time}</span>
                    <span className='text-sm text-md text-lg'>•{prop.distance}</span>
                </div>
            </div>
        </div>
    );
};

const ListHome = () => {
    return (
        <div>
            <div className='TitleHome'>
                <h1>Ưa đãi GrabFood tại <span style={{color:"#01B04E"}}>Hà Nội</span></h1>
            </div>
            <div className='Body_In_Home  row'>
                {Datahome.map((item,index)=>(
                    <ItemHome key={item.id} image={item.image} title={item.title} rate={item.rate} time={item.time} distance={item.distance} />
                ))}
            </div>
            <div className='hover_see_all'><div className='see_all'><span>See all promotions</span></div></div>
        </div>
    );
};

export default ListHome;
