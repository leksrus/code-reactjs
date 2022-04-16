import {useUserContext} from "../../../context/UserContext";
import Dropdown from "react-bootstrap/Dropdown";


function SignInWidget() {
    const {user, logoutUser} = useUserContext();

    return (
    <Dropdown className={'mt-1'}>
        <Dropdown.Toggle variant="info" id="dropdown-user">
            <b>User:</b> {user.username}
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item href="#" onClick={logoutUser}>Sign out</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
    );
}

export default SignInWidget;