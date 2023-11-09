import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import "../../../data/server";

const Vans = () => {
	const [vans, setVans] = useState([]);
	const [searchParams, setSearchParams] = useSearchParams();
	let typeFilter = searchParams.get("type");

	useEffect(() => {
		fetch("/api/vans")
			.then((res) => res.json())
			.then((data) => setVans(data.vans))
			.catch((error) => console.log("Error : " + error));
	}, []);

	const filteredVans = typeFilter ? vans.filter((van) => van.type === typeFilter) : vans;

	const handleFilterChange = (key, value) => {
		setSearchParams((prevParams) => {
			if (value === null) {
				prevParams.delete(key);
			} else {
				prevParams.set(key, value);
			}
			return prevParams;
		});
	};

	return (
		<div className="van-list-container">
			<h1>Explore Our Van Options</h1>
			<div className="van-list-filter-buttons">
				<button
					className={`van-type simple ${typeFilter === "simple" && "selected"}`}
					onClick={() => handleFilterChange("type", "simple")}
				>
					Simple
				</button>
				<button
					className={`van-type rugged ${typeFilter === "rugged" && "selected"}`}
					onClick={() => handleFilterChange("type", "rugged")}
				>
					Rugged
				</button>
				<button
					className={`van-type luxury ${typeFilter === "luxury" && "selected"}`}
					onClick={() => handleFilterChange("type", "luxury")}
				>
					Luxury
				</button>
				{typeFilter && (
					<button
						className="van-type clear-filters"
						onClick={() => handleFilterChange("type", null)}
					>
						Clear Filters
					</button>
				)}
			</div>
			<div className="van-list">
				{filteredVans.map((van) => (
					<div key={van.id} className="van-tile">
						<Link
							to={van.id}
							state={{ search: searchParams.toString(), type: typeFilter }}
						>
							<img src={van.imageUrl} />
							<div className="van-info">
								<h3>{van.name}</h3>
								<p>
									${van.price}
									<span>/day</span>
								</p>
							</div>
							<i className={`van-type ${van.type} selected`}>{van.type}</i>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};

export default Vans;
