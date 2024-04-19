import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ListCate from "./Catetogy";
import ListHome from './ListHome';

const Home = () => {
    return (
        <div className='container'>
            <h1 className='my-2 ml-2 text-4xl font-bold'>Ưa đãi GrabFood tại <span style={{color:"#01B04E"}}>Hà Nội</span></h1>
            <a className='route' href="/DetailFood"><ListHome/></a>
            <div className='w-full border border-gray-500 my-3  hover:border-green-500'><p className='w-full text-center hover:text-green-600  px-3 py-3'>See all promotion</p></div>            
            <h3 className='my-2 ml-2 text-4xl font-bold'>There's something everone</h3>
            <a className='route' href="/PageListStore"><ListCate/></a>
            <h3 className='my-2 text-4xl font-bold'>Vì sao bạn nên Order trên GrabFood?</h3>
            <p>Nhanh nhất - GrabFood cung cấp dịch vụ giao đồ ăn nhanh nhất thị trường.</p>
            <p>Dễ dàng nhất - Giờ đây, bạn chỉ cần thực hiện vài cú nhấp chuột hoặc chạm nhẹ là đã có thể đặt đồ ăn. Hãy đặt đồ ăn trực tuyến hoặc tải xuống siêu ứng dụng Grab của chúng tôi để có trải nghiệm nhanh hơn và thú vị hơn.</p>    
            <p>Nhanh nhất - GrabFood cung cấp dịch vụ giao đồ ăn nhanh nhất thị trường.</p>
            <p>Dễ dàng nhất - Giờ đây, bạn chỉ cần thực hiện vài cú nhấp chuột hoặc chạm nhẹ là đã có thể đặt đồ ăn. Hãy đặt đồ ăn trực tuyến hoặc tải xuống siêu ứng dụng Grab của chúng tôi để có trải nghiệm nhanh hơn và thú vị hơn.</p>
            <h3 className='my-2 text-4xl font-bold'  style={{marginTop:30, fontWeight:"bold"}}>Những câu hỏi thường gặp</h3>
            <p>Lunch, Bún Cá Chấm Gốc Đa - Vũ Thạnh for Dinner! We are here to satisfy your hunger with a wide selection of merchant partners in Vietnam. GrabFood là dịch vụ Giao đồ ăn nhanh nhất tại Việt Nam. Chúng tôi đã sắp xếp tất cả các món ăn, nhà hàng và thực phẩm yêu thích của bạn một cách hợp lý để giúp bạn tìm được đồ ăn dễ dàng và nhanh chóng nhất có thể. Tìm và đặt món ăn yêu thích trên khắp Việt Nam - đặt đồ ăn trực tuyến chỉ bằng vài thao tác, từ món Lifted Coffee & Brunch cho bữa sáng, đến Maazi Indian – Nhà Hàng Ấn Độ cho bữa trưa, đến Bún Cá Chấm Gốc Đa – Vũ Thạnh cho bữa tối! Hãy để chúng tôi xua tan cơn đói của bạn nhờ một loạt đối tác bán đồ ăn ở Việt Nam.</p>
        </div>
    );
};

export default Home;