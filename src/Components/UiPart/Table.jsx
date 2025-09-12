import { useState } from "react";

const Table = () => {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };

  const [formData, setFormData] = useState("");
  const handleValue = (e) => {
    setFormData({
        ...formData,
        [e.target.name]:e.target.value,
    })

    console.log(setFormData);
  };
  
  const [listProduct , setListProduct]=useState([
    {
        name:"masoud",
        price:2000.000,
        description:"khobe"
    }
  ])
  

  const handleAddProduct =()=>{
    setListProduct([
        ...listProduct,
        {
            name:formData.name,
            price:formData.price,
            description:formData.description,
        }
    ])
  }

  const handleDelete =(id) =>{
    if (confirm("ایا مطمپن هستید")) {
         const resault =   listProduct.filter(item =>{
      if (item.id === id) {
        return false;
       }else{
        return true
       }
    })
    setListProduct(resault)
    }
     
  }


     const handleEdit = (id) =>{
        const newName =prompt("نام خود را وارد کنید");
        const newprice =prompt("مبلغ خود را وارد کنید");
        
        
        // const new = listProduct.price;
        const resault = listProduct.map(item =>{
            if (item.id === id) {
                return{
                    id:item.id,name:newName,price:newprice
                }        
            }else {
                return item
            }
        })
        
            setListProduct(resault)
        

        
    } 


  return (
    <>
      <div className={"py-20 space-y-10 container mx-auto"}>
        <div className={"bg-gray-200 p-2 rounded-md"}>
          <button
            type={"button"}
            className={"button w-26 bg-blue-500 text-white"}
            onClick={openModal}
          >
            add
          </button>
        </div>
        <div className="overflow-hidden rounded-xl   border border-gray-200 bg-white ">
          <div className="max-w-full overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b border-gray-100 dark:border-gray-800">
                  <th className="px-5 py-3 sm:px-6">
                    <div className="flex items-center justify-center">
                      <p className="font-medium text-gray-500 text-theme-xs dark:text-gray-400">
                        ردیف
                      </p>
                    </div>
                  </th>
                  <th className="px-5 py-3 sm:px-6">
                    <div className="flex items-center justify-center">
                      <p className="font-medium text-gray-500 text-theme-xs dark:text-gray-400">
                        نام محصول
                      </p>
                    </div>
                  </th>
                  <th className="px-5 py-3 sm:px-6">
                    <div className="flex items-center justify-center">
                      <p className="font-medium text-gray-500 text-theme-xs dark:text-gray-400">
                        قیمت محصول
                      </p>
                    </div>
                  </th>
                  <th className="px-5 py-3 sm:px-6">
                    <div className="flex items-center justify-center">
                      <p className="font-medium text-gray-500 text-theme-xs dark:text-gray-400">
                        توضیح
                      </p>
                    </div>
                  </th>
                  <th className="px-5 py-3 sm:px-6">
                    <div className="flex items-center justify-center">
                      <p className="font-medium text-gray-500 text-theme-xs dark:text-gray-400">
                        تنظیمات
                      </p>
                    </div>
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                {listProduct.map((item, index) => {
                  return (
                    <tr
                      className={
                        "odd:bg-gray-200 even:bg-gray-300 divide-x divide-gray-300"
                      }
                      key={index}
                    >
                      <td className="px-5 py-4 sm:px-6">
                        <div className="flex items-center justify-center">
                          {index + 1}
                        </div>
                      </td>
                      <td className="px-5 py-4 sm:px-6">
                        <div className="flex items-center justify-center">
                          <p className="">{item.name}</p>
                        </div>
                      </td>
                      <td className="px-5 py-4 sm:px-6">
                        <div className="flex items-center justify-center">
                          {item.price}
                        </div>
                      </td>
                      <td className="px-5 py-4 sm:px-6">
                        <div className="flex items-center justify-center">
                          {item.description}
                        </div>
                      </td>
                      <td className="px-5 py-4 sm:px-6">
                        <div className="flex items-center justify-center">
                          <button type={"button"} className={"button"} onClick={()=> handleDelete(item.id)}>
                            حدف
                          </button>
                          <button type={"button"} className={"button"} onClick={()=> handleEdit(item.id)}>
                            ویرایش
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {open && (
        <>
          <div
            className={
              "fixed inset-0 overflow-y-auto bg-black/50 flex items-center justify-center"
            }
          >
            <div
              className={
                "max-w-xl w-full rounded-sm bg-white shadow-md p-3 space-y-5"
              }
            >
              <div className={"grid grid-cols-1 gap-3 md:grid-cols-2"}>
                <div className={"space-y-1"}>
                  <label htmlFor="" className={"block"}>
                    نام محصول
                  </label>
                  <input
                    type="text"
                    className={"input"}
                    value={formData.name}
                    name={"name"}
                    onChange={handleValue}
                  />
                </div>
                <div className={"space-y-1"}>
                  <label htmlFor="" className={"block"}>
                    قیمت محصول
                  </label>
                  <input
                    type="text"
                    className={"input"}
                    value={formData.price}
                    name={"price"}
                    onChange={handleValue}
                  />
                </div>
                <div className={"space-y-1 md:col-span-2"}>
                  <label htmlFor="" className={"block"}>
                    توضیح
                  </label>
                  <input
                    type="text"
                    className={"input"}
                    value={formData.description}
                    name={"description"}
                    onChange={handleValue}
                  />
                </div>
              </div>
              <div className={"grid  gap-3 grid-cols-2"}>
                <button
                  type={"button"}
                  className={"button bg-green-700 text-white"}
                  onClick={handleAddProduct}
                >
                  add
                </button>
                <button
                  type={"button"}
                  className={"button bg-red-700 text-white"}
                  onClick={closeModal}
                >
                  close
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Table;
