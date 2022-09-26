import React from "react";
import Flipcard from "react-flipcard-2";

export const Card = ({ personaje }) => {
  return (
    <section className="personaje">
      <Flipcard>
        <figure>
          <img src={personaje.image} alt={personaje.name} />
        </figure>
        <div className="card">
          <div className="estado">
            <span className={personaje.status}></span>
            <h4>{personaje.status}</h4>
          </div>
          
            <figure>
              <img src={personaje.image} alt={personaje.name} />
            </figure>
            <h2>{personaje.name}</h2>
            <p>
              {personaje.species} <span>-</span> {personaje.gender}
            </p>
          
        </div>
      </Flipcard>
    </section>
  );
};
