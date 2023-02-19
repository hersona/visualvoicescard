
import WelcomeImg from "../../assets/coverpopIntro.png";
import Button from "../../commons/Button";
const Welcome = () => {
  return (
    <div className="py-6">
      <div className="">
        <div className="w-[295px] rounded-lg mx-auto shadow-2xl">
            <img 
            className="rounded-lg" 
            src={WelcomeImg} 
            alt="Imagen doodle" />
            <div className="p-6 pt-0 text-center">
                <h2 className="text-green3 font-bold text-3xl mb-3">
                    ¡Te damos la bienvenida!
                </h2>
                <p className="text-gray-500">
                    Prepárate para explorar y conocer a profundidad los diferentes kits de tarjetas que potencializarán tu forma de trabajar.
                </p>
                <Button className="text-2xl text-bold">
                  ¡Genial! 
                </Button>
    
            </div>
            
        </div>
      </div> 
    </div>
  );
};

export default Welcome;
