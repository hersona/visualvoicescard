const infoTextSurvey = (objQuestion) => {
  return  <div  key={objQuestion.id_Instrumento} className="bg-YVyellow/10 rounded-lg p-4 pl-6 border-l-4 border-YVyellow mt-16 mb-8 first:mt-4">
    <div className="font-semibold" dangerouslySetInnerHTML={{ __html:objQuestion.pregunta }} />
    </div>
};

export default infoTextSurvey;