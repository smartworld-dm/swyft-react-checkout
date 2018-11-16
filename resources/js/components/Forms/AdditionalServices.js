import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class AdditionalServices extends Component {
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
            <div className="checkout-content blue-gradient px-lg-3 px-3 py-4">
				<h2 className="h2-checkout text-center">Additional services for your business</h2>
				<h5 className="title text-center">Texas Seller's Permit (Sales Tax ID)</h5>
				<span className="img">
					<img src="images/section-divider.png" srcSet="images/section-divider.png 2x" alt="image description" width="740" height="5" />
				</span>
				<p className="pt-2">The primary purpose of a Seller's Permit is to allow your business to sell tangible goods in your state of operation. For example, if your business sells food, clothing, merchandise, or any other physical product, you are required to collect sales tax.</p>
				<form className="checkout-form">
					<h5 className="h5-checkout">Would you like us to help obtain a Seller's Permit for your business?</h5>
					<div className="form-group">
						<div className="form-check d-flex">
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
							<label className="form-check-label" htmlFor="exampleRadios1">
								Yes, please help me obtain a Texas Seller's Permit ($129)
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
							<label className="form-check-label" htmlFor="exampleRadios2">
								No thank you, my business does not need this
							</label>
						</div>
					</div>
					<h5 className="title text-center">Pro Business Legal Forms Package</h5>
					<span className="ico-line">&nbsp;</span>
					<p>Receive access to over 50+ attorney-drafted legal forms. All legal forms include simple, Slep-by-slep instructions to help you best utilize the forms for your needs. All forms are easily editable and imrnedulely dvdildble lor download lor die. Pro Business Legal Forms can help you run your business more efficiently and dfforddbly. Get immedidte access to our rich library of forms today</p>
					<p><a href="#" className="text-success">Click here</a> to view the 50+ documents included with Pro Business Legal Forms.</p>
					<h5 className="h5-checkout">Would you like us to help obtain a Seller's Permit for your business?</h5>
					<div className="form-group">
						<div className="form-check d-flex">
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
							<label className="form-check-label" htmlFor="exampleRadios2">
								Yes, I want Pro Business Legal Forms ($49) — <small className="font-italic">All documents will be included inside your online Swyft account</small>
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
							<label className="form-check-label" htmlFor="exampleRadios4">
								No thank you
							</label>
						</div>
					</div>
					<hr className="swyft-border border-lg" />
					<h2 className="h2-checkout text-center">Now Choose Your Tax Category</h2>
					<p className="text-center">Please select below how you would like for your LLC to be taxed by the IRS</p>
					<p>Now that your company is incorporated as an LLC, you will be required to pay self-employment taxes just like a Sole Proprietor. By default, the IRS treats LLC owners as Sole Proprietors. However, the IRS gives you the choice to elect to be taxed as an S Corp instead of a Sole Proprietor. This can save you thousands of dollars per year in taxes.</p>
					<p>By default, the IRS will tax your LLC as a Sole Proprietor. This means you will be paying approximately 15.3% in self-employment taxes each year. However, if you elect to have your LLC taxed as an actual S Corp, you can classNameify some of your income as <u>salary</u> and some as <u>distribution</u>. Depending on how you divide your income, you could save a substantial amount of self-employment taxes just by electing to be taxed as an S Corp. Here's an illustration:</p>
					<div className="tax-category-holder">
						<ul className="tax-category-table">
							<li>
								<div className="td col1 text-center">IRS Tax Category</div>
								<div className="td col2">&nbsp;</div>
								<div className="td col3">Taxes Paid</div>
							</li>
							<li>
								<div className="td col1 text-center"><span className="rate">LLC</span></div>
								<div className="td col2"><span className="info">Self Employment Taxes paid on $100,000 as an LLC (Sole Proprietor)</span></div>
								<div className="td col3"><span className="price">$14,581.00</span></div>
							</li>
							<li>
								<div className="td col1 text-center"><span className="rate">S Corp</span></div>
								<div className="td col2"><span className="info">Self Employment Taxes paid on $100,000 with a salary of $50,000 and a dividend of $50,000</span></div>
								<div className="td col3"><span className="price">$14,581.00</span></div>
							</li>
							<li className="border-0">
								<div className="td col4"><h5>Yearly Savings when taxed as an S Corp</h5></div>
								<div className="td col3"><span className="price total">$6,931.00</span></div>
							</li>
						</ul>
					</div>
					<h5 className="h5-checkout">
						Would you like Swyft Filings to prepare the paperwork required in order for your business tobe taxed as an S Corp?
						<i className="fa fa-question-circle popover-hover" data-container="body" data-toggle="popover" data-placement="bottom" data-content="Would you like Swyft Filings to prepare the paperwork required in order for your business tobe taxed as an S Corp?" aria-hidden="true"></i>
						<a href="#" className="link text-blue"><u>How did most customers answer this question?</u></a>
					</h5>
					<div className="form-group">
						<div className="form-check d-flex">
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
							<label className="form-check-label" htmlFor="exampleRadios5">
								Yes, I want to be taxed as an S Corp ($99)
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
							<label className="form-check-label" htmlFor="exampleRadios6">
								No, I would like to be taxed as a Sole Proprietor
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
