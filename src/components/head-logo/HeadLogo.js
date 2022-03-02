import './HeadLogo.css'

function HeadLogo() {
    return (
        <h1>
            <img className="logo-img" src="/images/logo.png" alt="logo" style={ { width: 50, height: 50}}/>
            &nbsp;Tech Market
        </h1>
    );
}

export default HeadLogo;