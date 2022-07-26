import axios from 'axios';
import { useEffect, useState } from 'react';


const baseURL = 'https://inspirobot.me/api?generate=true';

export function ErrorPage() {
	const [image, setImage] = useState('');

	useEffect(() => {
		axios.get(baseURL).then((response) => {
			setImage(response.data);
		});
	}, []);

	return (
		<div>
			<h1 style={{ textAlign: 'center'}}>Diese Seite existiert nicht, sorry</h1>
			<img src={image}></img>
		</div>
	);
}
