import { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';

function Profile() {
     const [user, setUser] = useState({});
     const auth = getAuth();

     useEffect(() => {
          setUser(auth.currentUser);
     }, []);

     return user ? <h1>{user.displayName}</h1> : 'Not logged In';
}

export default Profile;
