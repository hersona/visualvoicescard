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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "80%",
        paddingTop: "20px",
      }}
    >
      <div>
        <b>{listImage[0].fields.titulo}</b>
      </div>
      <br />
      <div
        dangerouslySetInnerHTML={{ __html: listImage[0].fields.descripcion }}
      ></div>
      {hasImage && (
        <div>
          <img src={listImage[0].fields.imagenTarjeta[0].fields.file.url} />
        </div>
      )}
    </div>
  );
};
export default Card;
