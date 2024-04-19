import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faStar, faClock } from '@fortawesome/free-solid-svg-icons'; 
import { Datahome } from './data';

const ItemHome = (prop) => {
    return (
        <div className='px-2'> 
            <div className='Option_food'>
                <img className='img_food rounded-sm' src={prop.image} alt="Food"></img>
                <h5 className='namefood text-xl font-bold min-h-20'>{prop.title}</h5>
                <div className='infor grid grid-cols-3'>
                    <span className=''><FontAwesomeIcon icon={faStar} style={{color: "#FFD43B"}} />{prop.rate}</span>
                    <span className=''><FontAwesomeIcon className='mr-2' icon={faClock} style={{color: "#000000"}} />{prop.time}</span>
                    <span className=''>•{prop.distance}</span>
                </div>
            </div>
        </div>
    );
};

const ListHome = () => {
    return (
        <div>
            <div className='Body_In_Home  grid grid-cols-2 sm:grid-cols-4'>
                {Datahome.map((item,index)=>(
                    <ItemHome key={item.id} image={item.image} title={item.title} rate={item.rate} time={item.time} distance={item.distance} />
                ))}
            </div>
        </div>
    );
};

export default ListHome;
