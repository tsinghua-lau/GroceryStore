import React from 'react'
import PropTypes from 'prop-types';


// 类组件
class Hello extends React.Component{ 
    //构造器执行一次
    constructor(props) {
        //构造器是否接收props,是否传递给super，取决于是否需要在构造器中使用props
        super(props);
        //构造器里的this指向当前组件的实例对象
        this.state = {
            count: 0
        }
        this.changeValue = this.changeValue.bind(this)
    }
    // render方法执行多次
    render() {
        console.log(this.props);

        // eslint-disable-next-line react/prop-types
        const { name } = this.props
        return (
            <div onClick={this.changeValue}>
                { name }
                一个组件
            </div>
        )
    }
    // 自定义方法
    changeValue() { 
        //1.类中的方法默认开启了严格模式，所以this指向undefined
        //2.更改state必须使用setState方法，且是更新是一种合并。不可以直接修改state，
        this.setState({
            count: this.state.count + 1
        })
        console.log(this.state.count);
    }
}

Hello.contextTypes = {
    address: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}

Hello.defaultProps = {
    name: '小红'
}


// 函数式组件
// function Hello2(props) {
//     return (
//         <div>
//             一个组件
//             { props.name}
//         </div>
      
//     )
//   }
  
  export default Hello
  
  