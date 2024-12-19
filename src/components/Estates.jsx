import { useEffect, useState } from "react";
import Estate from "./Estate";

const Estates = () => {
    const [estates, setEstates] = useState([]);
    useEffect(() => {
        fetch('Estates.json')
            .then(res => res.json())
            .then(data => setEstates(data));
    }, [])

    return (
        <div className="m-10">
            <h1 className="text-5xl text-purple-950 font-black text-center mt-20 mb-10">Estates</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {
                    estates.map(estate => <Estate key={estate.id} estate={estate}></Estate>)
                }
            </div>

        </div>
    );
};

export default Estates;