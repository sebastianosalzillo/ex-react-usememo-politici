import React from "react"


const PoliticianCard = ({ name, image, position, biography}) => {

    return (

        <div className="card">
        <h2>{name}</h2>
        <div className="img-container">
          <img src={image} alt={name} />
        </div>
        <p>{position}</p>
        <p>{biography}</p>
      </div>
        
    )
}


export default React.memo(PoliticianCard)