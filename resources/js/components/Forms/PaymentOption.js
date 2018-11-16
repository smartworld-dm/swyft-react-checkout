import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class PaymentOption extends Component {
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
            <div className="checkout-content">
				<h2 className="h2-checkout">Please select your payment option</h2>
				<p>You have a couple of payment options to choose from. You may choose to pay in full now or you may choose to pay in installments.</p>
				<form action="#" className="checkout-form">
					<div className="payment-group d-flex text-center flex-md-row flex-column">
						<div className="payment-item blue-gradient">
							<h6 className="text-success">Full <br />Payment</h6>
							<span className="d-block">Pay the total amount <br />today</span>
							<div className="form-check">
								<span className={'jcf-radio' + (selectedOption === 'option1' ? ' jcf-checked' : '')}>
									<input 
										className="form-check-input" 
										type="radio" 
										name="exampleRadios" 
										id="exampleRadios2" 
										value="option1"
										checked={!selectedOption} 
										onChange={this.handleOptionChange}
									/>
									<span></span>
								</span>
								<label className="form-check-label font-weight-normal mb-0" htmlFor="exampleRadios2">
									$698.00
								</label>
							</div>
						</div>
						<div className="payment-item blue-gradient">
							<h6 className="text-blue">2 Installment <br />Payments</h6>
							<span className="d-block">Pay in 2 installment payments <i className="fa fa-question-circle popover-hover" data-container="body" data-toggle="popover" data-placement="bottom" data-content="Pay in 2 installment payments" aria-hidden="true"></i></span>
							<div className="form-check">
								<span className={'jcf-radio' + (selectedOption === 'option2' ? ' jcf-checked' : '')}>
									<input 
										className="form-check-input" 
										type="radio" 
										name="exampleRadios" 
										id="exampleRadios2" 
										value="option2"
										checked={!selectedOption} 
										onChange={this.handleOptionChange}
									/>
									<span></span>
								</span>
								<label className="form-check-label font-weight-normal mb-0" htmlFor="exampleRadios2">
									$349.00
								</label>
							</div>
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
