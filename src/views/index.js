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
	const [loading, setloading] = useState(true)
	const [popularRepos, setPopularRepos] = useState([]);
	const [pageNum, setpNum] = useState(+1);
	// fetch data
	async function fetchApi() {
		setloading(true);
		const date = new Date();
		date.setDate(date.getDate() - 1);
		const todayDate = formatDate(date.setDate(date.getDate()));

		await fetch(
			`https://api.github.com/search/repositories?q=created:%3E${todayDate}&sort=stars&order=desc&page=${pageNum}`
		)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				const moreRepos = data.items;
				// setPopularRepos(moreRepos);
				setPopularRepos([...popularRepos, ...moreRepos]);
				setloading(false);
			});
	}

	useEffect(() => {
		fetchApi()
	}, [pageNum]);

	const addMoreRepos = () => {
		setpNum(pageNum + 1);
	};

	return (
		<div className='container mt-5'>
			<h1 className='text-center mb-4'>last 30 days's most popluar repos</h1>
			{popularRepos.map((repo) => (
				<Items key={repo.id} repo={repo}></Items>
			))}
			<div className='d-flex justify-content-center flex-column m-auto' style={{
				maxHeight : 'fit-content',
				alignItems: 'center'
			}}
			>
				{loading ? 
					<div class='spinner-border text-primary mb-3' role='status'>
						<span class='visually-hidden'></span>
					</div>
				: false }
				<button className='btn btn-dark' onClick={() => addMoreRepos()}>
					More Repos
				</button>
			</div>
		</div>
	);
}

export default Index;
