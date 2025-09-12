import {useState} from "react";

const TodoMap = () => {
    const [open, setOpenModal] = useState(false);

    const [formData, setFormData] = useState({
        name: "", family: ""
    });


    const [todos, setTodos] = useState([{
        id: 1, name: "aijocija", family: "kpokok"
    }, {
        id: 2, name: "24234234", family: "234234234"
    }, {
        id: 3, name: "234l[234l[pl[plojiuh", family: "234234ujoijoij"
    },])
    const openModal = () => {
        setOpenModal(true)
    }

    const closeModal = () => {
        setOpenModal(false)
    }

    const handleValue = (e) => {
        setFormData({
            ...formData, [e.target.name]: e.target.value,
        })
    }

    const addRow = () => {
        setTodos([...todos, {
            name: formData.name,
            family: formData.family,
        }])

        setFormData({
            name: "",
            family: "",
        })

        setOpenModal(false)
    }

    const handleEdit = (id) => {
        const newName = prompt("Enter new name:");
        const newFamily = prompt("Enter new family:");

        const result = todos.map(item => {
            if (item.id === id) {
                return {
                    id: item.id, name: newName, family: newFamily,
                }
            } else {
                return item
            }
        })

        setTodos(result)
    }

    const handleDelete = (id) => {
        if (confirm("ایا مطمئن هستید ؟")) {
            const result = todos.filter(item => {
                if (item.id === id) {
                    return false;
                } else {
                    return true
                }
            })

            setTodos(result)
        }
    }

    return <>


        <div className={"space-y-5 p-3 bg-red-400 "}>
            <div className={"bg-gray-100 rounded-lg p-2 "}>
                <button type={"button"} className={"w-20 button bg-blue-800 hover:bg-blue-700 text-white"}
                        onClick={openModal}>
                    1 افزودن
                </button>

            </div>
            <div className={"bg-gray-50 border border-gray-200 rounded-t-md"}>
                <div className={"p-3 "}>
                    <div className={"flex text-center"}>
                        <div className={"w-10 shrink-0"}>
                            ردیف
                        </div>
                        <div className={"flex-1"}>
                            نام
                        </div>
                        <div className={"flex-1"}>
                            فامیلی
                        </div>
                        <div className={"shrink-0 w-40"}>
                            تنظیمات
                        </div>
                    </div>
                </div>
                {todos.map((item,) => {
                    return <div className={"p-3 border-t border-gray-200 "} key={item.id}>
                        <div className={"flex text-center *:flex *:items-center *:justify-center"}>
                            <div className={"w-10 shrink-0"}>
                                {item.id}
                            </div>
                            <div className={"flex-1"}>
                                <h2>{item.name}</h2>
                            </div>
                            <div className={"flex-1"}>
                                <h2>{item.family}</h2>
                            </div>
                            <div className={"shrink-0 w-40 flex gap-2 items-center"}>
                                <button type={"button"} className={"button bg-red-500"}
                                        onClick={() => handleDelete(item.id)}>حذف
                                </button>
                                <button type={"button"} className={"button bg-green-500"}
                                        onClick={() => handleEdit(item.id)}>ویرایش
                                </button>
                            </div>
                        </div>
                    </div>
                })}
            </div>

        </div>


        {open && <>
            <div className={"fixed inset-0 flex items-center justify-center bg-black/50"}>
                <div className={"grid grid-cols-1 gap-3 max-w-lg bg-white rounded-2xl p-2 w-full"}>
                    <div>
                        <label htmlFor="">name</label>
                        <input type="text" className={"input"} value={formData.name} name={"name"}
                               onChange={handleValue}/>
                    </div>

                    <div>
                        <label htmlFor="">family1</label>
                        <input type="text" className={"input"} value={formData.family} name={"family"}
                               onChange={handleValue}/>
                    </div>
                    <div className={"grid grid-cols-2 gap-3"}>
                        <button className={"button bg-green-500"} onClick={addRow}>add</button>
                        {/*<button type={"button"} className=button{"button bg-green-500"} onClick={addMasoud}>add</button>*/}
                        <button type={"button"} className={"button bg-red-500"} onClick={closeModal}>close</button>

                    </div>
                </div>
            </div>
        </>}


    </>
}
export default TodoMap;


