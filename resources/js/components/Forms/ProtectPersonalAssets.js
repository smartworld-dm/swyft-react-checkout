import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class ProtectPersonalAssets extends Component {
	constructor(props) {
        super(props);
        
        this.state = { 
            selectedOption: '',
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
            <div className="checkout-content blue-gradient px-lg-3 px-2 py-4">
				<h2 className="h2-checkout text-center">Minutes Manager - Protect Your Personal Assets</h2>
				<span className="title text-center mb-3">Manage Your Business Records Properly</span>
				<span className="img mb-3 d-block">
					<img src="images/section-divider.png" srcSet="images/section-divider.png 2x" alt="image description" width="740" height="5" />
				</span>
				<p>Keeping complete yearly up-to-date company records or "minutes" is critical for maintaining your company's limited liability protection, tax advantages, and other corporate benefits - and for corporations, it's the law.</p>
				<p>Many business owners find it difficult to keep up with this time-consuming requirement. We created Minutes Manager to make it quick and easy to produce professional corporate minutes online. Minutes Manager is an online service that makes it easy to create professionally formatted, state-compliant corporate minutes right through your Swyft Filings account.</p>
				<h5 className="h5-checkout mb-0">Not sure which company activities to record? We provide all the relevant questions. Simply fill in the answers and we'll create your minutes. It's that easy. You'll enjoy:</h5>
				<ul className="benefits-list second-list mb-4">
					<li><span>Unlimited corporate minutes for one whole year</span></li>
					<li><span>Professionally formatted minutes, emailed to you within 24 hours</span></li>
					<li><span>Fast and easy compliance with corporate requirements</span></li>
					<li><span>One membership is good for all of your incorporations</span></li>
				</ul>
				<form className="checkout-form">
					<h5 className="h5-checkout">Would you like to subscribe to the Minutes Manager?</h5>
					<div className="form-group">
						<div className="form-check d-flex">
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
							<label className="form-check-label" htmlFor="exampleRadios1">
								Yes, sign me up for Minutes Manger ($5/month) — <small className="font-italic">You may cancel at anytime</small>
							</label>
						</div>
						<div className="form-check d-flex">
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
							<label className="form-check-label" htmlFor="exampleRadios2">
								No thank you
							</label>
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
								<a href="#" className="btn-back" onClick={() => onBack()}>
									<i className="fa fa-chevron-left align-middle" aria-hidden="true"></i>
									Back
								</a>
							</div>
							<div className="submit-group">
								<a href="#" className="btn btn-orange" onClick={() => onSaveAndContinue()}>
									Save and Continue
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
