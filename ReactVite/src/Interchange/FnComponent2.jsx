import React from "react";
import { useLocation } from "react-router-dom";
import "./fnComponent.css";
export default function fnComponent() {


    const {
      state: { id3, name3 },
    } = useLocation();


  return (
    <div className="bbb">
      News
<br />
      state参数：id:{id3},name:{name3}
    </div>
  );
}
