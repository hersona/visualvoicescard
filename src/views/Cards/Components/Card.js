const Card = ({ listImage, onBtnClickKit }) => {

  const handleStartClick = (id) => {
    onBtnClickKit(id);
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "left",width:'200px', paddingTop:'20px' }}
    >
      <div><h1>{listImage[0].fields.titulo}</h1></div>
      <div>{listImage[0].fields.descripcion}</div>
      <div>
        <img
          src={listImage[0].fields.imagenTarjeta[0].fields.file.url}
        />
      </div>
    </div>
  );
};
export default Card;
