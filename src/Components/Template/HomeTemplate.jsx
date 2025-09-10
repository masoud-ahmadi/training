import Counter from "../UiPart/Counter.jsx";
import Button from "../UiPart/Button.jsx";
import {useState} from "react";
import ToDo from "../UiPart/toDo.jsx";


const HomeTemplate = () => {
    const [show, setShow] = useState(true);

    return <>
        <button onClick={() => setShow(false)}>change show</button>
        {/*<Counter>افزودن</Counter>*/}
        { show === true && <Button show={true} /> }

        <ToDo/>
    </>
}

export default HomeTemplate