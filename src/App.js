
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import AddReview from './pages/AddReview';
import Blog from './pages/Blog';
import Banner from './pages/Home/Banner';
import Home from './pages/Home/Home';
import Tools from './pages/Home/Tools';
import Myportfolio from './pages/My-Portfolio';
import MyOrder from './pages/MyOrder';
import MyProfile from './pages/MyProfile';

function App() {
  return (
    < >
     <Navbar> <Routes>  <Route path='/' element={<Home></Home>}  ></Route>    <Route path='/blog' element={<Blog></Blog>}></Route>  <Route path='/myportfolio' element={<Myportfolio></Myportfolio>}></Route> <Route path='/myorders' element={<MyOrder></MyOrder>}></Route> <Route path='/addreview' element={<AddReview></AddReview>}></Route> <Route path='/myprofile' element={<MyProfile></MyProfile>}></Route></Routes>  </Navbar>
    </>
  );
}

export default App;
