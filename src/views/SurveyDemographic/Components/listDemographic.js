import { useForm } from "react-hook-form";
import Button from '../../../commons/Button';
import DetailsSurvey from "../Components/DetailsSurvey"

const ListDemographic = ({ data, survey, onBtnSaveClick, onBtnBack }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    var objListDemographic = data.filter(function (x) { return x.name === "Demographic" });
    var objListAnswer = data.filter(function (x) { return x.name === "DemographicAnser" });

    const renderDropDown = (objDemographic) => {
        if (objListAnswer.length) {
            var defaultValue = 0;
            var filterSelected = objListAnswer[0].value.filter(function (x) { return x.codDatoDemografico === objDemographic.id_DatosDemografico });
            if (filterSelected != null && filterSelected.length > 0) { 
                defaultValue = filterSelected[0].valor;
            }

            return (<select {...register(`ddlDemografico${objDemographic.id_DatosDemografico}`, { required: true })}
                className="block w-full mt-0 px-0.5 border-0 border-b border-slate-500 focus:ring-0 focus:border-YVmagenta hover:border-YVmagenta"
                defaultValue={defaultValue}
                key={objDemographic.id_DatosDemografico}>
                <option value="">Seleccione</option>
                {objDemographic.objListDatoDemografico.map((option) => (
                    <option value={option.id_DatoDemograficoValor} key={option.id_DatoDemograficoValor}>{option.valorDato}</option>
                ))}
            </select>);
        }
    }


    return (

        <div className="pt-6 pb-6 w-full text-slate-500">

            <div className='md:hidden'>
                <h3 className='font-bold text-base leading-5 text-slate-700'>Encuesta Clima Organizacional</h3>
                <h1 className='font-bold text-xl leading-6 text-slate-700'>Mi Compañía</h1>
            </div>
            <div className="flex flex-col mt-4 w-full lg:flex-row-reverse lg:gap-5 lg:items-start">
                <DetailsSurvey survey={survey} />

                <form onSubmit={handleSubmit(data => onBtnSaveClick(data))}>
                    <div className="rounded-xl w-full lg:p-14 lg:pt-10 lg:shadow-2xl lg:shadow-cyan-500/30">
                        <p className="text-YVmagenta text-2xl leading-7 font-bold mt-10 mb-3 lg:mt-0">
                            Complete los datos a continuación para comenzar a responder la encuesta.
                        </p>
                        <ul className="list-none flex flex-col gap-8 mt-8">
                            {objListDemographic[0].value.map(objDemographic => (
                                <li key={objDemographic.id_DatosDemografico} className='text-slate-700 font-bold text-lg leading-none lowercase first-letter:uppercase'>
                                    {objDemographic.valorIlustrarDemografico}
                                    {renderDropDown(objDemographic)}
                                </li>
                            ))}
                        </ul>

                        {/* use role="alert" to announce the error message */}
                        {errors.name && errors.name.type === "required" && (
                            <span role="alert">This is required</span>
                        )}

                        <div className="mt-16 flex flex-col justify-center items-center gap-3">
                            <Button>Guardar</Button>
                            <a onClick={() => {onBtnBack()}} href='#' className='hover:text-YVmagenta hover:underline underline-offset-2'>Regresar</a>
                        </div>

                    </div>
                </form>
            </div>

        </div>

    );
};

export default ListDemographic;