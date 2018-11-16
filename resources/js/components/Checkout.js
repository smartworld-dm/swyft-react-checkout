import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import CheckoutList from './CheckoutList';
import Aside from './Aside';

// Forms Component
import PrimaryContact from './Forms/PrimaryContact';
import NameAndActivityOfBiz from './Forms/NameAndActivityOfBiz';
import AddressOfBiz from './Forms/AddressOfBiz';
import LLCManaged from './Forms/LLCManaged';
import DirectorsOfCorp from './Forms/DirectorsOfCorp';
import RegisteredAgent from './Forms/RegisteredAgent';
import BizLicensesAndPermits from './Forms/BizLicensesAndPermits';
import ReduceTaxes from './Forms/ReduceTaxes';
import BizBanking from './Forms/BizBanking';
import PaymentOption from './Forms/PaymentOption';

const steps = [
    {
        title: 'Customize Package',
        description: 'Build your custom package'
    },
    {
        title: 'Contact Information',
        description: 'Primary contact for the business'
    },
    {
        title: 'Business Information',
        description: 'Basic details about your business'
    },
    {
        title: 'Compliance',
        description: 'Business and tax setup'
    },
    {
        title: 'Place Order',
        description: 'We incorporate your business'
    }
];

export default class Checkout extends Component {
    constructor(props) {
        super(props);
        
        this.state = { 
            currentStep: 1,
            currentForm: 8 
        };
    }

    onSaveAndContinue() {
        let { currentForm, currentStep } = this.state;
        currentForm++;

        if (currentForm === 0) {
            currentStep = 1;
        } else if (currentForm > 0 && currentForm < 5) {
            currentStep = 2;
        } else if (currentForm > 4 && currentForm < 9) {
            currentStep = 3;
        } else if (currentForm > 8) {
            currentStep = 4;
        }

        this.setState({ currentForm, currentStep });
    }

    onBack() {
        let { currentForm, currentStep } = this.state;
        currentForm--;

        if (currentForm === 0) {
            currentStep = 1;
        } else if (currentForm > 0 && currentForm < 5) {
            currentStep = 2;
        } else if (currentForm > 4 && currentForm < 9) {
            currentStep = 3;
        } else if (currentForm > 8) {
            currentStep = 4;
        }

        this.setState({ currentForm, currentStep });
    }

    render() {
        const { currentStep, currentForm } = this.state;
        return (
            <div className="container">
                <CheckoutList 
                    steps={steps}
                    currentStep={currentStep}
                />
                <div className="main-checkout-content d-flex justify-content-between flex-lg-row flex-column">
                    { 
                        currentForm === 0 &&
                        <PrimaryContact
                            onSaveAndContinue={() => this.onSaveAndContinue()}
                            onBack={() => this.onBack()}
                        />
                    }
                    { 
                        currentForm === 1 &&
                        <NameAndActivityOfBiz 
                            onSaveAndContinue={() => this.onSaveAndContinue()}
                            onBack={() => this.onBack()}
                        />
                    }
                    { 
                        currentForm === 2 &&
                        <AddressOfBiz
                            onSaveAndContinue={() => this.onSaveAndContinue()}
                            onBack={() => this.onBack()}
                        />
                    }
                    { 
                        currentForm === 3 &&
                        <LLCManaged
                            onSaveAndContinue={() => this.onSaveAndContinue()}
                            onBack={() => this.onBack()}
                        />
                    }
                    { 
                        currentForm === 4 &&
                        <DirectorsOfCorp
                            onSaveAndContinue={() => this.onSaveAndContinue()}
                            onBack={() => this.onBack()}
                        />
                    }
                    { 
                        currentForm === 5 &&
                        <RegisteredAgent
                            onSaveAndContinue={() => this.onSaveAndContinue()}
                            onBack={() => this.onBack()}
                        />
                    }
                    { 
                        currentForm === 6 &&
                        <BizLicensesAndPermits
                            onSaveAndContinue={() => this.onSaveAndContinue()}
                            onBack={() => this.onBack()}
                        />
                    }
                    { 
                        currentForm === 7 &&
                        <ReduceTaxes
                            onSaveAndContinue={() => this.onSaveAndContinue()}
                            onBack={() => this.onBack()}
                        />
                    }
                    { 
                        currentForm === 8 &&
                        <BizBanking
                            onSaveAndContinue={() => this.onSaveAndContinue()}
                            onBack={() => this.onBack()}
                        />
                    }
                    { 
                        currentForm === 9 &&
                        <PaymentOption
                            onSaveAndContinue={() => this.onSaveAndContinue()}
                            onBack={() => this.onBack()}
                        />
                    }
                    <Aside />
                </div>
            </div>
        );
    }
}

if (document.getElementById('checkout')) {
    ReactDOM.render(<Checkout />, document.getElementById('checkout'));
}
