import React from 'react'
import {useDispatch,useSelector} from "react-redux"

const Home = () => {
    const value =20;

    const dispatch = useDispatch()
    const {c} = useSelector(state=>state.custom)

    const addBtn=()=>{
        dispatch({
            type:"Increment",
        })
    }
    const removeBtn=()=>{
        dispatch({
            type:"Decrement",
        })
    }
    const addBtn25=()=>{
        dispatch({
            type:"IncrementByValue",
            payload:25,
        })
    }



  return (
    <div>
        <h1>{c}</h1>

        <button onClick={addBtn}>Increment</button>
        <button onClick={removeBtn}>Decrement</button>
        <button onClick={addBtn25}>IncrementByValue</button>




    </div>
  )
}

export default Home