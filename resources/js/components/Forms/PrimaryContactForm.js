import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class PrimaryContactForm extends Component {
    render() {
    	const { onSaveAndContinue, onBack } = this.props;
        return (
          	<div className="checkout-content">
				<h2 className="h2-checkout">Who is the primary contact for the business?</h2>
				<p>This is the person we will contact with all status updates related to the order.</p>
				<form action="#" className="checkout-form pl-lg-3 pr-lg-4 pl-0 pr-0">
					<div className="form-group row">
						<div className="col-lg-6 mb-lg-0 mb-3">
							<label>First Name<span className="symbol">*</span></label>
							<input type="text" className="form-control" placeholder="Contact first name" />
						</div>
						<div className="col-lg-6">
							<label>Last Name<span className="symbol">*</span></label>
							<input type="text" className="form-control" placeholder="Contact last name" />
						</div>
					</div>
					<div className="form-group row">
						<div className="col-lg-6 mb-lg-0 mb-3">
							<label>Phone<span className="symbol">*</span></label>
							<input type="tel" className="form-control phone" placeholder="(xxx) xxx-xxxx" maxLength="15" />
						</div>
						<div className="col-lg-6">
							<label>Email<span className="symbol">*</span></label>
							<input type="email" className="form-control" placeholder="Contact email address" />
						</div>
					</div>
					<div className="row submit-row">
						<hr className="swyft-border" />
						<div className="col-lg-6 col-12 mb-lg-0 mb-3 pl-0">
							<span className="d-flex align-items-center align-content-center">
								<span className="ico mr-2">
									<img src="images/icon-secure.png" srcSet="images/icon-secure.png 2x" alt="image description" width="20" height="20" />
								</span>
								<span className="secure text-blue popover-hover font-weight-normal" data-container="body" data-toggle="popover" data-placement="bottom" data-content="Your information and data is safe with Swyft Filings. Our servers are located in secured data centers and our website uses SSL 256-bit AES encryption for all sensitive data. Our servers are also backed up daily ensuring your data is never lost or destroyed." aria-hidden="true">Your information is Safe and Secure.</span>
							</span>
						</div>
						<div className="col-lg-6 col-12 d-flex justify-content-lg-between justify-content-end align-items-center pr-lg-1 pr-3 pl-0">
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
        );
    }
}
