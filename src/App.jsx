import React, {useState, useEffect} from 'react'
import { quotes } from './assets/quotes';
import { colors } from './assets/colors';
import QuoteCard from './components/QuoteCard';

// import './App.css';

import { mainStyles } from './AppStyle';

function App() {

  const styles = mainStyles();

  const [index, setIndex] = useState(0);
  useEffect(() => {
      setIndex(Math.floor(Math.random()*(quotes.length)));
  },[])
  
  const handleQuote = () => {
      setIndex(Math.floor(Math.random()*quotes.length));
      console.log(index);
  }

  return (
    <div style={{background: colors[index]}} className={styles.app}>
      <QuoteCard 
        author = {quotes[index].author}
        quote = {quotes[index].quote}
        color = {colors[index]}
        handleQuote = {handleQuote}
        />
    </div>
  );
}

export default App;
