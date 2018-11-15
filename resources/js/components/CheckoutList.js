import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class CheckoutList extends Component {
    render() {
        const { steps, currentStep } = this.props;
        return (
            <ul className="checkout-list">
                {
                    steps.map((step, index) => {
                        return (
                            <li className={(currentStep === index ? "active" : "") + (currentStep === index + 1 ? "step-disabled" : "")} key={index}>
                                <a href="#" className="inner">
                                    <span className="title">{ step.title }</span>
                                    <span className="sub-title d-none d-md-block">{ step.description }</span>
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        );
    }
}
