import React from 'react';
import './DetailFoodStyle.css';
import { Datahome } from '../HomePage/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faStar, faClock } from '@fortawesome/free-solid-svg-icons'; 

const ID=0;
const ItemDetail = (prop) => {
    return (
        <div className='itemdetail'>
            <h5 className='imgdetail text-sm text-md text-lg'>{prop.title}</h5>
            <div className=''>
                <span className='text-sm text-md text-lg'><FontAwesomeIcon icon={faStar} style={{color: "#FFD43B"}} />{prop.rate}</span>
                <span className='text-sm text-md text-lg'><FontAwesomeIcon icon={faClock} style={{color: "#000000"}} />{prop.time}</span>
                <span className='text-sm text-md text-lg'>•{prop.distance}</span>
            </div>
        </div>
    );
};

const DetailFood =() => {
    return (
            <div>
                <div className=''>
                    <div className='col'>
                        {Datahome.map((item, index) => {
                            if (item.id === 1) {
                                return (
                                    <ItemDetail
                                        key={item.id}
                                        image={item.image}
                                        title={item.title}
                                        rate={item.rate}
                                        time={item.time}
                                        distance={item.distance}
                                    />
                                );
                            }
                            return null;
                        })}
                    </div>
                </div>
            </div>
        );
    };
export default DetailFood;
