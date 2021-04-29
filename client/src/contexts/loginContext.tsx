import { useState } from 'react';
import { FunctionComponent, createContext } from 'react';
import { useHistory } from 'react-router-dom';
import { makeRequest } from '../makeRequest';

// INTERFACE

interface LoggedIn {
    username?: string;
    login: (username: string, password: string) => Promise<void>;
    logoutUser: () => void;
}

// CREATE CONTEXT
export const LoginContext = createContext<LoggedIn>({} as LoggedIn);


// CONTEXT PROVIDER
const LoginProvider: FunctionComponent = ({ children }) => {
    const [username, setUsername] = useState<string | undefined>();
    const history = useHistory();

    // Check if user is logged in
    async function checkIfLoggedIn()  {
        const username = await makeRequest('/api/user/authorization', 'GET')
        setUsername(username);
    }


   // Login user
   async function login(username: string, password: string) {
       const body = {
           username,
           password
       }
       
       await makeRequest('/api/user/login', 'POST', body);
       
       if (checkIfLoggedIn()){
            setUsername(username);
            history.push("/");
            return
       }
    } 

    // Logout user
    async function logoutUser() {
       const success = await makeRequest('/api/user/logout', 'DELETE')
       if (success) {
           history.push('/');
           setUsername(undefined);
            return;
        }
    }


    return(
        <LoginContext.Provider value={{
            username,
            login,
            logoutUser,
        }}>
            { children }
        </LoginContext.Provider>
    )
}
export default LoginProvider;