import './HeadLogo.css'
import Image from "react-bootstrap/Image";

function HeadLogo() {
    return (
        <h1 className="font-size-40">
            <Image className="logo-img" src="https://firebasestorage.googleapis.com/v0/b/tech-market-bad6f.appspot.com/o/logo.png?alt=media&token=d4c680c8-3801-423a-9f13-57d2a0d19372" alt="logo"/>
            &nbsp;Tech Market
        </h1>
    );
}

export default HeadLogo;