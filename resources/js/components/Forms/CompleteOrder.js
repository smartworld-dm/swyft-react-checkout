import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class CompleteOrder extends Component {
	constructor(props) {
        super(props);
        
        this.state = { 
            selectedOption: 'option1',
        };

        this.handleOptionChange = this.handleOptionChange.bind(this);
    }

    handleOptionChange(changeEvent) {
		this.setState({ selectedOption: changeEvent.target.value });
	}

    render() {
    	const { onSaveAndContinue, onBack } = this.props;
    	const { selectedOption } = this.state;
        return (
            <div className="checkout-content blue-gradient pl-0 pb-4">
				<form action="#" className="checkout-form pl-3 pr-3">
					<h2 className="h2-title mb-1">Complete your order for Swyft Filings</h2>
					<div className="checkout-holder">
						<p>Each order is backed by our <span className="quality text-success font-weight-semi">100% Money Back Guarantee</span></p>
					</div>
					<h5 className="h5-checkout mb-0">Shipping Address</h5>
					<p>This is where we will deliver your Texas LLC Package after your filing has been approved by the state.</p>
					<div className="form-group row pl-lg-3 pl-0 pr-lg-3 pr-0">
						<div className="col-lg-6 mb-lg-0 mb-3">
							<label>Address<span className="symbol">*</span></label>
							<input type="text" className="form-control" placeholder="Shipping address including suite # " />
						</div>
						<div className="col-lg-6">
							<label>City<span className="symbol">*</span></label>
							<input type="text" className="form-control" placeholder="City" />
						</div>
					</div>
					<div className="form-group row pl-lg-3 pl-0 pr-lg-3 pr-0">
						<div className="col-lg-6 mb-lg-0 mb-3">
							<label>State<span className="symbol">*</span></label>
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
						<div className="col-lg-6 mb-lg-0 mb-3">
							<label>Zip Code<span className="symbol">*</span></label>
							<input type="text" className="form-control" placeholder="Zip code" />
						</div>
					</div>
					<hr className="swyft-border border-lg" />
					<div className="payment-holder">
						<h5 className="h5-checkout mb-0">Payment Information</h5>
						<p>Please enter your payment information below to complete your order.</p>
						<div className="form-group d-flex flex-lg-row flex-column payment-group-check pl-lg-3 pl-0 pr-lg-3 pr-0">
							<div>
								<div className="form-check d-flex p-0 mb-lg-0 mb-3">
									<label className="form-check-label d-flex align-items-center justify-content-center rounded form-check-box mb-0" htmlFor="exampleRadios1">
										<span className={'jcf-radio' + (selectedOption === 'option1' ? ' jcf-checked' : '')}>
										<input 
											className="form-check-input" 
											type="radio" 
											name="exampleRadios" 
											id="exampleRadios1" 
											value="option1" 
											checked={selectedOption === 'option1'}
											onChange={this.handleOptionChange}
										/>
										<span></span>
									</span>
										Credit / Debit Card
									</label>
								</div>
							</div>
							<div>
								<div className="form-check d-flex p-0 mb-0">
									<label className="form-check-label d-flex align-items-center justify-content-center rounded form-check-box  mb-0" htmlFor="exampleRadios2">
										<span className={'jcf-radio' + (selectedOption === 'option2' ? ' jcf-checked' : '')}>
											<input 
												className="form-check-input" 
												type="radio" 
												name="exampleRadios" 
												id="exampleRadios2" 
												value="option2" 
												checked={selectedOption === 'option2'}
												onChange={this.handleOptionChange}
											/>
											<span></span>
										</span>
										<img src="images/paypal-logo.png" srcSet="images/paypal-logo.png 2x" alt="image description" width="89" height="22" />
									</label>
								</div>
							</div>
						</div>
						<div className="form-group row align-items-center pl-lg-3 pl-0 pr-lg-3 pr-0">
							<div className="col-lg-6">
								<label>Card Number<span className="symbol">*</span></label>
								<input className="form-control  payment-control number" placeholder="xxxx xxxx xxxx xxxx" maxLength="19" />
							</div>
							<div className="col-lg-6">
								<div className="mt-4">
									<img className="mx-xl-2 mx-1" src="images/visa.png" srcSet="images/visa.png 2x" alt="image description" width="32" height="10" />
									<img className="mx-xl-2 mx-1" src="images/discover-card.png" srcSet="images/discover-card.png 2x" alt="image description" width="32" height="20" />
									<img className="mx-xl-2 mx-1" src="images/american-express.png" srcSet="images/american-express.png 2x" alt="image description" width="32" height="16" />
									<img className="mx-xl-2 mx-1" src="images/master-card.png" srcSet="images/master-card.png 2x" alt="image description" width="32" height="26" />
									<i className="mx-xl-2 mx-1 pf pf-paypal align-middle"></i>
								</div>
							</div>
						</div>
						<div className="form-group row align-items-center pl-lg-3 pl-0 pr-lg-3 pr-0">
							<div className="col-lg-3 mb-lg-0 mb-3">
								<label>Expiration Date<span className="symbol">*</span></label>
								<input className="form-control payment-control datetime" placeholder="MM / YY" />
							</div>
							<div className="col-lg-3 mb-lg-0 mb-3">
								<label>CVC<span className="symbol">*</span><i className="fa fa-question-circle popover-hover ml-2" data-container="body" data-toggle="popover" data-placement="bottom" data-content="CVC" aria-hidden="true"></i></label>
								<input type="text" className="form-control payment-control" placeholder="123" maxLength="3" />
							</div>
							<div className="col-lg-6">
								<div className="d-flex align-items-center mt-md-4 mt-0 mb-lg-0 mb-3">
									<div className="image px-2">
										<img src="images/verisign-logo-black.png" srcSet="images/verisign-logo-black.png 2x" alt="image description" width="75" height="35" />
									</div>
									<div className="image px-2">
										<img src="images/norton-small.png" srcSet="images/norton-small.png 2x" alt="image description" width="75" height="41" />
									</div>
									<div className="image px-2">
										<img src="images/godaddy.png" srcSet="images/godaddy.png 2x" alt="image description" width="75" height="20" />
									</div>
								</div>
							</div>
						</div>
						<div className="form-group row pl-lg-3 pl-0">
							<div className="col-lg-3">
								<label>Billing Zip Code <span className="symbol">*</span></label>
								<input type="text" className="form-control payment-control zip-code" placeholder="5 digit zip code" maxLength="5" />
							</div>
						</div>
					</div>
					<div className="form-group text-md-right text-left mb-1">
						<p className="terms-text font-raleway mb-0">By clicking Submit Order. I agree to the <a href="#" className="font-weight-semi text-success">Terms of Service</a></p>
					</div>
					<div className="row submit-row px-3">
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
							<div className="submit-group pl-lg-4 pl-0 pr-lg-0 pr-4">
								<a href="#" className="btn-back" onClick={() => onBack()}>
									<i className="fa fa-chevron-left align-middle" aria-hidden="true"></i>
									Back
								</a>
							</div>
							<div className="submit-group pr-lg-4 pr-0">
								<a href="#" className="btn btn-orange" onClick={() => onSaveAndContinue()}>
									Submit Order
									<i className="fa fa-chevron-right" aria-hidden="true"></i>
								</a>
							</div>
						</div>
					</div>
				</form>
			</div>
        );
    }
}
