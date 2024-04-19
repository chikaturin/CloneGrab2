import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import Home from "./HomePage/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Routes,Route } from "react-router-dom";
import PageListStore from "./ListStoreFood/PageListStore";
import DetailFood from './PageDetailFood/DetailFood';
import React, { useState, useEffect } from 'react';
import './App.css'


function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  let location="";
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };
    navigator.geolocation.getCurrentPosition(function (position){
      location=position.coords;
    });
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },);
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log('Latitude:', latitude);
      console.log('Longitude:', longitude);
      // Đoạn mã xử lý dữ liệu vị trí ở đây
    });
  } else {
    console.log('Trình duyệt không hỗ trợ định vị');
  }
  return (
    <div className="body m-0">

      <div className='hidden sm:block w-full mb-64'>
        <div style={{ backgroundColor: scrollPosition > 10 ? 'white' : 'transparent' }} className=" justify-center z-50 w-full h-fit fixed">
          <div className="header_nav container w-full h-fit z-50 flex">
            <img src="https://food.grab.com/static/images/logo-grabfood2.svg" alt="" className=" w-20 h-20 sm:w-28 sm:h-20 z-0" />
            <div className="w-full mt-3 ">
              <span className='mr-4 bg-white p-2 rounded float-right'>Đăng nhập/Đăng ký</span>
              <span className='mr-4 bg-white p-2 rounded float-right'><FontAwesomeIcon icon={faShoppingBag} /></span>
            </div>
          </div>  
        </div>
        <img src="https://food.grab.com/static/page-home/VN-new-2.jpg" alt="" className="z-0 w-full h-96 object-cover" />        
        <div className='absolute z-10 top-52 w-full'>
          <div className='container w-full'>
           <div className='bg-white w-96 h-96 shadow-md rounded p-5'>
              <p className="text-xl ">GoodMorning</p>
              <p className="text-4xl ">Where should we deliver your food today?</p>
              <p className="border-2 border-[#E0E0E0] rounded mt-5 mb-3 py-2 px-5">
                  <i className="fa-solid fa-location-pin bg-[#EE6352] float-left text-white text-xs rounded-full py-1 px-2"></i>
                  <span className="mx-4">Nhập địa chỉ</span>
                  <i className="fa-solid float-right fa-location-crosshairs text-lg text-[#00B14F]"></i>
              </p>
              <p className="text-white  bg-[#00B14F] py-3 px-5 rounded text-center">Tìm kiếm</p>
           </div>
          </div>
        </div>
      </div>

      <div className=" bg-white sm:hidden justify-center w-full h-fit fixed">
          <div className="header_nav container w-full h-fit z-50 flex">
            <img src="https://food.grab.com/static/images/logo-grabfood2.svg" alt="" className=" w-20 h-20 sm:w-28 sm:h-20 z-0" />
            <div className="w-full mt-3 ">
              <span className='mr-4 bg-white p-2 rounded float-right'>Đăng nhập/Đăng ký</span>
              <span className='mr-4 bg-white p-2 rounded float-right'><FontAwesomeIcon icon={faShoppingBag} /></span>
            </div>
          </div>  
      </div>

      <div className="">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/PageListStore" element={<PageListStore/>}/>
          <Route path="/DetailFood" element={<DetailFood/>}/>
        </Routes>
      </div>

     <div className="footer bg-green-600 w-full h-fit mt-5">
      <div className='container'>
        <div className='border-b-2 p-0'><img className='w-44 h-40 ' src="https://food.grab.com/static/images/logo-grabfood-white2.svg" alt="" /></div>
        <div className='grid grid-cols-1 border-b-2 sm:grid-cols-3 justify-around w-full h-fit mt-4'>
          <div className='col1 ml-2 mb-3'>
            <p className=' text-white  text-lg'>Về GrabFood</p>
            <p className=' text-white  text-lg'>Về Grab</p>
            <p className=' text-white  text-lg'>Blog</p>
          </div>
          <div className='col2 ml-2 mb-3'>
            <p className=' text-white  text-lg'>Mở quán trên GrabFood</p>
            <p className=' text-white  text-lg'>Trở thành tài xế Grab</p>
          </div>
          <div className='col3 ml-2 mb-3'>
            <p className=' text-white  text-lg'>Trung tâm hỗ trợ</p>
            <p className=' text-white  text-lg'>Câu hỏi thường gặp</p>
          </div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2'>
          <div className='flex justify-between sm:justify-normal'>
            <img className='w-44 h-40' src="https://food.grab.com/static/images/logo-appstore.svg" alt="" />
            <img className='w-44 h-40 ml-3' src="https://food.grab.com/static/images/logo-playstore.svg" alt="" />
          </div>
          <div className=' mt-16 sm:text-right grid grid-cols-1 sm:grid-cols-2'>
            <span className='text-white text-sm'>© 2024 Grab</span>
            <span className='sm:ml-2 text-white text-sm'>Câu hỏi thường gặp • Chính sách bảo mật</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
} 

export default App
