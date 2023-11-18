import { useContext, useEffect, useState } from "react";
import { DentistContext } from "../../context/DentistContext";

const Card = () => {

    const { dataApi } = useContext(DentistContext);

    const [data, setData] = useState([])

    // const addFav = (nameDentist, userNameDentist, idDentist) => {
    //     // Lógica para agregar la Card en el localStorage
    //     const dentistExists = data.find((dentist) => dentist.id === idDentist);

    //     if (dentistExists) {
    //         dispatch({
    //             type: "FAVORITES",
    //             payload: data.filter((dentist) => dentist.id !== idDentist),
    //         });
    //     } else {
    //         dispatch({
    //             type: "FAVORITES",
    //             payload: [...data, { name: nameDentist, username: userNameDentist, id: idDentist }],
    //         });
    //     }
    // };

    // const update =
    //     data.length
    //         ? [...data, { name: name, username: username, id: id }]
    //         : [{ name: name, username: username, id: id }];

    useEffect(() => {
        setData([...dataApi])
    }, [])

    console.log(data);
    return (
        // <div className={theme === "light" ? "card" : "card-dark"}>
        //     <Link to={`detail/${id}`}>
        //         <img src='/images/doctor.jpg' alt={name} width='200px' style={{ display: 'flex' }} />
        //         <h5>👩🏻{name}</h5>
        //         <h6>⚕️{username}</h6>
        //     </Link>
        //     <button onClick={() => addFav(name, username, id)} className="favButton">🌟 Add fav</button>
        // </div>
        <>
            <h1>Desde card</h1>
            <div>
                {
                    data.map(data => {
                        return (
                            <div key={data.id + data.name}>
                                {data.name}
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
};

export default Card;