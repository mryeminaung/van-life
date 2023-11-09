import { useState, useEffect } from "react";
import { useParams, Link, useLocation } from "react-router-dom";

const VanDetail = () => {
	const { vanId } = useParams();
	const [van, setVan] = useState(null);
	const location = useLocation();

	const search = `?${location.state?.search}` || "";
	const type = location.state?.type || "all";

	useEffect(() => {
		fetch(`/api/vans/${vanId}`)
			.then((res) => res.json())
			.then((data) => setVan(data.vans));
	}, [vanId]);

	return (
		<>
			{/* return pre page with the type filter effect */}
			{van && (
				<Link to={`..${search}`} relative="path" className="back-button">
					&larr; Back to {type} vans
				</Link>
			)}
			<div className="van-detail-container">
				{van ? (
					<div className="van-detail">
						<img src={van.imageUrl} />
						<div>
							<i className={`van-type ${van.type} selected`}>{van.type}</i>
							<h2>{van.name}</h2>
							<p className="van-price">
								<span>${van.price}</span>/day
							</p>
							<p>{van.description}</p>
							<button className="link-button">Rent this van</button>
						</div>
					</div>
				) : (
					<h2>Loading...</h2>
				)}
			</div>
		</>
	);
};

export default VanDetail;
