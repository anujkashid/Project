import './App.css';
import Home from './component/Home.jsx'
import Head from './component/Head.jsx'
import { Routes, Route, HashRouter as Router  } from 'react-router-dom'
import Login from './component/Login.jsx';
import UserRegistration from './component/UserRegistration.jsx';
import Profile from './component/Profile.jsx';
import Account_info from './component/Account_info.jsx';
import Profile_head from './component/Profile_head.jsx';

function App() {
  return (
    <>
     <Router>
     {/* <Home/> */}
     {/* <Head /> */}
       <Routes>
             {/* <Route path="/" element={<Home />} /> */}
             <Route path="/" element={<Login />} />
             <Route path="/home" element={<Home />} />
             <Route path="/registration" element={<UserRegistration />} />
             <Route path="/profile_head" element={<Profile_head />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
