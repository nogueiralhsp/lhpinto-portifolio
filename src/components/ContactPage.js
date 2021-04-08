import React from 'react'

class ContactPage extends React.Component {

     constructor(props) {
          super(props)
          this.state = {
               name: '',
               email: '',
               message: ''
          }
          this.handleNameChange = this.handleNameChange.bind(this);
          this.handleEmailChange = this.handleEmailChange.bind(this);
          this.handleMessageChange = this.handleMessageChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
     }
     handleNameChange(e) {
          this.setState({ name: e.target.value });
          console.log(this.state.name);
     }
     handleEmailChange(e) {
          this.setState({ email: e.target.value });
          console.log(this.state.email);
     }
     handleMessageChange(e) {
          this.setState({ message: e.target.value });
          console.log(this.state.message);
     }

     handleSubmit(e) {
          e.preventDefault();

          var myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");

          var raw = JSON.stringify({ ...this.state });

          var requestOptions = {
               method: 'GET',
               headers: myHeaders,
               body: raw,
               redirect: 'follow'
          };

          fetch("https://nogueiralhspcontactrequest.herokuapp.com/mail", requestOptions)
               .then(response => response.text())
               .then(result => console.log(result))
               .catch(error => console.log('error', error));
     }

     render() {
          return (
               <div className="contact-page-content">
                    <p>If you would like leave your detail and I will get back to you</p>
                    <form className="contact-form" onSubmit={this.handleSubmit}>
                         <input
                              placeholder="Name"
                              type="text"
                              name="name"
                              onChange={this.handleNameChange}
                         />
                         <input
                              placeholder="email"
                              type="text"
                              name="email"
                              onChange={this.handleEmailChange}
                         />
                         <textarea
                              name="message"
                              id=""
                              cols="30"
                              rows="10"
                              placeholder="message"
                              onChange={this.handleMessageChange}
                         />
                         <input
                              type="submit"
                              value="Submit"

                         />
                    </form>
               </div>
          )
     }
}

export default ContactPage