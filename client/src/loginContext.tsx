import { useEffect, useState } from 'react';
import { FunctionComponent, createContext } from 'react';
import { useHistory } from 'react-router-dom';
import { makeRequest } from './makeRequest';


interface LoggedIn {
    username?: string;
    login: (username: string, password: string) => Promise<string | undefined>;
}

export const LoginContext = createContext<LoggedIn>({
    login: () => new Promise(() => {})
});

const LoginProvider: FunctionComponent = ({ children }) => {
    const [username, setUsername] = useState<string>();
    const history = useHistory();
    
    // Check if user is logged in
    useEffect(() => {
       async function loginUser()  {
           const [username] = await makeRequest('/api/user/authorization', 'GET')
           setUsername(username);
       }
       loginUser();
   }, [setUsername]);
   
   // Login user
   async function login(username: string, password: string) {
        const body = {
            username,
            password
        }
        const [usernameOrErrorMessage, success] = await makeRequest('/api/user/login', 'POST', body);
        if (success) {
            setUsername(usernameOrErrorMessage);
            history.push("/");
            return;
        } else {
            return usernameOrErrorMessage;
        }
    } 

    return(
        <LoginContext.Provider value={{
            username,
            login
        }}>
            { children }
        </LoginContext.Provider>
    )
}
export default LoginProvider;