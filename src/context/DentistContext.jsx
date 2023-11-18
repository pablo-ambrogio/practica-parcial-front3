import axios from "axios";
import { createContext, useEffect, useState } from "react";

// Se crea el contexto
export const DentistContext = createContext();

const DentistContextProvider = ({ children }) => {

    const [dataApi, setDataApi] = useState([])

    async function getData() {
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/users")
        setDataApi([...dataApi, data])
    }

    useEffect(() => {
        getData()
    }, [])

    const data = {
        dataApi,
    }

    return (
        <DentistContext.Provider
            value={data}
        >
            {children}
        </DentistContext.Provider>
    )
}

export default DentistContextProvider