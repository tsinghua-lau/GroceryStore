import React, { useState } from "react";
import PropTypes from "prop-types";
import Childrens from "./children.jsx";
import { Routes, Navigate, Route, Link ,useRoutes} from "react-router-dom";

// const element = useRoutes([
//   {
//     path: "/",
//     element: <Navigate to='/about' />,
//   },
//   {
//     path: "/about",
//     element: <h1>About</h1>,
//   },

// ])
class Hello extends React.Component {
  state = {
    count: 0,
    sum:0,

  };

  static defaultProps = {
    name: "小红",
  };

  f = (num) => {
    console.log("接收到子组件数据", num);
    this.setState({
      count: num,
    });
  };

  render() {
    console.log("父组件render");

    return (
      <div>
        <div style={{ color: "red", fontSize: 12 }}>
          <Childrens count={this.state.count} f={this.f}></Childrens>
        </div>
        <div
          onClick={this.changeValue}
          style={{ color: "yellow", fontSize: 12 }}
        >
          我是父组件
          <br />
          <Link to="/home">首页</Link>&nbsp;&nbsp;
          <br />
          {this.state.sum === 2 ? <Navigate to="/home2" replace={ true} /> : <h1>当前值是{ this.state.sum}</h1>}
          <button onClick={this.changeValue2}>改变sum</button>
          {/* 路由规则，Route是配置路由的规则，同时也是一个占位符 */}
          <Routes>
          <Route path="/home" element={<Childrens/>} />
          {/* <Route path="/" element={<Navigate to="test"/>} /> */}
          </Routes>
          <hr />
          
        </div>
      </div>
    );
  }

  //箭头函数 this指向当前组件的实例对象
  //相当于在hello类中定义了一个changeValue方法
  changeValue = () => {
    this.setState({
      count: this.state.count + 1,
    });
    console.log(this.state.count);
  };

  changeValue2 = () => {
    this.setState({
      sum: 2,
    });
  
  };
}

export default Hello;
