import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class NameAndActivityOfBiz extends Component {
    render() {
    	const { onSaveAndContinue, onBack } = this.props;
        return (
            <div className="checkout-content">
				<form action="#" className="checkout-form">
				<h2 className="h2-checkout">What is the name of your business?</h2>
				<p>The state of Texas requires the legal name of a company to be unique from other businesses who are registered with the state. The business name you provide will be researched by Swyft Filings to ensure that it is available for registration.</p>
					<div className="form-group row pl-lg-3 pl-0">
						<div className="col-lg-6 mb-lg-0 mb-3">
							<label>Preferred Business Name<span className="symbol">*</span>
								<i className="fa fa-question-circle popover-hover" data-container="body" data-toggle="popover" data-placement="bottom" data-content="Preferred Business Name" aria-hidden="true"></i>
							</label>
							<input type="text" className="form-control" placeholder="Acme, LLC" />
						</div>
						<div className="col-lg-6">
							<label>
								Select Your Designator
								<span className="symbol">*</span>
								<i className="fa fa-question-circle popover-hover" data-container="body" data-toggle="popover" data-placement="bottom" data-content="Select Your Designator" aria-hidden="true"></i>
							</label>
							<select className="form-control">
								<option>LLC</option>
								<option>LLC</option>
								<option>LLC</option>
								<option>LLC</option>
								<option>LLC</option>
								<option>LLC</option>
								<option>LLC</option>
								<option>LLC</option>
								<option>LLC</option>
							</select>
						</div>
					</div>
					<div className="form-group row pl-lg-3 pl-0">
						<div className="col-lg-6">
							<label>
								Alternate Business Name
								<i className="fa fa-question-circle popover-hover" data-container="body" data-toggle="popover" data-placement="bottom" data-content="Alternate Business Name" aria-hidden="true"></i>
							</label>
							<input type="text" className="form-control" placeholder="optional" />
						</div>
					</div>
					<span className="img d-block pt-3">
						<img src="images/section-divider.png" srcSet="images/section-divider.png 2x" alt="image description" width="740" height="5" />
					</span>
					<h2 className="h2-checkout pt-4">What will be your primary business activity?</h2>
					<p>Choose the category below that best describes your business, if the categories provided do not describe your business, please select "Other". Then enter your own description in the box provided. Your answers will help us personalize your state formation documents.</p>
					<div className="form-group row pl-lg-3 pl-0">
						<div className="col-lg-6">
							<label>Choose Your Business Category<span className="symbol">*</span></label>
							<select className="form-control">
								<option>Choose Your Business Category</option>
								<option>Choose Your Business Category</option>
								<option>Choose Your Business Category</option>
								<option>Choose Your Business Category</option>
								<option>Choose Your Business Category</option>
							</select>
						</div>
					</div>
					<div className="form-group row pl-lg-3 pl-0">
						<div className="col-lg-12">
							<label>
								Please describe your business activity
								<span className="symbol">*</span>
								<i className="fa fa-question-circle popover-hover" data-container="body" data-toggle="popover" data-placement="bottom" data-content="Please describe your business activity" aria-hidden="true"></i>
							</label>
							<textarea className="form-control" placeholder="Please enter a brief description of your business activity"></textarea>
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
								<a className="btn btn-orange" onClick={() => onSaveAndContinue()}>
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
