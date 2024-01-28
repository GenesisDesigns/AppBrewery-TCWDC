import React from "react";

function Card (props) {
    return <div className="card-container">
            <div className="keyId">{props.id}</div>
             <img className="profile-img" src={props.img} alt="Character Profile Pic" /> 
            <div className="profile-details">
                <div>{props.name}</div>
                <div>{props.contact}</div>
                <div>{props.email}</div>
            </div>

        
    </div>
}

function CreateCard (props) {
    return (
        <Card 
        id={props.id}
        key={props.id}
        src={props.img}
        name={props.name}
        contact={props.contact}
        email={props.email}
        />
    )

}

export default Card;
export {Card, CreateCard};