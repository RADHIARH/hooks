import { React, useState } from "react";

const Listfavouris = (props) => {
    const [nbfav, setnbfav] = useState();
  return (
    <div>
      List of favorites
      <h2 style={{ color: "white", marginTop: "20px", marginBottom: "20px" }}>
        {" "}
        Liste de Favoris{" "}
      </h2>
      <div className="row ">
        {props.favlist.map((element) => (
          <div className="col">
            <div className="row">
              <img
                className=" imagefav"
                src={element.posterURL}
                style={{ width: "250px", height: "250px" }}
              ></img>
            </div>
            <div className="row">
              <div className="fav" style={{ width: "250px", height: "100px" }}>
                <h4 style={{ color: "white" }}>{element.title}</h4>
                <h6 style={{ color: "white" }}>{element.rating}</h6>
              </div>
            </div>
          </div>
        ))}
        <hr style={{ color: "white", height: "7px" }} />
      </div>
    </div>
  );
};

export default Listfavouris;
