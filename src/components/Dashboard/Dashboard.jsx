import React from 'react';
import Homebanner from '../Homebanner/HomeBanner';
import DashboardCategory from '../DashboardCategory/DashboardCategory';
import './Dashboard.scss';
import withTranslator from "../../hoc/withTranslation";

const Dashboard = (props) => {
    return (
        <div>
            <Homebanner />
            <div className="arrival-header">
                <h3 className="arrival-heading">{props.strings.NewArrival}</h3>
            </div>
            <div id="firebaseui-auth-container" className="mobile-verification"></div>
            <DashboardCategory />
        </div>
    );
}

Dashboard.defaultProps = {
    strings: {
        NewArrival: "New Arrival"
    }
}

export default withTranslator('DashboardComponent')(Dashboard);;
