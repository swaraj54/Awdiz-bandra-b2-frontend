import React, { useEffect } from "react";
import { useParams } from "react-router";

const SingleProduct = () => {
  const { id } = useParams();

  return <div>SingleProduct - {id}</div>;
};

export default SingleProduct;
