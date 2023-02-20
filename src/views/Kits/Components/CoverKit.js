const CoverKit = ({ listImage, handleClick }) => {
  const itemList = Object.keys(listImage).map((e, i) => {
      return (<a key={listImage[e].sys.id} 
        onClick={handleClick}
        className="hover:shadow-lg hover:scale-105 transition-all duration-500 ease-out"
      >
        {listImage[e].sys.id}
        <img className="w-full" src={"https:" + listImage[e].fields.imagenProducto.fields.file.url} alt="" />
      </a>)
  });
  return itemList;
};
export default CoverKit;
