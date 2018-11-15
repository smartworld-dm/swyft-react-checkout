import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Aside extends Component {
    render() {
        return (
            <aside className="sidebar-order">
                <div className="order-summary-wrap">
                    <h5 className="text-center">My Order Summary</h5>
                    <ul className="order-list">
                        <li className="order-item">
                            <ul className="item-list">
                                <li>
                                    <h5>
                                        Standard LLC Package
                                        <i className="fa fa-question-circle popover-hover" data-container="body" data-toggle="popover" data-placement="bottom" data-content="Standard LLC Package" aria-hidden="true"></i>
                                    </h5>
                                    <span className="price">$149</span>
                                </li>
                                <li>
                                    <h5>
                                        Texas State Filing Fee
                                        <i className="fa fa-question-circle popover-hover" data-container="body" data-toggle="popover" data-placement="bottom" data-content="Texas State Filing Fee" aria-hidden="true"></i>
                                    </h5>
                                    <span className="price">$300</span>
                                </li>
                            </ul>
                            <hr className="border-shadow" />
                        </li>
                        <li className="item">
                            <h5>Compliance Services</h5>
                            <ul className="item-list">
                                <li>
                                    <span className="title">Obum Federal Tox ID (EIN)</span>
                                    <span className="status">included</span>
                                </li>
                                <li>
                                    <span className="title">Banking Resolution</span>
                                    <span className="status">included</span>
                                </li>
                                <li>
                                    <span className="title">Custom Operating Agreement</span>
                                    <span className="status">included</span>
                                </li>
                                <li>
                                    <span className="title">Custom Organizational Minutes</span>
                                    <span className="status">included</span>
                                </li>
                            </ul>
                        </li>
                        <li className="item">
                            <h5>Expediting Option</h5>
                            <ul className="item-list">
                                <li>
                                    <span className="title">Standard Texas Processing</span>
                                    <span className="status"><span className="item-price">Free</span></span>
                                </li>
                            </ul>
                        </li>
                        <li className="item">
                            <h5>Shipping &amp; Handling</h5>
                            <ul className="item-list">
                                <li>
                                    <span className="title">1st className Shipping</span>
                                    <span className="status"><span className="item-price">Free</span></span>
                                </li>
                            </ul>
                        </li>
                        <li className="total-item">
                            <hr className="border-shadow" />
                            <div className="total-holder">
                                <span className="total">Your Total:</span>
                                <span className="total-price">$449.00</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="visual-guarantee mb-4">
                    <div className="visual">
                        <img src="images/img19.png" srcSet="images/img19.png 2x" alt="image description" width="330" height="55" />
                        <div className="visual-hover">
                            <img src="images/img20.png" srcSet="images/img20.png 2x" alt="image description" width="330" height="138" />
                            <a href="#" className="link">restrictions apply</a>
                        </div>
                    </div>
                </div>
                <div className="questions-block text-lg-left text-center">
                    <h4 className="font-weight-light">Have Questions? Call us.</h4>
                    <span><a href="tel:8777770450" className="tel text-success font-weight-bold mr-1">(877) 777 0450</a><small>M - F: 9am - 6pm CST | Se Habla Español</small></span>
                </div>
            </aside>
        );
    }
}
