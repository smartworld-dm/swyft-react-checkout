import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class RegisteredAgent extends Component {
    render() {
    	const { onSaveAndContinue, onBack } = this.props;
        return (
            <div className="checkout-content">
				<h2 className="h2-checkout mb-3">Who will be the Registered Agent?</h2>
				<p>By law, all incorporated businesses must have a Registered Agent on file with the state. A Registered Agent is someone that you designate to receive official documents for your business such as service of process, state correspondence, and other tax and legal documents.</p>
				<h5 className="h5-checkout mb-0">The many benefits of using our Registered Agent service include:</h5>
				<ul className="benefits-list second-list mb-4">
					<li><span>Keeping your information private</span></li>
					<li><span>Securely storing all important mail for anytime online access</span></li>
					<li><span>Mail fowarding of all legal documents directly to you</span></li>
					<li><span>Keeping your business compliant with state requirements</span></li>
					<li><span>Reducing junk mail</span></li>
				</ul>
				<h5 className="h5-checkout">Who will serve as the registered agent for your Limited Liability Company?</h5>
				<ul className="nav nav-pills tabs-checkout border-0 p-0" id="tabs" role="tablist">
					<li className="nav-item">
						<a className="nav-link active d-flex align-items-center" data-toggle="pill" href="#tab1" role="tab">
							<span className="circle">&nbsp;</span>
							<span className="tab-text">I want Swyft Filings to provide my Registered Agent service</span>
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link d-flex align-items-center" data-toggle="pill" href="#tab2" role="tab">
							<span className="circle">&nbsp;</span>
							<span className="tab-text">I will appoint a different Registered Agent</span>
						</a>
					</li>
				</ul>
				<div className="tab-content tab-content-checkout" id="pills-tabContent">
					<div className="tab-pane fade show active" id="tab1">
						<form className="checkout-form">
							<p>By choosing Swyft Filings to provide your Registered Agent service, there will be no immediate charge. A charge of $149 will be processed after we have submitted your filing to the Secretary of State for approval. As long as your business is in operation, it is required to have a Registered Agent on file with the Secretary of State. We offer our service on a recurring annual basis to make sure your business is always in compliance with the law.</p>
							<div className="row submit-row">
								<hr className="swyft-border" />
								<div className="col-lg-6 col-12 mb-lg-0 mb-3">
									<span className="d-flex align-items-center align-content-center">
										<span className="ico mr-2">
											<img src="images/icon-secure.png" srcSet="images/icon-secure.png 2x" alt="image description" width="20" height="20" />
										</span>
										<span className="secure text-blue popover-hover font-weight-normal" data-container="body" data-toggle="popover" data-placement="bottom" data-content="Your information and data is safe with Swyft Filings. Our servers are located in secured data centers and our website uses SSL 256-bit AES encryption for all sensitive data. Our servers are also backed up daily ensuring your data is never lost or destroyed." aria-hidden="true">Your information is Safe and Secure.</span>
									</span>
								</div>
								<div className="col-lg-6 col-12 d-flex justify-content-lg-between justify-content-end align-items-center pr-lg-1 pr-3">
									<div className="submit-group pl-lg-2 pl-0 pr-lg-0 pr-4">
										<a className="btn-back" onClick={() => onBack()}>
											<i className="fa fa-chevron-left align-middle" aria-hidden="true"></i>
											Back
										</a>
									</div>
									<div className="submit-group">
										<a className="btn btn-orange" onClick={() => onSaveAndContinue()}>
											Save and Continue
											<i className="fa fa-chevron-right" aria-hidden="true"></i>
										</a>
									</div>
								</div>
							</div>
						</form>
					</div>
					<div className="tab-pane fade" id="tab2">
						<form action="#" className="checkout-form">
							<h4 className="color-navy font-weight-light mb-4">Who will be serving as your Registered Agent?</h4>
							<p className="mb-4">Enter the physical address of the person or company including the suite number if applicable who will be serving as your Registered Agent. <span className="text-danger">Please note: your new company cannot serve as its own Registered Agent.</span></p>
							<h5 className="font-weight-normal mb-4">Please make sure your Registered Agent meets the following requirements:</h5>
							<ul className="mb-4 ml-2">
								<li className="d-flex align-items-start">
									<i className="fa fa-check text-success mt-1 mr-2"></i>
									<span>The Registered Agent has a <span className="font-italic font-weight-bold">physical address</span> in the same state that you are forming your new business. P.O. Boxes are not allowed.</span>
								</li>
								<li className="d-flex align-items-start">
									<i className="fa fa-check text-success mt-1 mr-2"></i>
									<span>The Registered Agent is available to receive service of process on behalf of your company during business hours generally from 9am - 5pm Monday thru Friday.</span>
								</li>
							</ul>
							<div className="form-group row">
								<div className="col-lg-6 mb-lg-0 mb-3">
									<label>Name of Agent<i className="fa fa-question-circle popover-hover" data-container="body" data-toggle="popover" data-placement="bottom" data-content="Name of Agent" aria-hidden="true"></i></label>
									<input type="text" className="form-control" />
								</div>
								<div className="col-lg-6">
									<label>Address<i className="fa fa-question-circle popover-hover" data-container="body" data-toggle="popover" data-placement="bottom" data-content="Address" aria-hidden="true"></i></label>
									<input type="text" className="form-control" />
								</div>
							</div>
							<div className="form-group row">
								<div className="col-lg-6 mb-lg-0 mb-3">
									<label>City<i className="fa fa-question-circle popover-hover" data-container="body" data-toggle="popover" data-placement="bottom" data-content="City" aria-hidden="true"></i></label>
									<input type="text" className="form-control" />
								</div>
								<div className="col-lg-6 mb-lg-0 mb-3">
									<label>State</label>
									<select className="form-control">
										<option value="AL">Alabama</option>
										<option value="AK">Alaska</option>
										<option value="AZ">Arizona</option>
										<option value="AR">Arkansas</option>
										<option value="CA">California</option>
										<option value="CO">Colorado</option>
										<option value="CT">Connecticut</option>
										<option value="DE">Delaware</option>
										<option value="DC">District Of Columbia</option>
										<option value="FL">Florida</option>
										<option value="GA">Georgia</option>
										<option value="HI">Hawaii</option>
										<option value="ID">Idaho</option>
										<option value="IL">Illinois</option>
										<option value="IN">Indiana</option>
										<option value="IA">Iowa</option>
										<option value="KS">Kansas</option>
										<option value="KY">Kentucky</option>
										<option value="LA">Louisiana</option>
										<option value="ME">Maine</option>
										<option value="MD">Maryland</option>
										<option value="MA">Massachusetts</option>
										<option value="MI">Michigan</option>
										<option value="MN">Minnesota</option>
										<option value="MS">Mississippi</option>
										<option value="MO">Missouri</option>
										<option value="MT">Montana</option>
										<option value="NE">Nebraska</option>
										<option value="NV">Nevada</option>
										<option value="NH">New Hampshire</option>
										<option value="NJ">New Jersey</option>
										<option value="NM">New Mexico</option>
										<option value="NY">New York</option>
										<option value="NC">North Carolina</option>
										<option value="ND">North Dakota</option>
										<option value="OH">Ohio</option>
										<option value="OK">Oklahoma</option>
										<option value="OR">Oregon</option>
										<option value="PA">Pennsylvania</option>
										<option value="RI">Rhode Island</option>
										<option value="SC">South Carolina</option>
										<option value="SD">South Dakota</option>
										<option value="TN">Tennessee</option>
										<option value="TX">Texas</option>
										<option value="UT">Utah</option>
										<option value="VT">Vermont</option>
										<option value="VA">Virginia</option>
										<option value="WA">Washington</option>
										<option value="WV">West Virginia</option>
										<option value="WI">Wisconsin</option>
										<option value="WY">Wyoming</option>
									</select>
								</div>
							</div>
							<div className="form-group row">
								<div className="col-lg-6">
									<label>Zip Code</label>
									<input type="text" className="form-control" />
								</div>
							</div>
							<div className="row submit-row">
								<hr className="swyft-border" />
								<div className="col-lg-6 col-12 mb-lg-0 mb-3">
									<span className="d-flex align-items-center align-content-center">
										<span className="ico mr-2">
											<img src="images/icon-secure.png" srcSet="images/icon-secure.png 2x" alt="image description" width="20" height="20" />
										</span>
										<span className="secure text-blue popover-hover font-weight-normal" data-container="body" data-toggle="popover" data-placement="bottom" data-content="Your information and data is safe with Swyft Filings. Our servers are located in secured data centers and our website uses SSL 256-bit AES encryption for all sensitive data. Our servers are also backed up daily ensuring your data is never lost or destroyed." aria-hidden="true">Your information is Safe and Secure.</span>
									</span>
								</div>
								<div className="col-lg-6 col-12 d-flex justify-content-lg-between justify-content-end align-items-center pr-lg-1 pr-3">
									<div className="submit-group pl-lg-2 pl-0 pr-lg-0 pr-4">
										<a className="btn-back" onClick={() => onBack()}>
											<i className="fa fa-chevron-left align-middle" aria-hidden="true"></i>
											Back
										</a>
									</div>
									<div className="submit-group">
										<a className="btn btn-orange" onClick={() => onSaveAndContinue()}>
											Save and Continue
											<i className="fa fa-chevron-right" aria-hidden="true"></i>
										</a>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
        );
    }
}
