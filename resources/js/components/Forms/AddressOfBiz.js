import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class AddressOfBiz extends Component {
    render() {
    	const { onSaveAndContinue, onBack } = this.props;
        return (
            <div className="checkout-content">
				<h2 className="h2-checkout">What is your business address?</h2>
				<p>Enter the physical address of your company including the suite number if applicable. The company address must be in the state of Texas and it cannot be a PO Box. If you run a home based business, you may enter your home address, however, we strongly recommend using a commercial address, not your residential address, as this information <strong>will be publicly available.</strong></p>
				<ul className="nav nav-pills tabs-checkout border-bottom" id="tabs" role="tablist">
					<li className="nav-item">
						<a className="nav-link active d-flex align-items-center" data-toggle="pill" href="#tab1" role="tab">
							<span className="circle">&nbsp;</span>
							<span className="tab-text">I will provide my own address</span>
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link d-flex align-items-center" data-toggle="pill" href="#tab2" role="tab">
							<span className="circle">&nbsp;</span>
							<span className="tab-text">I would like Swyft Filings to provide me with a business address</span>
						</a>
					</li>
				</ul>
				<div className="tab-content tab-content-checkout" id="pills-tabContent">
					<div className="tab-pane fade show active" id="tab1">
						<form action="#" className="checkout-form pl-lg-3 pl-0">
							<div className="form-group row">
								<div className="col-lg-6 mb-lg-0 mb-3">
									<label>Address</label>
									<input type="text" className="form-control" />
								</div>
								<div className="col-lg-6">
									<label>City</label>
									<input type="text" className="form-control" />
								</div>
							</div>
							<div className="form-group row">
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
								<div className="col-lg-6">
									<label>Zip Code</label>
									<input type="text" className="form-control" />
								</div>
							</div>
							<div className="row submit-row">
								<div className="col-lg-6 col-12 mb-lg-0 mb-3 pl-lg-0 pl-3">
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
					<div className="tab-pane fade" id="tab2">
						<form action="#" className="checkout-form">
							<div className="address-info">
								<div className="row mb-3">
									<div className="col-lg-8 col-md-8 mb-md-0 mb-3">
										<h4 className='mb-4'>Business Street Address: <a href="#" className="link d-md-inline d-block">(view address info)</a></h4>
										<h5 className="text-black font-open-sans font-weight-medium mb-4"><strong>5 reasons</strong> why you need a real street address:</h5>
										<ul className="item-list">
											<li>A physical address for your business.</li>
											<li>All mail is forwarded directly to the address of your choosing.</li>
											<li>Travel freely without ever missing a letter or package.</li>
											<li>Keeps your home address from becoming public record.</li>
											<li>A business address is more professional than a residential address.</li>
										</ul>
									</div>
									<div className="col-lg-4 col-md-4 mb-md-0 mb-2">
										<div className="order-block text-center">
											<h5 className="mb-1 font-weight-bold">1st month is free</h5>
											<p className="mb-4 font-weight-normal">Only $29/mo thereafter</p>
											<div className="btn-holder mb-4">
												<a href="#" className="btn btn-green rounded-0 text-white">
													<i className="fa fa-check" aria-hidden="true"></i>
													Added to order
												</a>
											</div>
											<span className="note  font-weight-normal">To proceed, simply click on the<br /> "Save and Continue" button below.</span>
										</div>
									</div>
								</div>
								<p>You will receive an email with additional steps required to complete your new address setup.</p>
								<div className="row submit-row">
									<div className="col-lg-6 col-12 mb-lg-0 mb-3">
										<span className="d-flex align-items-center align-content-center">
											<span className="ico mr-2">
												<img src="images/icon-secure.png" srcSet="images/icon-secure.png 2x" alt="image description" width="20" height="20" />
											</span>
											<span className="secure text-blue popover-hover font-weight-normal" data-container="body" data-toggle="popover" data-placement="bottom" data-content="Your information and data is safe with Swyft Filings. Our servers are located in secured data centers and our website uses SSL 256-bit AES encryption for all sensitive data. Our servers are also backed up daily ensuring your data is never lost or destroyed." aria-hidden="true">Your information is Safe and Secure.</span>
										</span>
									</div>
									<div className="col-lg-6 col-12 d-flex justify-content-between align-items-center pr-lg-1 pr-3">
										<div className="submit-group">
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
							</div>
						</form>
					</div>
				</div>
			</div>
        );
    }
}
