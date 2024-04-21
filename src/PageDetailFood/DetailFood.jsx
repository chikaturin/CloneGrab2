import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Datahome } from '../HomePage/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faStar, faClock, faCirclePlus } from '@fortawesome/free-solid-svg-icons'; 
import OrderFood from './OrderFood';
import { Menudata } from './menudetaildata';
import { ChooseMenu } from './dataChooseMenu';

const ItemDetail = (prop) => {
    return (
        <div className='px-2'>
            <h1 className='text-5xl font-bold'>{prop.title}</h1>
            <p className='my-2'>Cơm,...</p>
            <div className='grid grid-cols-3 w-1/4'>
                <span className=''><FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />{prop.rate}</span>
                <span className=''><FontAwesomeIcon className='mr-2' icon={faClock} style={{ color: "#000000" }} />{prop.time}</span>
                <span className=''>•{prop.distance}</span>
            </div>
        </div>
    );
};

const ItemMenu = (props) => {
    return (
        <div className='menuitem mx-2 px-4 py-4 my-4 rounded bg-white'>
            <div className='item_detail_list grid grid-cols-2'>
                <img className='img_detail rounded' src={props.image} alt={props.name_detail} />
                <div className='infor_menu pl-2'>
                    <p className='name_dish text-xl mb-3'>{props.name_detail}</p>
                    <p className='description'>{props.decription}</p>
                    <p className='price font-bold'>{props.price}<span className='add float-right'><FontAwesomeIcon icon={faCirclePlus} style={{ color: "#01B04E", width: '34px', height: '34px' }} /></span></p>
                </div>
            </div>
        </div>
    );
};

const DetailFood = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeIndex2, setActiveIndex2] = useState(0);
    const [colors, setColors] = useState(['#01B04E', 'black', 'black', 'black', 'black', 'black']); 
    const [isVisible, setIsVisible] = useState(false);
    
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
      };
    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY;
            setScrollPosition(position);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const scrollThresholds = [500, 1800,2800,3800,5300,6800];
        let newIndex = 0;

        for (let i = 0; i < scrollThresholds.length; i++) {
            if (scrollPosition >= scrollThresholds[i]) {
                newIndex = i;
            }
        }

        setActiveIndex(newIndex);
    }, [scrollPosition]);
    useEffect(() => {
        const scrollThresholds = [1000,3000,4200,9000,12200,15500];
        let newIndex = 0;

        for (let i = 0; i < scrollThresholds.length; i++) {
            if (scrollPosition >= scrollThresholds[i]) {
                newIndex = i;
            }
        }

        setActiveIndex2(newIndex);
    }, [scrollPosition]);

    const handleClick = (index) => {
        const newColors = Array(6).fill('black'); 
        newColors[index] = '#01B04E';
        setColors(newColors);
    };
    return (
        
        <div className='body'>
            <OrderFood toggleVisibility={toggleVisibility} isVisible={isVisible}/>

            <div className='body_menu'>
                <div className='infor_store container'>
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
                        <p style={{ marginLeft: 10 }}>Giờ mở cửa <span className='ml-6'>Hôm nay 10:00-20:00</span></p>
                    </div>
                </div>

                <div className='w-full top-9 h-fit min-h-48 block sm:hidden' style={{ backgroundColor: scrollPosition > 130 ? 'white' : 'transparent', position: scrollPosition > 130 ? 'fixed' : 'static' }}>
                    <div className="container">
                        <div className='container w-full grid my-4 grid-cols-6 text-center translate translate-y-1/2'>
                            {ChooseMenu.map((item, index) => (
                                <a className='pb-3' href={`#x${item.id}`} key={index} style={{ color: colors[index], borderBottom: index === activeIndex2 ? '3px solid #01B04E' : 'none', color: index === activeIndex2 ? '#01B04E' : 'black' }} onClick={() => handleClick(index)}>{item.Title}</a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className='w-full top-20 h-fit min-h-48 sm:min-h-0 hidden sm:block' style={{ backgroundColor: scrollPosition > 730 ? 'white' : 'transparent', position: scrollPosition > 730 ? 'fixed' : 'static' }}>
                    <div className="container">
                        <div className='container w-full grid my-4 grid-cols-6 text-center translate translate-y-1/2'>
                            {ChooseMenu.map((item, index) => (
                                <a className='pb-3' href={`#x${item.id}`} key={index} style={{ color: colors[index], borderBottom: index === activeIndex ? '3px solid #01B04E' : 'none', color: index === activeIndex ? '#01B04E' : 'black' }} onClick={() => handleClick(index)}>{item.Title}</a>
                                ))}
                        </div>
                    </div>
                </div>

                <div className='bg-gray-100'>
                    <div className='container'>
                        {ChooseMenu.map((item, index) => (
                            <div id={`x${item.id}`} key={index} style={{ paddingTop: scrollPosition > 750 ? '230px' : '10px' }}>
                                <p className=' text-4xl font-bold ml-4' style={{ marginLeft: "22px" }} key={index}>{item.Title}</p>
                                <div className='bg-gray-100'>
                                    <div className="container mt-16">
                                        <div className='grid grid-cols-1 sm:grid-cols-3' onClick={toggleVisibility}>
                                            {Menudata.map((item, index) => (
                                                <ItemMenu key={item.id} image={item.image} name_detail={item.name_detail} decription={item.decription} price={item.price} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


            </div>
        </div>
    );
};

export default DetailFood;
