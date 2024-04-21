import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import {faX} from '@fortawesome/free-solid-svg-icons'; 

const ItemMenu = (props) => {
    return (
        <div className='grid grid-cols-2 p-4'>
            <img className='rounded-t-md rounded-b-md' src={props.image}></img>
            <div className='pl-2'>
                <h3 className='text-4xl font-bold'>{props.name_detail}</h3>
                <div className='grid grid-cols-1 sm:grid-cols-2 mt-4'>
                    <p className='text-sm text-gray-500'>{props.decription}</p>
                    <p className=' text-right text-xl font-bold'>{props.price}</p>
                </div>
            </div>
        </div>
    );
};

const OrderFood = ({ toggleVisibility, isVisible }) => {
    let [count, setCount] = useState(1);
    let [content, setContent] = useState("Add to basket");
    
    function incrementCount() {
        setCount(count + 1);
        setContent("Add to basket")
    }
    
    function decrementCount() {
        if(count>0)
        {
            count = count - 1;
            setCount(count);
        }
        if(count<1){
            setContent("cancel");

        }
      }

    if(isVisible)
    {
        return (
                <div className='grid grid-cols-1 overflow-y-scroll md:grid-cols-2 fixed top-0 left-0 w-full overflow-hidden h-full z-50'>
                    <div className="bg-black opacity-15 hidden sm:block" onClick={toggleVisibility}></div>
                    <div className="bg-white">
                    <p className='p-4 border border-bottom container' onClick={toggleVisibility}><FontAwesomeIcon icon={faX} /></p>
                    <div className=" border-b-8 border-gray-200">
                        <ItemMenu 
                                image={"https://food-cms.grab.com/compressed_webp/merchants/5-C4EKLZN2CBEUUE/hero/faff5dbaf7024a2c98f33303920f8ef1_1688956019240286277.webp"} 
                                name_detail={"Cơm Gà Đùi Luộc"} 
                                decription={"Gà Ta . Ăn Kèm với Mắm Cà + Salat trộn . Đặc biệt kèm theo muối tiêu chanh pha sẵn"} 
                                price={"63.000"}/>
                    </div>
                    <div className=' container'>
                        <div className="pl-6 mt-4 ">
                            <h3 className='text-xl font-bold'>Thêm</h3>
                                <div className="form-check py-4 w-full">
                                    <input className='form-check-input text-2xl' type="checkbox" name="tea" value="tea"/>
                                    <div className='mt-1 px-4 grid grid-cols-2'><span className='text-lg mt-1'>Trà Tắc</span><span className='text-right w-full'>7.000</span></div><br/>
                                    <input className='form-check-input text-2xl' type="checkbox" name="tea" value="tea"/>
                                    <div className='mt-1 px-4 grid grid-cols-2'><span className='text-lg mt-1'>Trà Tắc</span><span className='text-right w-full'>7.000</span></div><br/>
                                    <input className='form-check-input text-2xl' type="checkbox" name="tea" value="tea"/>
                                    <div className='mt-1 px-4 grid grid-cols-2'><span className='text-lg mt-1'>Trà Tắc</span><span className='text-right w-full'>7.000</span></div><br/>
                                    <input className='form-check-input text-2xl' type="checkbox" name="tea" value="tea"/>
                                    <div className='mt-1 px-4 grid grid-cols-2'><span className='text-lg mt-1'>Trà Tắc</span><span className='text-right w-full'>7.000</span></div><br/>
                                    <input className='form-check-input text-2xl' type="checkbox" name="tea" value="tea"/>
                                    <div className='mt-1 px-4 grid grid-cols-2'><span className='text-lg mt-1'>Trà Tắc</span><span className='text-right w-full'>7.000</span></div><br/>
                                    <input className='form-check-input text-2xl' type="checkbox" name="tea" value="tea"/>
                                    <div className='mt-1 px-4 grid grid-cols-2'><span className='text-lg mt-1'>Trà Tắc</span><span className='text-right w-full'>7.000</span></div><br/>
                                </div>
                        </div>
                    </div>
                    <div className=' container w-full'>
                        <div className="pay h-fit my-4 grid grid-cols-1 sm:grid-cols-2">
                            <div className='w-full'>
                                <div className="flex justify-center mb-4">
                                    <button className='border p-1 px-3 rounded' onClick={decrementCount}><span className='text-xl text-blue-500'>-</span></button>
                                    <div className='valuecount p-3 px-4'>{count}</div>
                                    <button className='border p-1 px-3 rounded' onClick={incrementCount}><span className='text-xl text-blue-500'>+</span></button>
                                </div>
                            </div>
                            <button className="button_pay px-2 h-10 translate translate-y-1/4 bg-green-600 rounded"><span className='text-white'>{content}</span></button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return null;
};

export default OrderFood;