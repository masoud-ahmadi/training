import {useState} from "react";

const Todo = () => {
    const [inputValue, setInputValue] = useState('');

    const [task1, setTask1] = useState({
        name: "",
        do: false,
        deleted: false,
    });
    const [task2, setTask2] = useState({
        name: "",
        do: false,
        deleted: false,
    });
    const [task3, setTask3] = useState({
        name: "",
        do: false,
        deleted: false,
    });

    const handleValue = (event) => {
        setInputValue(event.target.value);
    }

    const handleAdd = (event) => {
        if (task1.name === "") {
            setTask1({
                ...task1,
                name: inputValue
            })
        }else if (task2.name === "") {
            setTask2({
                ...task2,
                name: inputValue
            })
        }else {
            setTask3({
                ...task3,
                name: inputValue
            })
        }

        setInputValue("");
    }

    const deleteTask1 = () => {
        setTask1({
            ...task1,
            deleted: true,
        })
    }
    const deleteTask2 = () => {
        setTask2({
            ...task2,
            deleted: true,
        })
    }
    const deleteTask3 = () => {
        setTask3({
            ...task3,
            deleted: true,
        })
    }
    const doTask1 = () => {
        setTask1({
            ...task1,
            do: true,
        })
    }
    const doTask2 = () => {
        setTask2({
            ...task2,
            do: true,
        })
    }
    const doTask3 = () => {
        setTask3({
            ...task3,
            do: true,
        })
    }

    return (<>
        <div>
            <input  type="text" onChange={handleValue} value={inputValue} />
            <button type={"button"} onClick={handleAdd}>add</button>
        </div>
        <div>
            <br/>
            {task1.name !== "" && task1.deleted === false && (<>
                <div>
                    {
                        task1.do ? <s>{task1.name}</s> : task1.name
                    }
                    <button onClick={deleteTask1}>حذف</button>
                    <button onClick={doTask1}>انجام شد</button>
                </div>
            </>)}
            {task2.name !== "" && task2.deleted === false && (<>
                <div>
                    {
                        task2.do ? <s>{task2.name}</s> : task2.name
                    }
                    <button onClick={deleteTask2}>حذف</button>
                    <button onClick={doTask2}>انجام شد</button>
                </div>
            </>)}
            {task3.name !== "" && task3.deleted === false && (<>
                <div>
                    {
                        task3.do ? <s>{task3.name}</s> : task3.name
                    }
                    <button onClick={deleteTask3}>حذف</button>
                    <button onClick={doTask3}>انجام شد</button>
                </div>
            </>)}
        </div>
    </>)
}

export default Todo