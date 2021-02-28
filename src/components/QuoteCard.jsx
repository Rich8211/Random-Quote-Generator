import React from 'react'
import { faTwitter, faTumblr } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Link, IconButton, Card, Typography } from '@material-ui/core';
import { cardStyles } from './QuoteCardStyle';

const QuoteCard = ({quote, author, color, handleQuote}) => {
    
    const styles = cardStyles();

    return (
        <Card className={styles.card}>
        <div style={{color: color}} className={styles.text}>
          <Typography className={styles.quote} >
            {quote}
          </Typography>
          <Typography className={styles.author}>
            -{author}
          </Typography >
        </div>
        <div className={styles.buttons}>
          <IconButton style={{backgroundColor: color}} className={styles.socialButton}>
            <FontAwesomeIcon icon={faTwitter} />
          </IconButton>
          <IconButton style={{backgroundColor: color}} className={styles.socialButton}>
            <FontAwesomeIcon icon={faTumblr} />
          </IconButton>
          <Button style={{backgroundColor: color}} onClick={handleQuote} className={styles.quoteButton}>
              <Typography>
                  New Quote
              </Typography>
          </Button>
        </div>
      </Card>
    )
}

export default QuoteCard;