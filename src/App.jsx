
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Home from "./HomePage/Home";
import { Routes,Route } from "react-router-dom";
import ListCate from "./HomePage/Catetogy";
import ListStore from "./ListStoreFood/PageListStore";
import Header from "./Header.png"

function App() {
  return (
    <div className="body">
        <div className='header'>
          <img className='img_main_child' src='https://food.grab.com/static/page-home/VN-new-2.jpg'></img>
          <a href="/"><div className='logo'><img className='logo_child' src={Header}></img></div></a>          
        </div>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/ListStore" element={<ListStore/>}/>
          </Routes>
        </div>
        <div className="Footer">
        <h1>HiHi Lười làm ạ</h1>
        </div>
    </div>
  );
} 

export default App
