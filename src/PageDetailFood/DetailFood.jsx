// import React from 'react';
// import { Datahome } from '../HomePage/data';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
// import { faStar, faClock } from '@fortawesome/free-solid-svg-icons'; 

// const ItemDetail = (prop) => {
//     return (
//         <div className='Option_food'>
//             <img className='img_food ' src={prop.image} alt="Food"></img>
//             <h5 className='namefood text-sm text-md text-lg'>{prop.title}</h5>
//             <div className='infor'>
//                 <span className='text-sm text-md text-lg'><FontAwesomeIcon icon={faStar} style={{color: "#FFD43B"}} />{prop.rate}</span>
//                 <span className='text-sm text-md text-lg'><FontAwesomeIcon icon={faClock} style={{color: "#000000"}} />{prop.time}</span>
//                 <span className='text-sm text-md text-lg'>•{prop.distance}</span>
//             </div>
//         </div>
//     );
// };

// const DetailFood = ({ IDDetail }) => {
//     return (
//         <div>
//             <div className=''>
//                 <div className='col'>
//                     {Datahome.map((item, index) => {
//                         if (item.id === 1) {
//                             console.log(IDDetail);
//                             return (
//                                 <ItemDetail
//                                     key={item.id}
//                                     image={item.image}
//                                     title={item.title}
//                                     rate={item.rate}
//                                     time={item.time}
//                                     distance={item.distance}
//                                 />
//                             );
//                         }
//                         return null;
//                     })}
//                 </div>
//             </div>
//         </div>
//     );
// };

// // export function GiveID(props) {
// //     return (
// //         <div>
// //             <DetailFood IDDetail={props.id} />
// //         </div>
// //     );
// // }

// export default DetailFood;
