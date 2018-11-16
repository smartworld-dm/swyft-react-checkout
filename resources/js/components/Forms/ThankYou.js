import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class ThankYou extends Component {
    render() {
        return (
            <div className="checkout-content blue-gradient px-lg-3 px-2 py-4">
				<h2 className="h2-title text-blue font-weight-bold">Thank you for your order David!</h2>
				<p>Each order is backed by our <span className="quality text-success font-weight-bold">100% Satisfaction Guarantee</span></p>
				<div className="order-wrap">
					<div className="d-flex align-items-center">
						<h4 className="font-open-sans text-orange font-weight-medium mb-0 mr-3">Order #798655</h4>
						<div className="btn-holder">
							<a href="#" className="btn btn-blue">Print</a>
						</div>
					</div>
					<p>A receipt for your payment has been emailed to <a href="mailto:david.costa@swyftfilings.com" className="font-weight-bold text-black">david.costa@swyftfilings.com</a>. We will begin processing your order in the timeframe you selected.</p>
					<h5 className="h5-checkout">Account Login</h5>
					<p>We have created you a Swyft Filings member account which will allow you to track your order status 24/7, access electronic copies of your order, among many other member added benefits. Please use the login information located below to access your account.</p>
					<p>Username: <strong>david.costa@swyftfilings.com</strong></p>
					<p>Password:</p>
					<div className="btn-holder">
						<a href="#" className="btn btn-orange rounded-0">Access my account</a>
					</div>
				</div>
			</div>
        );
    }
}
