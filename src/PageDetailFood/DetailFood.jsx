import React, { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Datahome } from '../HomePage/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faStar, faClock ,faCirclePlus} from '@fortawesome/free-solid-svg-icons'; 
import OrderFood from './OrderFood';
import { Menudata } from './menudetail';
import { ChooseMenu } from './dataChooseMenu';

const ItemDetail = (prop) => {
    return (
        <div className='px-2'>
            <h1 className='text-5xl font-bold'>{prop.title}</h1>
            <p className='my-2'>Cơm,...</p>
            <div className='grid grid-cols-3 w-1/4'>
                <span className=''><FontAwesomeIcon icon={faStar} style={{color: "#FFD43B"}} />{prop.rate}</span>
                <span className=''><FontAwesomeIcon className='mr-2' icon={faClock} style={{color: "#000000"}} />{prop.time}</span>
                <span className=''>•{prop.distance}</span>
            </div>
        </div>
    );
};
const ItemMenu = (props) => {
    return (
        <div className='menuitem'>
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
    const [scrollPosition, setScrollPosition] = useState(0);
    useEffect(() => {
      const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
      };
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    },);
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
      };
    const [colors, setColors] = useState(['#01B04E', 'black', 'black', 'black', 'black', 'black']); 
    const [underline, setUnderlines] = useState(['#01B04E 3px solid', 'none', 'none', 'none', 'none', 'none']); 

    const handleClick = (index) => {
    const newColors = Array(6).fill('black'); 
    newColors[index] = '#01B04E';

    const newUnderline = Array(6).fill('none'); 
    newUnderline[index]= '#01B04E 3px solid'; 
    setColors(newColors);
    setUnderlines(newUnderline);
    };
    return (
            <div className='body'>
                    <OrderFood toggleVisibility={toggleVisibility} isVisible={isVisible}/>
                    <div className='body_menu'>
                        <div className='infor_store container '>
                            <div className='container w-full'>
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
                                <p style={{marginLeft:10}}>Giờ mở cửa <span className='ml-6'>Hôm nay 10:00-20:00</span></p>
                            </div>
                        </div>

                            <div style={{ backgroundColor: scrollPosition > 130 ? 'white' : 'transparent',position: scrollPosition > 130 ? 'fixed' : 'static'}} className='w-full top-9 h-fit min-h-32 block sm:hidden'>
                                <div className="container">
                                    <div className=' container w-full grid my-4 grid-cols-6 text-center translate translate-y-1/2'>
                                        {ChooseMenu.map((item,index) => (
                                            index=item.id,
                                            <a className='pb-3' href={'#x'+item.id} key={index} style={{ color: colors[index - 1], borderBottom: `${underline[index - 1]}`}} onClick={() => handleClick(index - 1)}>{item.Title}</a>
                                            
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div style={{ backgroundColor: scrollPosition > 730 ? 'white' : 'transparent',position: scrollPosition > 730 ? 'fixed' : 'static'}} className='w-full top-20 h-fit min-h-48 sm:min-h-0 hidden sm:block'>
                                <div className="container">
                                    <div className=' container w-full grid my-4 grid-cols-6 text-center translate translate-y-1/2'>
                                        {ChooseMenu.map((item,index) => (
                                            index=item.id,
                                            <a className='pb-3' href={'#x'+item.id} key={index} style={{ color: colors[index - 1], borderBottom: `${underline[index - 1]}`}} onClick={() => handleClick(index - 1)}>{item.Title}</a>
                                        ))}
                                    </div>
                                </div>
                            </div>

                        <div className='bg-gray-100' id='x1'>
                            <div className="container ">
                                <p style={{marginTop:10,marginBottom:50, marginLeft:10}}>Menu2</p>
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
                        <div className='bg-gray-100'id='x2'>
                            <div className="container ">
                                <p style={{marginTop:10,marginBottom:50, marginLeft:10}}>Menu</p>
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
                        <div className='bg-gray-100'id='x3'>
                            <div className="container ">
                                <p style={{marginTop:10,marginBottom:50, marginLeft:10}}>Menu</p>
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
                        <div className='bg-gray-100'id='x4'>
                            <div className="container ">
                                <p style={{marginTop:10,marginBottom:50, marginLeft:10}}>Menu</p>
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
                        <div className='bg-gray-100'id='x5'>
                            <div className="container ">
                                <p style={{marginTop:10,marginBottom:50, marginLeft:10}}>Menu</p>
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
                        <div className='bg-gray-100'id='x6'>
                            <div className="container ">
                                <p style={{marginTop:10,marginBottom:50, marginLeft:10}}>Menu</p>
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
            </div>
        );
    };
export default DetailFood;