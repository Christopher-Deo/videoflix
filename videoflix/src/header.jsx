import logo from './logo.png'; 

const Header = () => {
    // Import result is the URL of your image.
    return (
        <header className='header'>
            <img className ='logo' src={require('./logo.png')} alt="vidflix logo" />
        </header>
);
}

export default Header;
