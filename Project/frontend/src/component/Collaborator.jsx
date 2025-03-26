import image1 from "../assets/Screenshot_2025-03-08_150713.png";
import image2 from "../assets/arghya_image.jpeg";
import image3 from "../assets/anindya_image.jpeg";
const Collaborator = () => {
  return (
    <div className="container text-center mt-5">
      <div className="row align-items-center">
        <div className="col d-flex justify-content-center">
          <div className="card" style={{ width: "18rem", textAlign: "center" }}>
            <img
              src={image2}
              className="card-img-top"
              alt="Collaborator Image"
              style={{ height: "400px", objectFit: "cover" }}
            />
            <div className="card-body">
              <p className="card-text">
                <h2>Alfaarghya</h2>
                <h3>
                  System Engineer
                </h3>
                
              </p>
            </div>
          </div>
        </div>
        <div className="col d-flex justify-content-center">
          <div className="card" style={{ width: "18rem" }}>
            <img
              src={image1}
              className="card-img-top"
              alt="Collaborator Image"
              style={{ height: "400px", objectFit: "cover" }}
            />
            <div className="card-body">
                <h2>coderIman</h2>
                <h3>
                  Assistent System Engineer
                  <p>(CEO,mentormate)</p>
                </h3>
            </div>
          </div>
        </div>
        <div className="col d-flex justify-content-center">
          <div className="card" style={{ width: "18rem" }}>
            <img
              src={image3}
              className="card-img-top"
              alt="Collaborator Image"
              style={{ height: "400px", objectFit: "cover" }}
            />
            <div className="card-body">
              <h3>Anindya Mitra</h3>
              <h3>Technical Head</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collaborator;
