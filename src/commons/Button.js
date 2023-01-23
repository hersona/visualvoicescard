const Button = ({ children, handleClick }) => {
  return (
    <button 
    onClick={handleClick} 
    className='bg-YVcyan rounded-tl-[50px] rounded-r-[30px] rounded-bl-[4px] min-w-[200px] py-3 px-6 text-white text-xl leading-5 hover:bg-cyan-600 hover:shadow-md transition-all ease-out'
    >
  {children}
    </button>);
    };
export default Button;