import React from 'react'
import { Outlet,useNavigate } from 'react-router-dom'
import store from '../redux/store'

export default function Home() {
    const navigate = useNavigate();
    function goDetails(m) { 
        navigate('news', {
            replace: false,
            state: {
                id3: 1,
                name3: m
            }
        })
    }
    function add(value) {
        store.dispatch({ type: 'increment', data: value })
    }
  return (
      <div>
          Home组件
          <div style={{ width: '100%', height: 'auto', border: '1px solid red' }}>
              <h1>Outlet区域</h1>
              <button onClick={() => goDetails('小红')}>点击跳转</button>
              redux当前求和为{store.getState()}
              <br />
              <button onClick={()=>add(2)}>redux add</button>
            <Outlet />
          </div>
      </div>
      
  )
}
