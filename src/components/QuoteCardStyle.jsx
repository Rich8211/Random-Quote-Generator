import { makeStyles } from '@material-ui/core';

export const cardStyles = makeStyles({
    card: {
        margin: 'auto',
        maxWidth: '35%',
        maxHeight: '50%'

    },

    text: {
        textAlign:'center',
        paddingBottom: '24px'
    },
    quote: {
        padding:'12px',
        // textAlign: 'center',
    
    },

    author: {
        textAlign: 'right',
        paddingRight: '12px'
    },

    buttons: {
        display: 'flex',
        flexDirection: 'row',
        padding: '24px'
    },

    socialButton: {
        fontSize: '85%',
        borderRadius: '5px',
        color: '#fff',
        height: '35px',
        weight: '35px',
        margin: '0 6px'
    },

    quoteButton: {
        borderRadius: '5px',
        color: '#fff',
        marginLeft:'58.5%',
        textTransform: 'none'
    }
})