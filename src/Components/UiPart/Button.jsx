import {useEffect, useState} from "react";

const Button = (props) => {
    const [products, setProducts] = useState([
        {
            name: "product 1",
            date: "okdpok"
        },
        {
            name: "product 2",
            date: "okdpok3o-0eo"
        },
        {
            name: "product 3",
            date: "okdpok3o-0eokioiko"
        }
    ]);

    return <>
        <br/>
        <br/>
        hello this is a button
        <div className={"grid grid-cols-4 gap-10 my-10"}>
            {
                products.map((product) => {
                    return <>
                        <div className={"border p-4 bg-gray-100 rounded-2xl"}>
                            <h1 className={"text-4xl"}>{product.name}</h1>
                            <span>{product.date}</span>
                        </div>
                    </>
                })
            }
        </div>
    </>
}

export default Button