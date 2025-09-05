import {useState} from "react";

const Counter =() =>{

    const [count, setCount] = useState(0)

    const pluse = () => {
        setCount(count +1)
        if (count===5){
            alert("هوی چه خبره")

        }
    }

    const minuse = () => {
        setCount(count -1)
        let masoud =count
        if (count===-5){
            alert("ول نمیکنی نه؟؟")

        }

    }

    return <>

        <div className={ "flex justify-between items-center h-10 p-10" + " " + (count > 0 ? "bg-green-400" : count < 0 ? "bg-red-400" : "bg-gray-300" ) } dir={"rtl"} >
            <div className={"flex flex-col items-center"}>
                <button type={"button"} className={"rounded-t-md active:scale-95 active:shadow-md text-white bg-green-900 cursor-pointer  w-10"} onClick={pluse}>
                    +
                </button>
                <button type={"button"} className={"rounded-b-md bg-red-900 active:scale-95 active:shadow-md  text-white cursor-pointer  w-10"} onClick={minuse}>
                    -
                </button>
            </div>
            <div>
                <span>{count}</span>
            </div>

        </div>
    </>
}
export default Counter