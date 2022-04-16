import {createContext, useContext, useState} from "react";

const UserContext = createContext([]);
export const useUserContext = () => useContext(UserContext);


function UserContextProvider({children}) {
    const [user, setUser] = useState( undefined);

    const setUpLoggedUser = (userDb) => {
       const userData = Object.assign({id: userDb.documentId, name: userDb.firstName, username: userDb.userName, email: userDb.email, phone: userDb.phone});
       setUser(userData);
    }

    const logoutUser = () => {
        setUser(undefined);
    }


    return (
        <UserContext.Provider value={{
            user,
            setUpLoggedUser,
            logoutUser
        }}>
            { children }
        </UserContext.Provider>
    );
}

export default UserContextProvider;