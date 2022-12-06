import React from 'react';
import AddNews from '../AddNew/AddNews';
import Sidebar from '../Sidebar/Sidebar';

export default function AdminDashboardNews() {
    const dashboardStyle = {
        paddingTop: 110
    }
    return (
        <div className="row container" style={dashboardStyle}>
            <div className="col-md-3">
                <Sidebar/>
            </div>
            <div className="col-md-8 ml-5 pl-5">
                <AddNews/>
            </div>
        </div>
    );
}
