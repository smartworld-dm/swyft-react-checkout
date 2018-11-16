import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class CompliancePackage extends Component {
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
				<h2 className="h2-checkout">Choose a Compliance Package</h2>
				<p className="mb-3">As a Texas business owner, you are <u className="font-italic font-weight-bold">required</u> by the state of Texas to file reports) for your business <u className="font-italic font-weight-bold">each year</u>. In Texas, these are known as your Annual Report forms. Forgetting to file just one of these reports or filing a report incorrectly can cost your business In several ways. For example. Texas charges a $250 penalty for missing the filing deadline and your company may be administratively dissolved (shut down by the state) if the business continues to miss filings.</p>
				<p>We offer a Compliance Package to help your company remain In good standing with the state:</p>
				<div className="package-holder text-center">
					<h4 className="font-weight-bold">Compliance Package</h4>
					<span className="price d-block font-lato font-weight-light">$99</span>
					<span className="text-fees d-block">+ state fees</span>
					<h5>Yearly Annual Report Filing</h5>
					<p className="mb-0 text-muted">We will create, prepare, and file your Annual Report on a yearly basis with the Texas Secretary of State. This will guarantee your business meets this <strong>state requirement</strong> in order to remain in good standing and to keep your business open and operational.</p>
				</div>
				<p>As a new business owner, you may not know what is required of you In order to stay compliant and remain in good standing with the state of Texas. Let us take the hassle out of keeping your business compliant. New corporations and LLCs often have additional filing needs after getting started. We've created this business Compliance Package to meet the needs of new business start ups, and to help maintain existing businesses with ongoing filing requirements.</p>
				<form action="#" className="checkout-form">
					<h5 className="h5-checkout">Would you like a Compliance Package for your business?</h5>
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
							<label className="form-check-label font-weight-normal mb-0" htmlFor="exampleRadios1">
								Compliance Package - The essentials to remain in good standing ($99 + State tee)
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
							<label className="form-check-label font-weight-normal mb-0" htmlFor="exampleRadios1">
								None - I will handle the Compliance work myself
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
