import React, {useState, useEffect} from 'react'
import { quotes } from './assets/quotes';
import { colors } from './assets/colors';
import QuoteCard from './components/QuoteCard';

import { mainStyles } from './AppStyle';

function App() {

  const styles = mainStyles();

  const [index, setIndex] = useState(0);

  const handleQuote = () => {
    let random = Math.floor(Math.random()*quotes.length)
    while (random === index) {
      random = Math.floor(Math.random()*quotes.length)
    }
    setIndex(random)
  };

  useEffect(() => {
      handleQuote();
  },[])
  
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
