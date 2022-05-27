
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import Purchase from './components/Purchase';
import RequireAuth from './components/RequireAuth';
import Signup from './components/Signup';
import AddReview from './pages/Home/Dashboard/AddReview';
import Blog from './pages/Blog';
import Banner from './pages/Home/Banner';
import Dashboard from './pages/Home/Dashboard/Dashboard';
import MyOrders from './pages/Home/Dashboard/MyOrders';
import Home from './pages/Home/Home';
import Tools from './pages/Home/Tools';
import Myportfolio from './pages/My-Portfolio';
import MyOrder from './pages/Home/Dashboard/MyOrders';
import MyProfile from './pages/Home/Dashboard/MyProfile';
import { ToastContainer } from 'react-toastify';
import Allusers from './pages/Home/Dashboard/Allusers';
import {
 
  QueryClient,
  QueryClientProvider,
} from 'react-query'

const queryClient = new QueryClient()

function App() {
  return (
    < >
     <QueryClientProvider client={queryClient}>
     <Navbar> <Routes>  <Route path='/' element={<Home></Home>}  ></Route>    <Route path='/blog' element={<Blog></Blog>}></Route>  <Route path='/myportfolio' element={<Myportfolio></Myportfolio>}></Route> <Route path='/myorders' element={<MyOrder></MyOrder>}></Route>  <Route path='/login' element={<Login></Login>}></Route> <Route path='/signup' element={<Signup></Signup>} ></Route> <Route path='/dashboard' element={ <RequireAuth><Dashboard></Dashboard> </RequireAuth>  }>
       <Route index element={<MyOrders></MyOrders>}  ></Route><Route path='addreview' element={<AddReview></AddReview>}></Route> 
       <Route path='myprofile' element={<MyProfile></MyProfile>}></Route>
       <Route path='allusers' element={<Allusers></Allusers>}></Route>
       
       </Route> <Route path='/purchase/:id' element={  <RequireAuth><Purchase></Purchase> </RequireAuth> }></Route>      <Route path='*' element={<NotFound></NotFound>}></Route>   </Routes>  </Navbar>

       <ToastContainer />
     </QueryClientProvider>
     
    </>
  );
}

export default App;
