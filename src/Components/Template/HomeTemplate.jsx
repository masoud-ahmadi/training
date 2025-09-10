import Counter from "../UiPart/Counter.jsx";
import Button from "../UiPart/Button.jsx";
import {useState} from "react";
import ToDo from "../UiPart/toDo.jsx";
import TodoMap from "../UiPart/TodoMap.jsx";

const HomeTemplate = () => {
    const [show, setShow] = useState(true);

    return <>
        <div className={"space-y-5 container mx-auto"}>

        <button onClick={() => setShow(false)}>change show</button>
        {/*<Counter>افزودن</Counter>*/}
        { show === true && <Button show={true} /> }

        <ToDo/>
        <TodoMap/>
        </div>


    </>
}

export default HomeTemplate