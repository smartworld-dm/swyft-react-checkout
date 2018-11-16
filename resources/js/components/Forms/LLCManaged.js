import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class LLCManaged extends Component {
	constructor(props) {
        super(props);
        
        this.state = { 
            selectedOption: '',
            memberCnt: 1,
            memberNames: ['']
        };

        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.onAddMember = this.onAddMember.bind(this);
        this.onRemoveMember = this.onRemoveMember.bind(this);
    }

	handleOptionChange(changeEvent) {
		this.setState({ selectedOption: changeEvent.target.value });
	}

	onAddMember() {
		let { memberCnt, memberNames } = this.state;
		
		memberCnt++;
		memberNames.push('');
		this.setState({ memberCnt, memberNames });
	}

	onChangeMemberInput(i, e) {
		let { memberNames } = this.state;

		memberNames[i] = e.target.value;
		this.setState({ memberNames });
	}

	onRemoveMember(i) {
		let { memberNames, memberCnt } = this.state;

		memberCnt--;
		memberNames.splice(i, 1);
		this.setState({ memberCnt, memberNames });
	}

    render() {
    	const { onSaveAndContinue, onBack } = this.props;
    	const { selectedOption, memberCnt, memberNames } = this.state;
    	let memberInputs = [];

    	for (let i = 0; i < memberCnt; i++) {
			memberInputs.push(
				<div className="member-item" key={i}>
					<div className="label-item">
						<span className="label-text">Member <span className="member-num">#</span></span>
					</div>
					<div className="input-item">
						<label>Full Name</label>
						<input 
							type="text" 
							className="form-control" 
							value={memberNames[i]}
							onChange={(e) => this.onChangeMemberInput(i, e)}
						/>
						{
							(i > 0) &&
							<a className="remove" onClick={() => this.onRemoveMember(i)}>
								<i className="fa fa-times" aria-hidden="true"></i>
							</a>
						}
					</div>
				</div>
			);
		}

        return (
            <div className="checkout-content">
				<form action="#" className="checkout-form">
					<h2 className="h2-checkout">
						How will your LLC be managed?
						<i className="fa fa-question-circle popover-hover" data-container="body" data-toggle="popover" data-placement="bottom" data-content="How will your LLC be managed?" aria-hidden="true"></i>
					</h2>
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
							The LLC will be managed by <strong>member(s)</strong>
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
						<label className="form-check-label font-weight-normal mb-0" htmlFor="exampleRadios2">
							The LLC will be managed by <strong>manager(s)</strong>
						</label>
					</div>
					<h4 className="font-weight-light pt-2">Who are the Members (owners) of the business?</h4>
					<div className="row-group">
					{ memberInputs }
					</div>
					<div className="add-row">
						<a className="btn-add" onClick={() => this.onAddMember()}>
							<i className="fa fa-plus-circle" aria-hidden="true"></i>
							Add a Member
						</a>
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
