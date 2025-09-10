import {useState} from "react";

const TodoMap = () => {
    const[open,setOpenModal] = useState(true);
    const openModal = () => {
        setOpenModal(false)
    }

    const closeModal = () => {
        setOpenModal(true)
    }

    const [name, setName] = useState("")
    const [family ,setFamily] = useState("")
    const [todos, setTodos] = useState([
        {
            row:1,
            name:"hhh",
            family:"fff",
            remove: false,
            edit: false,
        },
        {
            row:2,
            name:"reza",
            family:"mohammadi",
            remove: false,
            edit: false,
        },
        {
            row:3,
            name:"hasan",
            family:"abasi",
            remove: false,
            edit: false,
        }
    ])
    const nameChange = (event) => {
      setName(event.target.value);
    }

    const familyChange = (event) => {
        setFamily(event.target.value);
    }



      return <>


      <div className={"space-y-5 p-3 bg-red-400 "}>
          <div className={"bg-gray-100 rounded-lg p-2 "}>
              <button type={"button"} className={"w-20 button bg-blue-800 hover:bg-blue-700 text-white"} onClick={openModal}>
                  افزودن
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
              {
                  todos.map((item) => {
                      return<>
                          <div className={"p-3 border-t border-gray-200 "}>
                              <div className={"flex text-center *:flex *:items-center *:justify-center"}>
                                  <div className={"w-10 shrink-0"}>
                                      {item.row}
                                  </div>
                                  <div className={"flex-1"}>
                                      <h2>{item.name}</h2>
                                  </div>
                                  <div className={"flex-1"}>
                                      <h2>{item.family}</h2>
                                  </div>
                                  <div className={"shrink-0 w-40 flex gap-2 items-center" }>
                                      <button type={"button"} className={"button bg-red-500"} onClick={item.remove}>حذف</button>
                                      <button type={"button"} className={"button bg-green-500"}>ویرایش</button>
                                  </div>
                              </div>
                          </div>

                      </>
                  })
              }
          </div>

      </div>


      {
          open === false && <>
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
export default TodoMap;


