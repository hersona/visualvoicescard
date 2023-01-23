const DropDownSurvey = (objQuestion, listScale, listQuestionsAnswer,register) => {

  if (listQuestionsAnswer.length) {
    var defaultValue = 0;
    var filterSelected = listQuestionsAnswer[0].value.filter(function (x) {
      return x.codInstrumento === objQuestion.id_Instrumento;
    });
    if (filterSelected != null && filterSelected.length > 0) {
      defaultValue = filterSelected[0].codTomaDatosValor;
    }

    return (
      <div
        key={objQuestion.id_Instrumento}
        className="flex-col gap-10 mt-4 md:flex-row md:flex"
      >
        <div className="flex flex-col items-start gap-3 md:flex-row md:w-7/12 md:border-b md:pb-4">
          {objQuestion.pregunta}
        </div>
        <div className="block w-full md:w-5/12">
          <select
            {...register(`ddlQuestion${objQuestion.id_Instrumento}`, { required: true })}
            className="block w-full mt-4 px-0.5 border-0 border-b border-slate-500 focus:ring-0 focus:border-YVmagenta hover:border-YVmagenta md:mt-0"
            defaultValue={defaultValue}
            key={objQuestion.id_Instrumento}
          >
            <option value="">Seleccione</option>
            {listScale[0].value.map((option) => (
              <option
                value={option.id_TomaDatosValor}
                key={option.id_TomaDatosValor}
              >
                {option.Valor}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }
};

export default DropDownSurvey;
