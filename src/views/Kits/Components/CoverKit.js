const CoverKit = ({ children, handleClick }) => {
    return (
        <a 
        onClick={handleClick} 
        className="hover:shadow-lg hover:scale-105 transition-all duration-500 ease-out">
             {children}
        </a>);
      };
  export default CoverKit;