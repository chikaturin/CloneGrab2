import React from 'react';
import { DataCate } from './Home_Catetogy';


const Catetogy = (props) => {
    return (
        <div className='px-2 mb-12'>
            <img className='imgCate rounded-md' src={props.img}></img>
            <p className='nameCate'> {props.Namecate}</p>
        </div>
    );
};
const ListCate = () => {
    return (
        <div className=''>
            <div className='Listcate grid grid-cols-2 sm:grid-cols-4'>
                {
                    DataCate.map((item,index)=>(
                    <Catetogy Catetogy key={item.id} img={item.image} Namecate={item.catename}></Catetogy>
                ))}
            </div>
        </div>
    );
};

export default ListCate;