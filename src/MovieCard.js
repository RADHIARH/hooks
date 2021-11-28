import { React, useState, useRef } from "react";

const Moviecard = (props) => {
  const dispatach = useDispatch();
  const AddMovie = (movies) => {
    const newarray = movies.filter((element) => element.id === idd);
    setfavorite(favorite.concat(newarray));
    alert("Film ajouté à votre liste de favoris");
  };
  return (
    <div>
      <div
        className="image-container d-flex mb-4"
        style={{
          margin: "auto",
          backgroundColor: "#3D3D3D",
          width: "550px",
          height: "230px",
        }}
      >
        <div className="part1" style={{ width: "400px" }}>
          <div className="col">
            <div className="row ">
              <h3 style={{ color: "white" }}>{props.title}</h3>
            </div>
            <div className="row text-danger mb-1">
              <h6>{props.rating}</h6>
            </div>
            <div className="row text-secondary mb-2">
              <h6 style={{ color: "white" }}>{props.description}</h6>
            </div>
            <div className="row m-1">
              <button
                className="btn btn-outline-dark"
                onClick={() => props.addFavorite(props.ID)}
              >
                <i class="fas fa-plus-circle fa-1x m-2 "> Ajouter à la liste</i>
              </button>
            </div>
            {/* <button  onClick={()=>props.addFavorite(props.ID)} className="btn btn-primary" style={{width:"50%"}}>ADD to List</button> */}
          </div>
        </div>
        <div className="part2 " style={{ width: "50%" }}>
          <img
            src={props.posterURL}
            style={{ width: "280px", height: "230px" }}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Moviecard;
