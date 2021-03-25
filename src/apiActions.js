// https://api.github.com/search/repositories?q=created:%3E2017-10-22&sort=stars&order=desc

// const pageNum = '1'

async function fetchData () {
    await fetch(
			'https://api.github.com/search/repositories?q=created:%3E2017-10-22&sort=stars&order=desc'
		).then(res => {
            return res
        });
}
export default fetchData;