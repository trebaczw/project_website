import React, { useState } from "react";
import "./App.css";
import Album from "./Components/Album";
import { PostDownloader } from "./Components/PostDownloader";

// type Data={
// 	name:strin
// }

function App() {
	const initialState = [{ name: "" }];
	const [data, setData] = React.useState(initialState);

	return (
		<div>
			<PostDownloader setData={setData} data={data} />
			<Album data={data} />
		</div>
	);
}

export default App;
