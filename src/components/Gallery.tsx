
 import vite from "../assets/vite.svg";
import react from "../assets/react.svg";

const Gallery = () => {
  
const images = [vite, react];
  
  return (
    <section style={{ padding: "20px" }}>
      <h2>Gallery</h2>

      <div style={{ display: "flex", gap: "10px" }}>
        {images.map((img, index) => (
          <img key={index} src={img} alt="style" />
        ))}
      </div>
    </section>
  );
};

export default Gallery;