import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
     getAuth,
     createUserWithEmailAndPassword,
     updateProfile,
} from 'firebase/auth';
import { db } from '../firebase.config';
import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg';
import visibilityIcon from '../assets/svg/visibilityIcon.svg';

function Signup() {
     const [showPassword, setShowPassword] = useState(false);
     const [formData, setFormData] = useState({
          name: '',
          email: '',
          password: '',
     });

     const { name, email, password } = formData;

     const navigate = useNavigate();

     const onChange = (e) => {
          setFormData((prevState) => ({
               ...prevState,
               [e.target.id]: e.target.value,
          }));
          console.log(e.target.value);
     };

     const onSubmit = async (e) => {
          e.preventDefault();

          try {
               const auth = getAuth();

               const userCredential = await createUserWithEmailAndPassword(
                    auth,
                    email,
                    password
               );

               const user = userCredential.user;

               updateProfile(auth.currentUser, {
                    displayName: name,
               });

               navigate('/');
          } catch (error) {
               console.log(error);
          }
     };

     return (
          <>
               <div className='pageContainer'>
                    <header>
                         <p className='pageHeader'>Welcome!</p>
                    </header>
                    <form onSubmit={onSubmit}>
                         <input
                              type='text'
                              className='nameInput'
                              placeholder='Name'
                              id='name'
                              value={name}
                              onChange={onChange}
                         />
                         <input
                              type='email'
                              className='emailInput'
                              placeholder='Email'
                              id='email'
                              value={email}
                              onChange={onChange}
                         />
                         <div className='passwordInputDiv'>
                              <input
                                   type={showPassword ? 'text' : 'password'}
                                   className='passwordInput'
                                   placeholder='Password'
                                   id='password'
                                   value={password}
                                   onChange={onChange}
                              />

                              <img
                                   src={visibilityIcon}
                                   className='img showPassword'
                                   alt='show password'
                                   onClick={() =>
                                        setShowPassword(
                                             (prevState) => !prevState
                                        )
                                   }
                              />
                         </div>
                         <div className='signUpBar'>
                              <p className='signUpText'>Sign Up</p>
                              <button className='signUpButton'>
                                   <ArrowRightIcon
                                        fill='#ffffff'
                                        width={34}
                                        height={34}
                                   />
                              </button>
                         </div>
                    </form>
                    {/* Google 0Auth Component*/}

                    <Link to='/signin' className='registerLink'>
                         Sign In
                    </Link>
               </div>
          </>
     );
}

export default Signup;
