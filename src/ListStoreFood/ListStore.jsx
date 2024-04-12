import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faMagnifyingGlass, faStar, faClock } from '@fortawesome/free-solid-svg-icons';
import "./ListStoreStyle.css"
import { DataStore } from './DataListStore';

const ItemHome = (prop) => {
    return (
        <div className='col-md-3 col-sm-6 col-xs-12 px-2'>
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

const ListStore = () => {
    return (
        <div className='body container'> 
            <div className='FindFood'><span><FontAwesomeIcon icon={faMagnifyingGlass} /> Tìm món ăn hoặc quán ăn</span></div>
            <div className='Body_In_Home row justify-content-center'>
                    {DataStore.map((item,index)=>(
                            <ItemHome 
                                image={item.image} 
                                title={item.title} 
                                rate={item.rate} 
                                time={item.time} 
                                distance={item.distance}/>
                    ))}
            </div>
        </div>
    );
};

export default ListStore;
