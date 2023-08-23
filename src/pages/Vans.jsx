import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../data/server";

const Vans = () => {
    const [vans, setVans] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        fetch("/api/vans")
            .then((res) => res.json())
            .then((data) => setVans(data.vans))
            .catch((error) => console.log("Error : " + error));
    }, []);

    return (
        <div className="van-list-container">
            <h1>Explore Our Van Options</h1>
            <div className="van-list">
                {vans.map((van) => (
                    <div key={van.id} className="van-tile">
                        <div onClick={() => navigate(`/vans/${van.id}`)}>
                            <img src={van.imageUrl} />
                            <div className="van-info">
                                <h3>{van.name}</h3>
                                <p>
                                    ${van.price}
                                    <span>/day</span>
                                </p>
                            </div>
                            <i className={`van-type ${van.type} selected`}>
                                {van.type}
                            </i>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Vans;
