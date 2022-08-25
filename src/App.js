import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import Explore from './pages/Explore';
import ForgotPassword from './pages/ForgotPassword';
import Offers from './pages/Offers';
import Profile from './pages/Profile';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import NotFound from './pages/NotFound';

function App() {
     return (
          <Router>
               <Routes>
                    <Route exact path='/' element={<Explore />} />
                    <Route path='/explore' element={<Explore />} />
                    <Route
                         path='/forgotpassword'
                         element={<ForgotPassword />}
                    />
                    <Route path='/Offers' element={<Offers />} />
                    <Route path='/Profile' element={<Profile />} />
                    <Route path='/signin' element={<Signin />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/*' element={<NotFound />} />
               </Routes>
               <Navbar />
          </Router>
     );
}

export default App;
