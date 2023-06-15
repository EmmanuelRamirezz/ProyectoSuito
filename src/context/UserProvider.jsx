import {createContext} from 'react';
import { useState} from 'react';

export const UserContext = createContext(null);


function UserProvider({children}){
  const[lan, setLan] = useState(false);
  return(
    <UserContext.Provider value={[lan, setLan]}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider;