import React from "react";
import PropTypes from "prop-types";

class Hello extends React.Component {
  state = {
    count: 0,
    items: ["Item 1", "Item 2", "Item 3"],
  };

  static contextTypes = {
    // address: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  };

  static defaultProps = {
    name: "小红",
  };

  render() {
    return (
      <div>
        我是子组件,接收到的数据：{this.props.count}
        <button onClick={this.handleClick}>点我，给父组件传递数据</button>
        {this.state.items.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    );
  }
  handleClick = () => {
    // 调用父组件传入的props，并传入参数

    this.props.f((Math.random() * 1000).toFixed(0));
  };

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
