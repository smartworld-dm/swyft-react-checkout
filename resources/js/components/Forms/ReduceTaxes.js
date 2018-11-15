import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class ReduceTaxes extends Component {
	constructor(props) {
        super(props);
        
        this.state = { 
            selectedOptionInGroup1: 'option1',
            selectedOptionInGroup2: 'option3',
            selectedOptionInGroup3: 'option5',
        };

        this.handleOptionInGroup1Change = this.handleOptionInGroup1Change.bind(this);
        this.handleOptionInGroup2Change = this.handleOptionInGroup2Change.bind(this);
        this.handleOptionInGroup3Change = this.handleOptionInGroup3Change.bind(this);
    }

    handleOptionInGroup1Change(changeEvent) {
		this.setState({ selectedOptionInGroup1: changeEvent.target.value });
	}

	handleOptionInGroup2Change(changeEvent) {
		this.setState({ selectedOptionInGroup2: changeEvent.target.value });
	}

	handleOptionInGroup3Change(changeEvent) {
		this.setState({ selectedOptionInGroup3: changeEvent.target.value });
	}

    render() {
    	const { onSaveAndContinue, onBack } = this.props;
    	const { selectedOptionInGroup1, selectedOptionInGroup2, selectedOptionInGroup3 } = this.state;
    	
        return (
            <div className="checkout-content">
				<h2 className="h2-checkout mb-3">Do you want a free consultation on reducing your taxes?</h2>
				<p>We have partnered with a national accounting firm to provide you a FREE 30 minute consultation. The consultation will be focused on reducing your business taxes and other vital information regarding your business tax requirements.</p>
				<h5 className="h5-checkout">During your free 30 minute tax consultation and webinar, you will learn:</h5>
				<ul className="benefits-list second-list mb-4">
					<li><span>How your business is taxed</span></li>
					<li><span>Commonly missed deductions</span></li>
					<li><span>How to pay yourself the correct way</span></li>
					<li><span>Using business bank accounts</span></li>
					<li><span>What to do when your business has a loss or profit</span></li>
					<li><span>How to stay in compliance with IRS tax requirements</span></li>
					<li><span>And much more</span></li>
				</ul>
				<form action="#" className="checkout-form">
					<div className="form-group mb-5">
						<div className="form-check d-flex pt-3">
							<span className={'jcf-radio' + (selectedOptionInGroup1 === 'option1' ? ' jcf-checked' : '')}>
								<input 
									className="form-check-input" 
									type="radio" 
									name="exampleRadios" 
									id="exampleRadios1" 
									value="option1" 
									checked={selectedOptionInGroup1 === 'option1'}
									onChange={this.handleOptionInGroup1Change}
								/>
								<span></span>
							</span>
							<label className="form-check-label font-weight-normal mb-0" htmlFor="exampleRadios1">
								Yes, I would like to learn about reducing my tax expenses <span className="text-orange font-weight-semi">(Free)</span>
							</label>
						</div>
						<div className="form-check d-flex">
							<span className={'jcf-radio' + (selectedOptionInGroup1 === 'option2' ? ' jcf-checked' : '')}>
								<input 
									className="form-check-input" 
									type="radio" 
									name="exampleRadios" 
									id="exampleRadios2" 
									value="option2"
									checked={selectedOptionInGroup1 === 'option2'} 
									onChange={this.handleOptionInGroup1Change}
								/>
								<span></span>
							</span>
							<label className="form-check-label font-weight-normal mb-0" htmlFor="exampleRadios2">
								No Thanks
							</label>
						</div>
					</div>
					<h2 className="h2-checkout">Do you want a free payroll consultation through ADP?</h2>
					<p>When setting up a new company, learning how to pay yourself and your employees is an important first step. That is why we have partnered with ADP to offer our customers a free payroll and compliance consultation. ADP is offering Swyft Filings customers 20% off their normal rate or three months free, your choice. This is an exclusive offer and cannot be found anywhere else.</p>
					<div className="form-group mb-5">
						<div className="form-check d-flex pt-3">
							<span className={'jcf-radio' + (selectedOptionInGroup2 === 'option3' ? ' jcf-checked' : '')}>
								<input 
									className="form-check-input" 
									type="radio" 
									name="exampleRadios" 
									id="exampleRadios3" 
									value="option3" 
									checked={selectedOptionInGroup2 === 'option3'}
									onChange={this.handleOptionInGroup2Change}
								/>
								<span></span>
							</span>
							<label className="form-check-label font-weight-normal mb-0" htmlFor="exampleRadios1">
								Yes, I would like the free ADP consultation <span className="text-orange font-weight-semi">(Free)</span>
							</label>
						</div>
						<div className="form-check d-flex">
							<span className={'jcf-radio' + (selectedOptionInGroup2 === 'option4' ? ' jcf-checked' : '')}>
								<input 
									className="form-check-input" 
									type="radio" 
									name="exampleRadios" 
									id="exampleRadios4" 
									value="option4"
									checked={selectedOptionInGroup2 === 'option4'} 
									onChange={this.handleOptionInGroup2Change}
								/>
								<span></span>
							</span>
							<label className="form-check-label font-weight-normal mb-0" htmlFor="exampleRadios2">
								No Thanks
							</label>
						</div>
					</div>
					<h2 className="h2-checkout">Additional Information</h2>
					<p>Are you a 100% veteran owned business?</p>
					<div className="form-group">
						<div className="form-check d-flex pt-3">
							<span className={'jcf-radio' + (selectedOptionInGroup3 === 'option5' ? ' jcf-checked' : '')}>
								<input 
									className="form-check-input" 
									type="radio" 
									name="exampleRadios" 
									id="exampleRadios5" 
									value="option5" 
									checked={selectedOptionInGroup3 === 'option5'}
									onChange={this.handleOptionInGroup3Change}
								/>
								<span></span>
							</span>
							<label className="form-check-label font-weight-normal mb-0" htmlFor="exampleRadios1">
								Yes
							</label>
						</div>
						<div className="form-check d-flex">
							<span className={'jcf-radio' + (selectedOptionInGroup3 === 'option6' ? ' jcf-checked' : '')}>
								<input 
									className="form-check-input" 
									type="radio" 
									name="exampleRadios" 
									id="exampleRadios6" 
									value="option6"
									checked={selectedOptionInGroup3 === 'option6'} 
									onChange={this.handleOptionInGroup3Change}
								/>
								<span></span>
							</span>
							<label className="form-check-label font-weight-normal mb-0" htmlFor="exampleRadios2">
								No
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
