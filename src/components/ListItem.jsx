import React from "react";

const ListItem = (props) => (
    <li><b>{props.title}:</b> {props.description}</li>
);

export default ListItem;
