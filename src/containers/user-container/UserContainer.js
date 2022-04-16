import SignIn from "../../components/sign-in/SignIn";
import {useUserContext} from "../../context/UserContext";
import {collection, getDocs, getFirestore, query, where} from "firebase/firestore/lite";
import {getFirestoreApp} from "../../firebase/firebase-config";
import {Navigate, useNavigate} from 'react-router-dom';
import {useState} from "react";


function UserContainer() {
    const {user, setUpLoggedUser} = useUserContext();
    const [message, setMessage] = useState(undefined);
    const navigate = useNavigate();

    const onLogin = (data) => {
        setMessage(undefined);
        const db = getFirestore(getFirestoreApp());
        const userCollection = collection(db, 'users');
        const  userQuery = query(userCollection,
            where('email', '==', data.email), where('passWord', '==', data.password));

        getDocs(userQuery).then((userSnapshot) => {
            const usersDb = userSnapshot.docs.map(doc => ({documentId: doc.id, ...doc.data() }));
            const userDb = usersDb.find(x => x.email === data.email && x.passWord === data.password);

            if(userDb) {
                setUpLoggedUser(userDb);
                navigate("/");
            }
            else setMessage('Username or password are incorrect');

        }).catch(error => console.log(error));
    }

    return(
        <>
            {
            user ? <Navigate replace to="/" />
                :
                <SignIn onLogin={ onLogin } message={ message }/>
        }
    </>
    );
}

export default UserContainer;