import {useEffect, useState} from "react";
import axios from "axios";

const ApiTemplate = () => {
    const [formData, setFormData] = useState([])

    const getData = () => {
        axios.get("https://fakestoreapi.com/products").then((response) => {
            setFormData(response.data);
        })
    }

    const updateData = (id) => {
        axios.put("https://fakestoreapi.com/products/" + id, {
            name: "okookok",
        })
    }

    useEffect(() => {
        getData()
        updateData(10)
    }, [])

    return <div className={"grid grid-cols-4 gap-10 p-4"}>
        {formData.map(item => (
            <div key={item.id} className={"border"}>
                {item.id}
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <p>{item.category}</p>
                <p className={"text-blue-900"}>{item.price}</p>
                <img src={item.image} alt="" className={"h-30 mx-auto"}/>
                <div className={"mt-2 flex gap-4 p-2"}>
                    <button className={"button"}>edit</button>
                    <button className={"button"}>delete</button>
                </div>
            </div>
        ))}
    </div>
}

export default ApiTemplate