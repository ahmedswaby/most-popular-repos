import React, { useEffect } from 'react';
import '../App.scss';
import Items from '../components/item';
import fetchData from '../apiActions'

function Index() {

  const fetch = async () => {
    await fetchData().then((data) => {
        console.log(data);
        return data;
      })
  }


  useEffect(fetch, []);
    


  return <div className='App'>
      <Items test="test"></Items>
    </div>;
}

export default Index;
