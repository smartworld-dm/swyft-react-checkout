import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class DirectorsOfCorp extends Component {
	constructor(props) {
		super(props);
        
        this.state = { 
            directorCnt: 1,
            directorNames: ['']
        };

        this.onAddDirector = this.onAddDirector.bind(this);
        this.onRemoveDirector = this.onRemoveDirector.bind(this);
    }

    onAddDirector() {
		let { directorCnt, directorNames } = this.state;
		
		directorCnt++;
		directorNames.push('');
		this.setState({ directorCnt, directorNames });
	}

	onChangeDirectorInput(i, e) {
		let { directorNames } = this.state;

		directorNames[i] = e.target.value;
		this.setState({ directorNames });
	}

	onRemoveDirector(i) {
		let { directorNames, directorCnt } = this.state;

		directorCnt--;
		directorNames.splice(i, 1);
		this.setState({ directorCnt, directorNames });
	}

    render() {
    	const { onSaveAndContinue, onBack } = this.props;
    	const { directorCnt, directorNames } = this.state;
    	let directorInputs = [];

    	for (let i = 0; i < directorCnt; i++) {
			directorInputs.push(
				<div className="member-item" key={i}>
					<div className="label-item">
						<span className="label-text">Director <span className="member-num">#</span></span>
					</div>
					<div className="input-item">
						<label>Full Name</label>
						<input 
							type="text" 
							className="form-control" 
							value={directorNames[i]}
							onChange={(e) => this.onChangeDirectorInput(i, e)}
						/>
						{
							(i > 0) &&
							<a className="remove" onClick={() => this.onRemoveDirector(i)}>
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
						Who are the Directors of the corporation?
						<i className="fa fa-question-circle popover-hover" data-container="body" data-toggle="popover" data-placement="bottom" data-content="Who are the Directors of the corporation?" aria-hidden="true"></i>
					</h2>
					<div className="director-row-group">
						{ directorInputs }
					</div>
					<div className="add-row">
						<a className="btn-add-second" onClick={() => this.onAddDirector()}>
							<i className="fa fa-plus-circle" aria-hidden="true"></i>
							Add a Director
						</a>
					</div>
					<span className="img">
						<img src="images/section-divider.png" srcSet="images/section-divider.png 2x" alt="image description" width="740" height="5" />
					</span>
					<h2 className="h2-checkout pt-4 mb-4">
						Who are the Officers of the corporation?
						<i className="fa fa-question-circle popover-hover" data-container="body" data-toggle="popover" data-placement="bottom" data-content="Who are the Officers of the corporation?" aria-hidden="true"></i>
					</h2>
					<div className="form-group d-flex align-items-center flex-md-row flex-column pl-lg-3 pl-0">
						<div className="label-item">
							<span className="label-text">
								President<span className="symbol red-symbol">*</span>
								<i className="fa fa-question-circle popover-hover" data-container="body" data-toggle="popover" data-placement="bottom" data-content="Who are the Officers of the corporation?" aria-hidden="true"></i>
							</span>
						</div>
						<div className="input-item">
							<label>Full Name</label>
							<input type="text" className="form-control" />
						</div>
					</div>
					<div className="form-group d-flex align-items-center flex-md-row flex-column pl-lg-3 pl-0">
						<div className="label-item">
							<span className="label-text">
								Treasurer<span className="symbol red-symbol">*</span>
								<i className="fa fa-question-circle popover-hover" data-container="body" data-toggle="popover" data-placement="bottom" data-content="Who are the Officers of the corporation?" aria-hidden="true"></i>
							</span>
						</div>
						<div className="input-item">
							<label>Full Name</label>
							<input type="text" className="form-control" />
						</div>
					</div>
					<div className="form-group d-flex align-items-center flex-md-row flex-column pl-lg-3 pl-0">
						<div className="label-item">
							<span className="label-text">
								Secretary<span className="symbol red-symbol">*</span>
								<i className="fa fa-question-circle popover-hover" data-container="body" data-toggle="popover" data-placement="bottom" data-content="Who are the Officers of the corporation?" aria-hidden="true"></i>
							</span>
						</div>
						<div className="input-item">
							<label>Full Name</label>
							<input type="text" className="form-control" />
						</div>
					</div>
					<div className="form-group d-flex align-items-center flex-md-row flex-column pl-lg-3 pl-0">
						<div className="label-item">
							<span className="label-text">
								Vice President
								<i className="fa fa-question-circle popover-hover" data-container="body" data-toggle="popover" data-placement="bottom" data-content="Who are the Officers of the corporation?" aria-hidden="true"></i>
							</span>
						</div>
						<div className="input-item">
							<label>Full Name (optional)</label>
							<input type="text" className="form-control" />
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
								<a className="btn btn-orange"  onClick={() => onSaveAndContinue()}>
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
