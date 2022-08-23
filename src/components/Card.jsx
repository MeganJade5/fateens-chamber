import React from "react";
import ListItem from "./ListItem";

const Card = (props) => {
    return (
        <>
        <h4>{props.heading}</h4>
        <ul>
            <ListItem title={"Title"} description={props.title}></ListItem>
            <ListItem title={"Date"} description={props.date}></ListItem>
            <ListItem title={"Description"} description={props.description}></ListItem>
        </ul>
        </>
    )
}

export default Card;