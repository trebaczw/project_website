import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";




export default function Person() {
	const { id } = useParams();
	console.log(id);

	const [data, setData] = useState({name:""});
	console.log(data);
	useEffect(() => {
		fetch(`https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/id/${id}.json`)
			.then((response) => response.json())
			.then((data) => setData(data))
			.catch((error) => console.error(error));
	}, []);
	return <div>{data?.name}</div>;
}
