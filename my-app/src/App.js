import React from 'react';
import logo from './logo.svg';
import './styles/App.css';
import Main from './Components/QA/Main.jsx';
import Overview from './Components/1 - Overview/Overview.jsx'
import RelatedCompare from './Components/4 - RelatedComparison/RelatedComparison'
import RatingsReviews from './Components/RatingsReviews/RatingsReviews'

function App() {
  return (
    <div className="App">
      <Overview></Overview>
      <RelatedCompare></RelatedCompare>
      <Main></Main>
      <RatingsReviews productId={37311}></RatingsReviews>
    </div>
  );
}

export default App;
