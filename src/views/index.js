import React, { useEffect, useState } from 'react';
import '../App.scss';
import Items from '../components/item';

const formatDate = (date) => {
	var d = new Date(date),
		month = '' + (d.getMonth() + 1),
		day = '' + d.getDate(),
		year = d.getFullYear();

	if (month.length < 2) month = '0' + month;
	if (day.length < 2) day = '0' + day;

	return [year, month, day].join('-');
};
function Index() {
	const [popularRepos, setPopularRepos] = useState([]);

	useEffect(() => {
		// @ to-do  get days by today
		async function fetchApi() {
			const date = new Date();
			date.setDate(date.getDate() - 1);
			const todayDate = formatDate(date.setDate(date.getDate()));
			console.log(todayDate);
			const data = await fetch(
				`https://api.github.com/search/repositories?q=created:%3E${todayDate}&sort=stars&order=desc`
			)
				.then((res) => res.json())
				.then((data) => data);

			setPopularRepos(data.items);
		}
		fetchApi();
	}, []);

	return (
		<div className='container mt-5'>
			<h1 className='text-center mb-4'>last 30 days's most popluar repos</h1>
			{popularRepos.map((repo) => (
				<Items key={repo.id} repo={repo}></Items>
			))}
		</div>
	);
}

export default Index;
