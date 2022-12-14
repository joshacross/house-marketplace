import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import { ToastContainer } from 'react-toastify';
import Explore from './pages/Explore';
import ForgotPassword from './pages/ForgotPassword';
import Offers from './pages/Offers';
import Category from './pages/Category';
import CreateListing from './pages/CreateListing';
import Profile from './pages/Profile';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import NotFound from './pages/NotFound';

function App() {
     return (
          <>
               <Router>
                    <Routes>
                         <Route exact path='/' element={<Explore />} />
                         <Route path='/explore' element={<Explore />} />
                         <Route
                              path='/forgotpassword'
                              element={<ForgotPassword />}
                         />
                         <Route path='/offers' element={<Offers />} />
                         <Route
                              path='/category/:categoryName'
                              element={<Category />}
                         />

                         <Route path='/profile' element={<PrivateRoute />}>
                              <Route path='/profile' element={<Profile />} />
                         </Route>
                         <Route path='/signin' element={<Signin />} />
                         <Route path='/signup' element={<Signup />} />
                         <Route
                              path='/create-listing'
                              element={<CreateListing />}
                         />

                         <Route path='/*' element={<NotFound />} />
                    </Routes>
                    <Navbar />
               </Router>
               <ToastContainer />
          </>
     );
}

export default App;
