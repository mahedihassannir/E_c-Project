import { useEffect } from "react";
import { useState } from "react";


const useItem = () => {


    const [Menu, SetMenue] = useState([]);

    const [loading, Setloding] = useState(true);

    console.log({ Menu });



    useEffect(() => {


        fetch('data.json')

            .then(res => res.json())

            .then(data => {

                SetMenue(data);

                Setloding(false)

            })

    }, [])
    return [Menu, loading]





};

export default useItem;