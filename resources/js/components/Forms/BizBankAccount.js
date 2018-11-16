import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class BizBankAccount extends Component {
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
				<h2 className="h2-checkout text-center">Opening Your Business Bank Account</h2>
				<p className="text-center">Please select if you would like a State Certified Copy of your Articles from the state of Texas for your company to open a bank account.</p>
				<h5 className="title text-center text-default">Your Bank May Require a State Certified Copy</h5>
				<span className="img d-block mb-4">
					<img src="images/section-divider.png" srcSet="images/section-divider.png 2x" alt="image description" width="740" height="5" />
				</span>
				<p>If you are planning on opening a business bank account for your new LLC you will often need to present a State Certified Copy of your Articles to the bank. Banks often require a State Certified Copy because this proves your business actually exists in the state of Texas, without this document, you may not be able to open your business account.</p>
				<p>Also, State Certified Copies may be requested by: state governments, if you've applied for foreign qualification In those states; lenders, when you're trying to obtain financing; banks, m order to open a business checking account; and potential business partners or investors.</p>
				<form className="checkout-form">
					<h5 className="h5-checkout">
						Would you like Swyft Filings to obtain a State Certified Copy of your Articles for your LLC?
						<br />
						<i className="fa fa-question-circle popover-hover" data-container="body" data-toggle="popover" data-placement="bottom" data-content="Would you like Swyft Filings to prepare the paperwork required in order for your business tobe taxed as an S Corp?" aria-hidden="true"></i>
						<a href="#" className="link text-blue"><u>How did most customers answer this question?</u></a>
					</h5>
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
								Yes, I would like a State Certified Copy ( $65 + $15 Texas State Fee)
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
