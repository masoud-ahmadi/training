import {useState} from "react";

const toDo =()=>{
    const [open, setOpen]=useState(false);
    const openModal =()=>{
        setOpen(true);
    }
    const closeModal=()=>{
        setOpen(false);
    }


    const[name,setName]=useState("");
    const[family,setFamily]=useState("");

    const nameChange = (event) => {
        setName(event.target.value);
    }

    const familyChange = (event) => {
        setFamily(event.target.value);
    }

    const [row1,setRow1]=useState({
        name:"",
        family:"",
        delete:false,
        edit:false,
    });

    const [row2,setRow2]=useState({
        name:"",
        family:"",
        delete:false,
        edit:false,
    });
    const [row3,setRow3]=useState({
        name:"",
        family:"",
        delete:false,
        edit:false,
    });

    const addRow =()=>{
        if (row1.name === "" && row1.family === ""){
            setRow1({
                ...row1,
                name:name,
                family:family,
            })
        } else if(row2.name === "" && row2.family === ""){
            setRow2({
                ...row2,
                name:name,
                family:family,
            })
        } else{
            setRow3({
                ...row3,
                name:name,
                family:family,
            })

        }
    }

    const delete1   = ()=>{
        setRow1({
            ...row1,
            delete: true,
        })
    }

    const delete2   = ()=>{
        setRow2({
            ...row2,
            delete: true,
        })
    }
    const delete3   = ()=>{
        setRow3({
            ...row3,
            delete: true,
        })
    }
    return <>
        <div className={"space-y-5 bg-green-400 p-3"}>
            <div className={"bg-gray-50 p-3 border border-gray-200 rounded-md"}>
                <button type={"button"} className={"button w-20 bg-blue-900 hover:bg-blue-800 text-white"} onClick={openModal}>افزودن</button>
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
                {
                    row1.name !== "" && row1.family !== "" && row1.delete === false &&
                    (
                        <>
                            <div className={"p-3 border-t border-gray-200 "}>
                                <div className={"flex text-center *:flex *:items-center *:justify-center"}>
                                    <div className={"w-10 shrink-0"}>
                                        1
                                    </div>
                                    <div className={"flex-1"}>
                                        <h2>{row1.name}</h2>
                                    </div>
                                    <div className={"flex-1"}>
                                        <h2>{row1.family}</h2>
                                    </div>
                                    <div className={"shrink-0 w-40 flex gap-2 items-center" }>
                                        <button type={"button"} className={"button bg-red-500"} onClick={delete1}>حذف</button>
                                        <button type={"button"} className={"button bg-green-500"}>ویرایش</button>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                }
                {
                    row2.name !== "" && row2.family !== "" && row2.delete === false &&
                    (
                        <>
                            <div className={"p-3 border-t border-gray-200 "}>
                                <div className={"flex text-center *:flex *:items-center *:justify-center"}>
                                    <div className={"w-10 shrink-0"}>
                                        1
                                    </div>
                                    <div className={"flex-1"}>
                                        <h2>{row2.name}</h2>
                                    </div>
                                    <div className={"flex-1"}>
                                        <h2>{row2.family}</h2>
                                    </div>
                                    <div className={"shrink-0 w-40 flex gap-2 items-center" }>
                                        <button type={"button"} className={"button bg-red-500"} onClick={delete2}>حذف</button>
                                        <button type={"button"} className={"button bg-green-500"}>ویرایش</button>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                }

                {
                    row3.name !== "" && row3.family !== "" && row3.delete === false &&
                    (
                        <>
                            <div className={"p-3 border-t border-gray-200 "}>
                                <div className={"flex text-center *:flex *:items-center *:justify-center"}>
                                    <div className={"w-10 shrink-0"}>
                                        1
                                    </div>
                                    <div className={"flex-1"}>
                                        <h2>{row3.name}</h2>
                                    </div>
                                    <div className={"flex-1"}>
                                        <h2>{row3.family}</h2>
                                    </div>
                                    <div className={"shrink-0 w-40 flex gap-2 items-center" }>
                                        <button type={"button"} className={"button bg-red-500"} onClick={delete3}>حذف</button>
                                        <button type={"button"} className={"button bg-green-500"}>ویرایش</button>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                }
            </div>

        </div>


        {
            open === true && <>
            <div className={"fixed inset-0 flex items-center justify-center bg-black/50"}>
                <div className={"grid grid-cols-1 gap-3 max-w-lg bg-white rounded-2xl p-2 w-full"}>
                    <div>
                        <label htmlFor="">name</label>
                        <input type="text" className={"input"} value={name} onChange={nameChange} />
                    </div>

                    <div>
                        <label htmlFor="">family</label>
                        <input type="text" className={"input"} value={family} onChange={familyChange}/>
                    </div>
                    <div className={"grid grid-cols-2 gap-3"}>
                        <button type={"button"} className={"button bg-green-500"} onClick={addRow}>add</button>
                        <button type={"button"} className={"button bg-red-500"} onClick={closeModal}>close</button>

                    </div>
                </div>
            </div>
            </>


            }



            </>
        }

        export default toDo