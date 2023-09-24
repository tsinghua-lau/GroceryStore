import React from "react";
import PropTypes from "prop-types";

class Hello extends React.Component {
  state = {
    count: 0,
  };
  static contextTypes = {
    // address: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  };

  static defaultProps = {
    name: "小红",
  };

  UNSAFE_componentWillMount() {
    console.log("父组件WillMount");
  }
  componentDidMount() {
    console.log("父组件Mount");
  }
  UNSAFE_componentWillUpdate() {
    console.log("父组件WillUpdate");
  }
  UNSAFE_componentWillReceiveProps() {
    console.log("父组件WillReceiveProps");
  }
  shouldComponentUpdate() {
    console.log("父组件shouldComponentUpdate");
    return true;
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps);
    console.log(prevState);
    console.log("父组件Update");
  }
  componentWillUnmount() {
    console.log("父组件WillUnmount");
  }

  render() {
    console.log("父组件render");
    return (
      <div>
        <input type="text" ref={(c) => (this.input1 = c)} />
        {this.state.count}
        <p onClick={this.changeValue}>一个点击组件</p>
        {this.props.name}
      </div>
    );
  }

  //箭头函数 this指向当前组件的实例对象
  //相当于在hello类中定义了一个changeValue方法
  changeValue = () => {
    const { input1 } = this;
    console.log(input1.value);
    this.setState({
      count: this.state.count + 1,
    });
    console.log(this.state.count);
  };
}

export default Hello;
