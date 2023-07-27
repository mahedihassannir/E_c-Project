import { useEffect } from "react";
import { useState } from "react";


const useIten = () => {


    const [Menue, SetMenue] = useState([]);

    const [loading, Setloding] = useState(true);

    useEffect(() => {


        fetch(`https://github.com/ProgrammingHero1/bistro-boss-restaurant-resources/blob/main/menu.json`)

            .then(res => res.json())

            .then(data => {
                SetMenue(data);
                Setloding(false);
            })


    }, [])
    return [Menue, loading]





};

export default useIten;