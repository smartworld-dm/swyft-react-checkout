import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class BizLicensesAndPermits extends Component {
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
            <div className="checkout-content">
				<h2 className="h2-checkout">Get your essential business licenses and permits</h2>
				<p>Many businesses need to obtain at least one license (sometimes several) before they can legally begin their normal daily operations. Let us take the hassle out of researching and finding the licenses and permits you need to operate your business.</p>
				<span className="title mb-2">Business Licenses and Permits Package <a href="#" className="text-orange">(view sample package)</a></span>
				<p className="mb-4">The Business Licenses and Permits Package tells you exactly which state, federal, and local government licenses, permits, and tax registrations that are required for your business. Your customized Business License Compliance Package will include:</p>
				<ul className="benefits-list font-weight-normal mb-4">
					<li><span>An overview of the licenses, permits, and tax registrations required for your business</span></li>
					<li><span>Licensing authority contact information, including name, address, telephone number, etc.</span></li>
					<li><span>The actual license, permit, and tax registration applications and associated documents</span></li>
				</ul>
				<form action="#" className="checkout-form">
					<h5 className="h5-checkout">Would you like to receive a Business Licenses and Permits Package for your business?</h5>
					<div className="form-group">
						<div className="form-check d-flex pt-3">
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
							<label className="form-check-label font-weight-normal mb-0" htmlFor="exampleRadios1">
								Yes, I would like a Business Licenses and Permits Package ($99)
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
									checked={!selectedOption} 
									onChange={this.handleOptionChange}
								/>
								<span></span>
							</span>
							<label className="form-check-label font-weight-normal mb-0" htmlFor="exampleRadios2">
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
