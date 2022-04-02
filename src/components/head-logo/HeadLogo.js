import './HeadLogo.css'
import Image from "react-bootstrap/Image";

function HeadLogo() {
    return (
        <h1 className="font-size-40">
            <Image className="logo-img" src="/images/logo.png" alt="logo"/>
            &nbsp;Tech Market
        </h1>
    );
}

export default HeadLogo;