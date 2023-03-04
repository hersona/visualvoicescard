const CoverKit = ({ listImage, onBtnClickKit }) => {

    const handleStartClick = (id) => {
        onBtnClickKit(id);
    };

  const itemList = Object.keys(listImage).map((e, i) => {
      return (<a key={listImage[e].sys.id} 
        href={"/opencards/infokits/" + listImage[e].sys.id}
        className="hover:shadow-lg hover:scale-105 transition-all duration-500 ease-out"
      >
                <img className="w-full" src={"https:" + listImage[e].fields.imagenProducto.fields.file.url} alt="" />
      </a>)
  });
  return itemList;
};
export default CoverKit;
