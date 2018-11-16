import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class BizBanking extends Component {
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
				<h2 className="h2-checkout d-md-flex text-md-left text-center">
					Setting up Business Banking With
					<span className="img-holder d-block ml-2 text-center">
						<img src="images/bank-of-america.png" srcSet="images/bank-of-america.png 2x" alt="image description" width="204" height="25" />
					</span>
				</h2>
				<p>One of the primary benefits of incorporating is that it can help you protect your personal assets. Take this one step further by adding an additional layer of protection with a business bank account. Separating your personal and business finances is a smart business decision.</p>
				<span className="title mb-2">Dynamic Partnership, Great Benefits</span>
				<p>We teamed up with Bank of America to help you take advantage of perks they offer to entrepreneurs to help their small business grow. Swyft Filings clients have the opportunity to receive an offer from Bank of America to help establish your Small Business banking account. By expressing interest, you will receive additional information after completion of your order.</p>
				<span className="title mb-2 font-raleway">Plus, earn a bonus of up to $350* <a href="#" className="text-success">(view details)</a></span>
				<p>Let Bank of America help support you as your business grows. Earn up to a $350 bonus, plus get personalized service and valuable products for your business.</p>
				<ul className="benefits-list font-weight-normal mb-4">
					<li><span><span className="font-weight-semi">Earn $100</span> when you open a Bank of America small business checking account and make qualifying deposits of $1,000 or more within the first 60 days.</span></li>
					<li><span><span className="font-weight-semi">Earn an additional $50</span> when you also pay at least two bills through online bill pay in the first 60 days from opening your new Small Business checking account.</span></li>
					<li><span><span className="font-weight-semi">Earn a $200 statement credit</span> when you are approved for an eligible Bank of America Small Business credit card and make at least $500 in net purchases within the first 60 days of the credit card account.</span></li>
				</ul>
				<form action="#" className="checkout-form mb-6">
					<div className="form-group mb-5">
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
								Yes, please have a Bank of America Small Business Specialist contact me <span className="text-orange font-weight-semi">(Free)</span>
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
								No, not at this time
							</label>
						</div>
					</div>
					<div className="form-group">
						<span className="d-block form-note mb-2">By selecting "Yes", you consent to being contacted by Bank of America at the contact information you provided. You understand that you are not required to submit this information as a condition of purchasing any Bank of America product or services. By selecting Yes, you also consent to Swyft Filings sharing information related to your new business formation with Bank of America, including articles of formation and/or Employer Identification Number, which are required to open a new account.</span>
						<span className="d-block form-note">Bank of America, N.A. Member FDIC. &copy; 2018 Bank of America Corporation</span>
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
				<h2 className="h2-checkout">Frequently Asked Questions</h2>
				<div id="accordion" className="checkout-accordion">
					<div className="card border-card">
						<div className="card-header py-3" id="headingOne">
							<h5 className="mb-0">
								<button className="btn-link collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
									What documentation is required to open a small business checking account?
								</button>
							</h5>
						</div>
						<div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
							<div className="card-body">
								The most common documents required to open a new Small Business checking account include, but are not limited to, a Business Tax ID and legal business name. Additional documents include current and stamped/filed articles or certificates of organization.
							</div>
						</div>
					</div>
					<div className="card border-card">
						<div className="card-header py-3" id="headingTwo">
							<h5 className="mb-0">
								<button className="btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
									Can I open a small business account to the completion of my LLC or Corporation state filing?
								</button>
							</h5>
						</div>
						<div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
							<div className="card-body">
								After completing your order, you will receive a call from a Bank of America Small Business Specialist for a small business consultation. At that point you will discuss the required documentation needed to open an account once your documents are filed with the state.
							</div>
						</div>
					</div>
					<div className="card border-card">
						<div className="card-header py-3" id="headingThree">
							<h5 className="mb-0">
								<button className="btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
									Will I need to open a small business account by going to a local branch location?
								</button>
							</h5>
						</div>
						<div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
							<div className="card-body">
								No, you can open a small business checking account over the phone with a Bank of America Small Business Specialist. The bonus offer is only available by opening an account with a Small Business Specialist over the phone. Once we have your application and required supplemental documents, your account could be open and available for use within 24 hours.
							</div>
						</div>
					</div>
					<div className="card border-card">
						<div className="card-header py-3" id="headingFour">
							<h5 className="mb-0">
								<button className="btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
									When will I be contacted by a Small Business Specialist?
								</button>
							</h5>
						</div>
						<div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
							<div className="card-body">
								A Bank of America Small Business Specialist will contact you on the next business day, or if you prefer talking to a specialist today, you can reach us at 866.972.2960, Monday-Friday 8AM-10PM ET.
							</div>
						</div>
					</div>
				</div>
			</div>
        );
    }
}
