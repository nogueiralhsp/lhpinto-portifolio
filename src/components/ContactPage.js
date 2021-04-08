import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
     button: {
          margin: theme.spacing(1),
     },
}));
function HomePage() {
     const classes = useStyles();
     return (
          <div className="contact-page-content">
               <p>If you would like leave your detail and I will get back to you</p>
               <form className="contact-form">
                    <input
                         placeholder="Name"
                         type="text"
                         name="name"
                    />
                    <input
                         placeholder="email"
                         type="text"
                         name="email"
                    />
                    <input
                         type="submit"
                         value="Submit"
                    />
               </form>
          </div>
     )
}

export default HomePage