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
    <div className="flex flex-col gap-10 w-full border border-slate-100 border-t-4 border-t-green3 rounded-lg shadow-xl">
        {hasImage && (
      <div className="w-12/12 w-full flex items-center justify-center md:px-20 lg:px-10 bg-slate-200 rounded-sm h-48 relative bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-yellow-50 via-green-100 to-green-500">
        
        <img src={listImage[0].fields.imagenTarjeta[0].fields.file.url}  className="rounded-lg w-5/12 shadow-2xl border bg-white mt-6 absolute top-0"/>
      </div>
    )}
     <div className="w-12/12 px-5 py-8 md:px-20 lg:px-10 mt-20 pt-8">
     <div className="text-green3 text-3xl leading-none font-bold">
            {listImage[0].fields.titulo}
          </div>
          <div className="mt-4 text-gray-500 pb-6"
          dangerouslySetInnerHTML={{ __html: listImage[0].fields.descripcion }}
        ></div>
     </div>
          
  
  
      
    </div>
  );
};
export default Card;
