import React from 'react';
import {Link} from 'react-router-dom';
import './Sidebar.css';
import Button from '@mui/material/Button';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';

const Sidebar = () => {

    return (
        <div className="bg-light side pt-5 ps-4">
            <Link to="/admin/add-news" style={{textDecoration: 'none'}}>
                <Button variant="outlined" startIcon={<NewspaperIcon/>}>
                    Add News
                </Button>
            </Link>
            <br/>
            <br/>
            <Link to="/admin/add-notice" style={{textDecoration: 'none'}}>
                <Button variant="outlined" startIcon={<NotificationAddIcon/>}>
                    Add Notice
                </Button>
            </Link>
        </div>
    );
};

export default Sidebar;
