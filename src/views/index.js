import React, { useEffect, useState } from 'react';
import '../App.scss';
import Items from '../components/item';

function Index() {
	const [popularRepos, setPopularRepos] = useState([]);




	useEffect(() => {
    async function  fetchApi() {
			const data = await fetch(
				'https://api.github.com/search/repositories?q=created:%3E2017-10-22&sort=stars&order=desc'
			)
				.then((res) => res.json())
				.then((data) => data);

			setPopularRepos(data.items);
		};
    fetchApi();
  }, []);
  

  const handle = () => {
    console.log(popularRepos);
  }


	return (
		<div className='App' onClick={handle}>
			{popularRepos.map((repo) => (
				<Items key={repo.id} repo={repo}></Items>
			))}
		</div>
	);
}

export default Index;
