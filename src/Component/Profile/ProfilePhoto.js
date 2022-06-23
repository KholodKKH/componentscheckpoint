import React from "react";
import photograph from "./img/photograph.jpg";

import { Card } from "react-bootstrap";

const photograph1 = () => {
  return (
    <>
    <Card.Img variant="top" src={photograph} alt="tdh"/>
    {/* <img src={photograph} alt="tdh"/> */}
    </>
  );
};
export default photograph1;