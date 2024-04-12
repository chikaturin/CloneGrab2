import React from 'react';
import { DataCate } from './Home_Catetogy';


const Catetogy = (props) => {
    return (
        <div className='col-md-3 col-sm-6 col-xs-12 px-2'>
            <img className='imgCate' src={props.img}></img>
            <p className='nameCate text-sm text-md text-lg'> {props.Namecate}</p>
        </div>
    );
};
const ListCate = () => {
    return (
        <div className='row'>
            <div className='Listcate row'>
                {
                    DataCate.map((item,index)=>(
                    <Catetogy Catetogy key={item.id} img={item.image} Namecate={item.catename}></Catetogy>
                ))}
            </div>
        </div>
    );
};

export default ListCate;