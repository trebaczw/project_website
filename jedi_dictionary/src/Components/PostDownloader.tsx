import React, { useState, useEffect } from "react";

type postDowladerProps = {
	setData: React.Dispatch<
		React.SetStateAction<{ name: string; }[]>
	>;
	data: { name: string;}[];
};

export const PostDownloader = ({ data, setData }: postDowladerProps) => {
	useEffect(() => {
		fetch("https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/all.json")
			.then((response) => response.json())
			.then((data) => setData(data))
			.catch((error) => console.error(error));
	}, []);

	return null;
	// <div>{JSON.stringify(data)}</div>
};
