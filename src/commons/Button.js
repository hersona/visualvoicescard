const Button = ({ children, handleClick }) => {
  return (
    <button 
    onClick={handleClick} 
    className="bg-green3 text-xl text-white py-2 px-4 mx-auto mt-8 max-w-max rounded-xl flex items-center justify-center gap-2 hover:shadow-lg hover:bg-green4 transition-all duration-200"
    >
  {children}
    </button>);
    };
export default Button;