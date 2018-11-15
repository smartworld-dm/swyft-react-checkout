import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import CheckoutList from './CheckoutList';
import Aside from './Aside';
import PrimaryContactForm from './Forms/PrimaryContactForm';
import NameAndActivityOfBiz from './Forms/NameAndActivityOfBiz';
import AddressOfBiz from './Forms/AddressOfBiz';
import LLCManaged from './Forms/LLCManaged';

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
            currentForm: 3 
        };
    }

    onSaveAndContinue() {
        let { currentForm, currentStep } = this.state;
        currentForm++;

        if (currentForm === 0) {
            currentStep = 1;
        } else if (currentForm > 0 && currentForm < 10) {
            currentStep = 2;
        }

        this.setState({ currentForm, currentStep });
    }

    onBack() {
        let { currentForm, currentStep } = this.state;
        currentForm--;

        if (currentForm === 0) {
            currentStep = 1;
        } else if (currentForm > 0 && currentForm < 10) {
            currentStep = 2;
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
                        <PrimaryContactForm 
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
                    <Aside />
                </div>
            </div>
        );
    }
}

if (document.getElementById('checkout')) {
    ReactDOM.render(<Checkout />, document.getElementById('checkout'));
}
