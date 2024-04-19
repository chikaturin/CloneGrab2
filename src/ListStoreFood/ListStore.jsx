import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faMagnifyingGlass, faStar, faClock } from '@fortawesome/free-solid-svg-icons';
import "./ListStoreStyle.css"
import { DataStore } from './DataListStore';

const ItemHome = (prop) => {
    return (
        <div className='px-2 mb-12'>
            <div className='Option_food'>
                <img className='img_food rounded-sm' src={prop.image} alt="Food"></img>
                <h5 className='namefood text-xl font-bold min-h-16'>{prop.title}</h5>
                <div className='infor grid grid-cols-3'>
                    <span className=''><FontAwesomeIcon icon={faStar} style={{color: "#FFD43B"}} />{prop.rate}</span>
                    <span className=''><FontAwesomeIcon icon={faClock} style={{color: "#000000"}} />{prop.time}</span>
                    <span className=''>•{prop.distance}</span>
                </div>
            </div>
        </div>
    );
};

const ListStore = () => {
    return (
        <div className='body container'> 
            <div className='FindFood'><span><FontAwesomeIcon icon={faMagnifyingGlass} /> Tìm món ăn hoặc quán ăn</span></div>
            <div className='w-full justify-items-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 px-4 my-8'>
                <div className='w-full mb-3'>
                    <span className='z-10 font-bold pl-12 sm:pl-16 mt-16 w-fit mb-3  absolute '>Ở gần tôi</span>
                    <img className='w-40 h-36 sm:w-48 sm:h-40 opacity-45 relative' src="https://food.grab.com/static/images/placeholder-restaurant-2by1.jpg" alt="" />
                </div>
                <div className='w-full mb-3'>
                    <span className='z-10 font-bold pl-12 sm:pl-16 mt-16  w-fit mb-3  absolute '>Ở gần tôi</span>
                    <img className='w-40 h-36 sm:w-48 sm:h-40 opacity-45 relative' src="https://food.grab.com/static/images/placeholder-restaurant-2by1.jpg" alt="" />
                </div>
                <div className='w-full mb-3'>
                    <span className='z-10 font-bold pl-12 sm:pl-16 mt-16  w-fit mb-3  absolute '>Ở gần tôi</span>
                    <img className='w-40 h-36 sm:w-48 sm:h-40 opacity-45 relative' src="https://food.grab.com/static/images/placeholder-restaurant-2by1.jpg" alt="" />
                </div>
                <div className='w-full mb-3'>
                    <span className='z-10 font-bold pl-12 sm:pl-16 mt-16  w-fit mb-3  absolute '>Ở gần tôi</span>
                    <img className='w-40 h-36 sm:w-48 sm:h-40 opacity-45 relative' src="https://food.grab.com/static/images/placeholder-restaurant-2by1.jpg" alt="" />
                </div>
                <div className='w-full mb-3'>
                    <span className='z-10 font-bold pl-12 sm:pl-16 mt-16  w-fit mb-3  absolute '>Ở gần tôi</span>
                    <img className='w-40 h-36 sm:w-48 sm:h-40 opacity-45 relative' src="https://food.grab.com/static/images/placeholder-restaurant-2by1.jpg" alt="" />
                </div>
                <div className='w-full mb-3'>
                    <span className='z-10 font-bold pl-12 sm:pl-16 mt-16  w-fit mb-3  absolute '>Ở gần tôi</span>
                    <img className='w-40 h-36 sm:w-48 sm:h-40 opacity-45 relative' src="https://food.grab.com/static/images/placeholder-restaurant-2by1.jpg" alt="" />
                </div>
            </div>
            <div className='Body_In_Home grid grid-cols-2 sm:grid-cols-4'>
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
