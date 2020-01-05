import React from 'react';
import './contact.scss';
import FormInput from '../../components/form-input/form-input.cmp';
import emailjs from 'emailjs-com';

class ContactPage extends React.Component {
	constructor() {
		super();
		this.state = {
			name: '',
			email: '',
			phone: '',
			message: ''
		};
	}

	sendEmail = (e) => {
		e.preventDefault();
		emailjs.sendForm('iliyan_tsachev_ilnweb_com', 'template_A6tGVBFX', e.target, 'user_yzFWSar3pajA0DntG0rT5').then(
			(result) => {
				console.log(result.text);
				this.setState({
					name: '',
					email: '',
					phone: '',
					message: ''
				});
			},
			(error) => {
				console.log(error.text);
			}
		);
	};

	handleChange = (e) => {
		const { value, name } = e.target;

		this.setState({ [name]: value });
	};

	render() {
		return (
      <div className="contact flex-c">
        <div className="contact-backround"></div>
        <h1 className="contact-title">GET IN TOUCH</h1>
				
        <form className="contact-form flex-c" onSubmit={this.sendEmail}>
          <legend><h2>Fill up the form and I will get back to you!</h2></legend>
					<FormInput
						name="name"
						type="text"
						label="Name"
						placeholder="Name"
						value={this.state.name}
						handleChange={this.handleChange}
						required
					/>
					<FormInput
						name="email"
						type="email"
						label="Email"
						placeholder="Email"
						value={this.state.email}
						handleChange={this.handleChange}
						required
					/>
					<FormInput
						name="phone"
						type="number"
						label="Phone number"
						placeholder="Phone number"
						value={this.state.phone}
						handleChange={this.handleChange}
						required
					/>
					<FormInput
						name="message"
						type="text"
						label="Message"
						placeholder="Message"
						value={this.state.message}
						handleChange={this.handleChange}
						textarea="true"
						required
					/>
					<input className="contact-button" type="submit" value="SEND" />
				</form>
			</div>
		);
	}
}

export default ContactPage;
