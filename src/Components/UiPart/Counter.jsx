import {useState} from "react";

const Counter = (props) => {

    const [count , setCount] = useState(props.count);

    const counter =()=>{
        setCount(count + props.step)
    }

  return <>



      <button type={"button"} onClick={counter}>
          {props.children}
      </button>

      <span>{count}</span>
  </>
}

export default Counter