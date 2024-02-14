import Home from './pages/Home';
import { Routes,Route } from 'react-router-dom';
import './app.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Signin from './pages/Auth/Signin';
import CreateAccount from './pages/Auth/CreateAccount';
import VerifyEmail from './pages/Auth/VerifyEmail';
import OpenRoutes from './components/app/OpenRoutes';
import PrivateRoutes from './components/app/PrivateRoutes';
import Dashboard from './pages/Dashboard';
import MyProfile from './components/dashboard/MyProfile';
import SettingProfile from './components/dashboard/SettingProfile';
import AddCourse from './components/dashboard/AddCourse';

function App() {
  return (
    <div className="w-screen min-h-screen bg-[#000814]">
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<OpenRoutes><About/></OpenRoutes>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/login" element={<OpenRoutes><Signin/></OpenRoutes>}/>
      <Route path="/signup" element={<OpenRoutes><CreateAccount/></OpenRoutes>}/>
      <Route path="/verify-email" element={<OpenRoutes><VerifyEmail/></OpenRoutes>}/>
       <Route element={<PrivateRoutes><Dashboard/></PrivateRoutes>}>
       <Route path='/dashboard/my-profile' element={<MyProfile/>}/>
       <Route path='/dashboard/enrolled-courses' element={<MyProfile/>}/>
       <Route path='/dashboard/purchase-history' element={<MyProfile/>}/>
       <Route path='/dashboard/add-course' element={<AddCourse/>}/>
        <Route path='/dashboard/settings' element={<SettingProfile/>}/>
      </Route>
      <Route path="*" element={<div className='text-center translate-y-4 my-auto text-white font-bold text-[32px]'>404 Error- Page Not Found</div>}/>
      </Routes>
    </div>
  );
}

export default App;
