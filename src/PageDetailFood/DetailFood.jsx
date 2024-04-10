import React from 'react';
import './DetailFoodStyle.css';
import { Datahome } from '../HomePage/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faStar, faClock ,faCirclePlus} from '@fortawesome/free-solid-svg-icons'; 
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
        <div className='item_detail_list'>
        <img className='img_detail' src={props.image}></img>
                <div className='infor_menu'>
                    <p className='name_dish'>{props.name_detail}</p>
                    <p className='description'>{props.decription}</p>
                    <p className='price'>{props.price}<span className='add'><FontAwesomeIcon icon={faCirclePlus} style={{color: "#01B04E",}} /></span></p>
                </div>
        </div>
    );
};

const DetailFood =() => {
    return (
            <div className='body'>
                <div className='row'>
                    <div className='col infor_store'>
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
                        <p>Cơm</p>
                        <p>Giờ mở cửa <span className='time'>Hôm nay 10:00-20:00</span></p>
                    </div>
                    <h1 style={{marginTop:50,marginBottom:50}}>Menu</h1>
                    <div className='List_menu'>
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
        );
    };
export default DetailFood;
