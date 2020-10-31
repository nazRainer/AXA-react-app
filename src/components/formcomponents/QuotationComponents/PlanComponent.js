import React, { Component } from 'react';

class PlanComponent extends Component {
    render() {
        let backgroundColor;
        
        switch(this.props.index) {
            case 0:
                backgroundColor = '#F66F8D'
                break;
            case 1:
                backgroundColor = "#FFB643"
                break;
            case 2:
                backgroundColor = '#8DBD61'
                break;
            default:
                backgroundColor= '#F66F8D'
                break;
        }

        return (
            <div className={"individual-plan"} style={{'backgroundColor': backgroundColor}}>
                <div className={'plan-header'}>{`eMedic ${this.props.plan.name}`}</div>
                <div className={'plan-price'}>RM {this.props.basePriceMonthly}<span> per Month</span></div>
                <div className={'plan-annual-limit'}>
                    <span>{`RM ${this.props.plan["annual_limit"].toLocaleString()}`}</span> Annual
                    Limit
                </div>
                <div className={'plan-info'}>
                    <ul>
                        <li>
                            <span>
                                Cover for hospitalisation expenses{" "}
                                <strong>in Malaysia only,</strong> up to
                                RM20,000, including surgery, ambulance, ICU and
                                prescription drugs
                            </span>
                        </li>
                        <li>
                            Cashless admission to <a href="https://www.axa.com.my/hospital-panel-life" target="_blank">AXA panel hospitals</a>
                        </li>
                        <li>
                            Cover for room and board up to RM250 a day (choose any room type that is available within this budget)
                        </li>
                    </ul>
                </div>
                <div className={'choose-plan-btn'} style={{color: backgroundColor}}>Choose This Plan</div>
            </div>
        );
    }
}

export default PlanComponent;