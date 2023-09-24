import React from "react";
import { useParams, useSearchParams, useLocation } from "react-router-dom";
import "./fnComponent.css";
export default function fnComponent() {
  const { id, name } = useParams();
  const [search, setSearch] = useSearchParams();
  const id2 = search.get("id2");
  const name2 = search.get("name2");



  return (
    <div className="aaa">
      我是函数式组件,
      <br />
      params参数：id:{id},name:{name}
      <br />
      search参数：id:{id2},name:{name2}
      <br />
      <button onClick={() => setSearch("id2=123&name2=王五")}>
        点我更新参数
      </button>
   
    </div>
  );
}
