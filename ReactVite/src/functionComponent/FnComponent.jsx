import { useContext} from "react";
import { NavLink, useRoutes ,useNavigate} from "react-router-dom";
import routes from "../routes/fnindex.jsx";
import store from '../redux/store'
import { Context } from '../context/index.js';

export default function App() {
    const element = useRoutes(routes);
    const navigate = useNavigate();
    
  const id2 = 6;
  const name2 = "张三";
  const id3 = 7;
  const name3 = "张三风";
  const value = useContext(Context);
    function forword(){
        navigate(1)
    }
    function back() {
        navigate(-1)
    }
  return (
    <div>
      useContext夸组件通信{value}
      <Context.Consumer>
      {value => <span>{value}</span>}
    </Context.Consumer>
          <button onClick={forword}>前进</button>
          <button onClick={back}>后退</button>
          <br />
          redux当前求和为{store.getState()}
          <br />
          多个redux数据
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <div className="page-header">
            <h2>React Router Demo</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-2 col-xs-offset-2">
          <div className="list-group">
            {/* 路由链接 */}
            {/* params参数 */}
            <NavLink className="list-group-item" to={`about/1/2`}>
              About
            </NavLink>
            {/* search参数 */}
            <NavLink
              className="list-group-item"
              to={`home?id2=${id2}&name2=${name2}`}
            >
              Home
            </NavLink>

            {/* state参数 */}
            <NavLink
              className="list-group-item"
              to="home/news"
              state={{
                id3: id3,
                name3: name3,
              }}
            >
              News
            </NavLink>
          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
              {/* 注册路由 */}
              {element}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
