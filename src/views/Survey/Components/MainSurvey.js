import Button from '../../../commons/Button';

const MainSurvey = ({ data, onBtnStartClick }) => {    

    const handleStartClick = () => {
        onBtnStartClick(data.id_Proyecto);
    };

    return (
    <>
        <h3 className="font-bold text-base leading-5 text-slate-700">
            {data.nombreProyecto}
        </h3>
        <div dangerouslySetInnerHTML={{ __html: data.mensajeBienvenida }} />
        <hr className="my-12"></hr>
        <label className="w-full flex justify-center items-center mt-2">
            <input type="checkbox" className="rounded-sm w-6 h-6"></input>
            <span className="ml-3 leading-5">Acepto
                <a href="#!" className="ml-1 text-sky-500 underline-offset-2 underline">
                  política de tratamiento de datos
                </a>
            </span>
        </label>
        <div className="mt-8 flex justify-center">
            <Button handleClick={handleStartClick}>Empezar encuesta</Button>
        </div>
    </>
    );
};

export default MainSurvey;