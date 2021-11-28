import {React,useState}from 'react';

const Filter = () => {
    const [title, settitle] = useState();
    const [rate, setrate] = useState();

    return (
        <div>
            <h2 style={{color:"white"}}>Rechercher un Film </h2>
             <div className="form-group  d-flex m-4" >
                  <input type="text" id="title" className="form-control"  placeholder="Entrer le nom de film " style={{width:"50%"}}/>
                  <button className="btn btn-primary">Rechercher</button>
                </div>
                
        </div>
    );
}

export default Filter;
