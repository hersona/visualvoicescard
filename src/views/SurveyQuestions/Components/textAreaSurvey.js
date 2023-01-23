import { useState } from 'react';

const TextAreaSurvey = (objQuestion,listQuestionsAnswer, register) => {

  var defaultValue = "";

  var filterSelected = listQuestionsAnswer[0].value.filter(function (x) {
    return x.codInstrumento === objQuestion.id_Instrumento;
  });

  if (filterSelected != null && filterSelected.length > 0) {
    defaultValue = filterSelected[0].numeroOpcion;
  }

  const [text, setText] = useState(defaultValue);


  return (
    <div
      key={objQuestion.id_Instrumento}
      className="flex-col gap-10 mt-4 md:flex-row md:flex"
    >
      <div className="flex flex-col items-start gap-3 md:flex-row md:w-7/12 md:border-b md:pb-4">
        {objQuestion.pregunta}
      </div>
      <div className="block w-full md:w-5/12">
        <textarea   {...register(`txtQuestion${objQuestion.id_Instrumento}`, { required: true })} value={text}  onChange={(e) => setText(e.target.value)}  className="rounded focus:border-YVmagenta focus:outline-0 w-full" rows="3" placeholder="Escriba su respuesta aquí..."  />
      </div>
    </div>
  );
};

export default TextAreaSurvey;
