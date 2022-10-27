import logo from './logo.png'; 

const Header = () => {
    // Import result is the URL of your image.
    return (
    <img src={require('./logo.png')} alt="videoflix logo" />
);
}

export default Header;
