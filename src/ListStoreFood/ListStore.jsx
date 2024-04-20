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
            <div className='w-full container'>
                <div className='w-full grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 my-8 justify-items-center'>
                    <div className='w-full justify-items-center mb-3 px-2 relative'>
                        <span className='z-10 font-bold  w-full text-center mb-3 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>Ở gần tôi</span>
                        <img className='opacity-45 relative' src="https://food.grab.com/static/images/placeholder-restaurant-2by1.jpg" alt="" />
                    </div>
                    <div className='w-full justify-items-center mb-3 px-2 relative'>
                        <span className='z-10 font-bold  w-full text-center mb-3 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>Ở gần tôi</span>
                        <img className='opacity-45 relative' src="https://food.grab.com/static/images/placeholder-restaurant-2by1.jpg" alt="" />
                    </div>
                    <div className='w-full justify-items-center mb-3 px-2 relative'>
                        <span className='z-10 font-bold  w-full text-center mb-3 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>Ở gần tôi</span>
                        <img className='opacity-45 relative' src="https://food.grab.com/static/images/placeholder-restaurant-2by1.jpg" alt="" />
                    </div>
                    <div className='w-full justify-items-center mb-3 px-2 relative'>
                        <span className='z-10 font-bold  w-full text-center mb-3 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>Ở gần tôi</span>
                        <img className='opacity-45 relative' src="https://food.grab.com/static/images/placeholder-restaurant-2by1.jpg" alt="" />
                    </div>
                    <div className='w-full justify-items-center mb-3 px-2 relative'>
                        <span className='z-10 font-bold  w-full text-center mb-3 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>Ở gần tôi</span>
                        <img className='opacity-45 relative' src="https://food.grab.com/static/images/placeholder-restaurant-2by1.jpg" alt="" />
                    </div>
                    <div className='w-full justify-items-center mb-3 px-2 relative'>
                        <span className='z-10 font-bold  w-full text-center mb-3 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>Ở gần tôi</span>
                        <img className='opacity-45 relative' src="https://food.grab.com/static/images/placeholder-restaurant-2by1.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div className='Body_In_Home grid grid-cols-2 sm:grid-cols-4'>
                    {DataStore.map((item,index)=>(
                            <ItemHome 
                                key={item.id}
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
