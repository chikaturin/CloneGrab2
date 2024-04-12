import React, { useState } from 'react';
import './DetailFoodStyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Datahome } from '../HomePage/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faStar, faClock ,faCirclePlus} from '@fortawesome/free-solid-svg-icons'; 
import OrderFood from './OrderFood';
import { Menudata } from './menudetail';

const ItemDetail = (prop) => {
    return (
        <div className='itemdetail'>
            <h1 className='name_detail text-sm text-md text-lg'>{prop.title}</h1>
            <div className='infor_Detail'>
                <span className='text-sm text-md text-lg'><FontAwesomeIcon icon={faStar} style={{color: "#FFD43B"}} />{prop.rate}</span>
                <span className='text-sm text-md text-lg'><FontAwesomeIcon icon={faClock} style={{color: "#000000"}} />{prop.time}</span>
                <span className='text-sm text-md text-lg'>•{prop.distance}</span>
            </div>
        </div>
    );
};
const ItemMenu = (props) => {
    return (
        <div className='menuitem  col-md-4 col-sm-6 col-xs-12 mb-4'>
            <div className='item_detail_list'>
            <img className='img_detail' src={props.image}></img>
                <div className='infor_menu'>
                    <p className='name_dish'>{props.name_detail}</p>
                    <p className='description'>{props.decription}</p>
                    <p className='price'>{props.price}<span className='add'><FontAwesomeIcon icon={faCirclePlus} style={{color: "#01B04E",}} /></span></p>
                </div>
            </div>
        </div>
    );
};

const DetailFood =() => {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
      };
    return (
            <div className='body'>
                <OrderFood toggleVisibility={toggleVisibility} isVisible={isVisible}/>
                <div className='body_menu'>
                    <div className='infor_store'>
                        <div className='container'>
                            {Datahome.map((item, index) => {
                                if (item.id === 1) {
                                    return (
                                        <ItemDetail
                                            key={index}
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
                            <p style={{marginLeft:10}}>Cơm</p>
                            <p style={{marginLeft:10}}>Giờ mở cửa <span className='time'>Hôm nay 10:00-20:00</span></p>
                        </div>
                    </div>
                    <div className="container">
                    <h1 style={{marginTop:50,marginBottom:50, marginLeft:10}}>Menu</h1>
                        <div className='row' onClick={toggleVisibility}>
                        {Menudata.map((item,index)=>(
                                <ItemMenu 
                                    key={item.id} 
                                    image={item.image} 
                                    name_detail={item.name_detail} 
                                    decription={item.decription} 
                                    price={item.price}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    };
export default DetailFood;