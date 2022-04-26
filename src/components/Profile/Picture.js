import photo from "../../assets/images/don.jpg";
import "./Picture.css";

function Picture() {
  return (
    <>
      <div className="picture">
        <img src={photo} alt="photo" />
      </div>
    </>
  );
}

export default Picture;
