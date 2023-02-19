import openmindLogo from "../../assets/openmind.png";

const Footer = () => {
    return (
        <footer className="text-center mt-16 mb-10 flex items-center gap-4 flex-col">
            <p className="text-gray-400 text-sm">Openmind Consulting & Design © <br/>Todos los derechos reservados</p>
            <img src={openmindLogo} alt="" />
            <a className="text-gray-400 text-sm" href="http://www.openmind-global.com" target="_blank" rel="noopener noreferrer">www.openmind-global.com</a>
        </footer>
    );
}

export default Footer;