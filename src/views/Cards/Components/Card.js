const Card = ({ listImage, onBtnClickKit }) => {
  const handleStartClick = (id) => {
    onBtnClickKit(id);
  };

  const hasImage =
    listImage &&
    listImage[0] &&
    listImage[0].fields.imagenTarjeta &&
    listImage[0].fields.imagenTarjeta[0].fields.file.url;

  return (
    <div className="flex flex-col gap-10 px-5 py-8 md:px-20 lg:px-10 w-full border border-slate-100 border-t-4 border-t-green3 rounded-lg shadow-xl md:flex-row lg:flex-row">
     <div className="w-12/12 md:8/12 lg:w-7/12">
        <div className="text-gray-600 text-3xl leading-none font-bold">
            {listImage[0].fields.titulo}
          </div>
          <div className="mt-4 text-gray-500 space-y-5"
          dangerouslySetInnerHTML={{ __html: listImage[0].fields.descripcion }}
        ></div>
     </div>
          
    {hasImage && (
      <div className="w-12/12 w-full md:4/12 lg:w-5/12 flex justify-center">
        <img src={listImage[0].fields.imagenTarjeta[0].fields.file.url}  className="rounded-lg"/>
      </div>
    )}
  
      
    </div>
  );
};
export default Card;
