import react from "react";
  
const ImageLibrary = () => {
    
    const imageUrls = localStorage.getItem("likedImages");
    console.log(imageUrls);
    return (
        <section className="photo-card">
            <img className="banana-photo" src={imageUrls} />
          {/* {imageUrls.map(imageUrl => (
            
            <>
              <img src={imageUrl} />
            </>
          ))} */}
        </section>
    );
}

export default ImageLibrary;