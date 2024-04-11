import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import {faX} from '@fortawesome/free-solid-svg-icons'; 
import { Menudata } from './menudetail';

const ItemMenu = (props) => {
    return (
        <div className='item_detail_order d-flex'>
            <img className='img_detail_order' src={props.image}></img>
            <div className='infor_menu_order'>
                <h3 className='name_dish_order'>{props.name_detail}</h3>
                <p className='description_order'>{props.decription}</p>
                <p className='price_order'>{props.price}</p>
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
            <div className='Body_orderFood d-flex'>
                <div className="detail_order_black" onClick={toggleVisibility}>
                </div>
                <div className="detail_Orderfood">
                    <p className='out' onClick={toggleVisibility}><FontAwesomeIcon icon={faX} /></p>
                    <div className="infor_detail_order">
                        <ItemMenu 
                                image={"https://food-cms.grab.com/compressed_webp/merchants/5-C4EKLZN2CBEUUE/hero/faff5dbaf7024a2c98f33303920f8ef1_1688956019240286277.webp"} 
                                name_detail={"Cơm Gà Đùi Luộc"} 
                                decription={"Gà Ta . Ăn Kèm với Mắm Cà + Salat trộn . Đặc biệt kèm theo muối tiêu chanh pha sẵn"} 
                                price={"63.000"}/>
                    </div>
                    <div className="add_option_order mt-4">
                        <h3 style={{fontSize:20}}>Thêm</h3>
                            <div class="form-check">
                            <input className='form-check-input' type="checkbox" name="tea" value="tea"/>
                            <label className='form-check-label' for="tea"> Trà tắc <span>7.000</span></label><br/>
                            <input className='form-check-input' type="checkbox" name="tea" value="tea"/>
                            <label className='form-check-label' for="tea"> Trà tắc <span>7.000</span></label><br/>
                            <input className='form-check-input' type="checkbox" name="tea" value="tea"/>
                            <label className='form-check-label' for="tea"> Trà tắc <span>7.000</span></label><br/>
                            <input className='form-check-input' type="checkbox" name="tea" value="tea"/>
                            <label className='form-check-label' for="tea"> Trà tắc <span>7.000</span></label><br/>
                            </div>
                    </div>
                    <div className="pay d-flex">
                        <div className="count d-flex">
                            <button className='decrease' onClick={decrementCount}>-</button>
                            <div className='valuecount'>{count}</div>
                            <button className='increase' onClick={incrementCount}>+</button>
                        </div>
                        <div className="button_pay"><button>{content}</button></div>
                    </div>
                </div>
            </div>
        );
    }
    return null;
};

export default OrderFood;