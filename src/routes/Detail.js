import React from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  return (
    <div>
      <span>Detail for {id}</span>
    </div>
  );
}

export default Detail;
