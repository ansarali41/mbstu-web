/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect } from 'react';
import { Divider, makeStyles } from '@material-ui/core';

// import './styles.css';
//---------------------------------------------------------------------
// Common helpers and constants imports
//---------------------------------------------------------------------
import { setClassNameInDefns } from '../../Helper/definitionHelper';
import MbstuBanner from '../../Helper/CommonComponents/MbstuBanner';
import facultyBanner from '../../Images/faculty-banner.jpeg';
//---------------------------------------------------------------------
// CSS
//---------------------------------------------------------------------
const useStyles = (params = {}) => {
    return makeStyles(theme => ({
        // root: { paddingTop: '120' },
        heading: { color: '#85A64E' },
        headingSecondary: { color: '#999943' },
        administrationDiv: {
            padding: '15px 0px',
        },
        link: { textDecoration: 'none', color: 'inherit' },
    }));
};

//---------------------------------------------------------------------
// Get definitions
//---------------------------------------------------------------------
const getDefns = params => {
    const { classes } = params;

    const defns = {
        administrationContainer: { container: true, justifyContent: 'center' },
        administrationItem: { item: 'true', xl: 11, lg: 11, md: 11, sm: 11, xm: 11 },
        // administrationItemLeft: { item: true, xl: 8, lg: 8, md: 7, sm: 7, xs: 11 },
        // administrationItemRight: { item: true, xl: 3, lg: 3, md: 3, sm: 3, xs: 11 },
    };

    // Automatically inject className for matching keys
    setClassNameInDefns(defns, classes);

    return defns;
};

const Faculties = () => {
    const classes = useStyles({})();
    const defns = getDefns({ classes });
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <MbstuBanner img_path={facultyBanner} />
            <div {...defns.root} style={{ padding: '30px 100px' }}>
                <h2 {...defns.headingSecondary}>Faculties</h2>
                <Divider />
                <p>
                    The academic departments of the university offer degree programs in different engineering and science disciplines under six faculties - the faculty of
                    Engineering, faculty of Life Science, faculty of Science, faculty of Business Studies, Faculty of Science, Faculty of Social Science and Faculty of Arts. All
                    the departments offer undergraduate degree programs. There are the following nineteen departments.
                </p>
                <br />
                <h5 {...defns.headingSecondary}>Faculty of Engineering</h5>
                <Divider />
                <ul>
                    <li>
                        <a {...defns.link} href="https://cse.mbstu.ac.bd/" target="_blank">
                            Computer Science and Engineering
                        </a>
                    </li>
                    <li>
                        <a {...defns.link} href="https://ict.mbstu.ac.bd/" target="_blank">
                            Information and Communication Technology
                        </a>
                    </li>
                    <li>
                        <a {...defns.link} href="https://te.mbstu.ac.bd/" target="_blank">
                            Textile Engineering
                        </a>
                    </li>
                    <li>
                        <a {...defns.link} href="https://mbstu.ac.bd/depts/me/index.html" target="_blank">
                            Mechanical Engineering
                        </a>
                    </li>
                </ul>
                <br />
                <h5 {...defns.headingSecondary}>Faculty of Life Science</h5>
                <Divider />
                <ul>
                    <li>
                        <a {...defns.link} href="https://esrm.mbstu.ac.bd/" target="_blank">
                            Environmental Science and Resource Management
                        </a>
                    </li>
                    <li>
                        <a {...defns.link} href="https://www.cps-mbstu.edu.bd/" target="_blank">
                            Criminology and Police Science
                        </a>
                    </li>
                    <li>
                        <a {...defns.link} href="https://mbstu.ac.bd/depts/ftns/index.html" target="_blank">
                            Food Technology and Nutritional Science
                        </a>
                    </li>
                    <li>
                        <a {...defns.link} href="https://bge.mbstu.ac.bd/" target="_blank">
                            Biotechnology and Genetic Engineering
                        </a>
                    </li>
                    <li>
                        <a {...defns.link} href="https://phar.mbstu.ac.bd/" target="_blank">
                            Pharmacy
                        </a>
                    </li>
                    <li>
                        <a {...defns.link} href="https://www.bmb.mbstu.ac.bd/" target="_blank">
                            Biochemistry and Molecular Biology
                        </a>
                    </li>
                </ul>
                <br />
                <h5 {...defns.headingSecondary}>Faculty of Business Studies</h5>
                <Divider />
                <ul>
                    <li>
                        <a {...defns.link} href="https://mbstu.ac.bd/depts/bba/index.html" target="_blank">
                            Business Administration
                        </a>
                    </li>
                    <li>
                        <a {...defns.link} href="https://mgt.mbstu.ac.bd/" target="_blank">
                            Management
                        </a>
                    </li>
                    <li>
                        <a {...defns.link} href="https://acct.mbstu.ac.bd/" target="_blank">
                            Accounting
                        </a>
                    </li>
                </ul>
                <br />
                <h5 {...defns.headingSecondary}>Faculty of Science</h5>
                <Divider />
                <ul>
                    <li>
                        <a {...defns.link} href="https://chem.mbstu.ac.bd/" target="_blank">
                            Chemistry
                        </a>
                    </li>
                    <li>
                        <a {...defns.link} href="https://mbstu.ac.bd/depts/math/index.html" target="_blank">
                            Mathematics
                        </a>
                    </li>
                    <li>
                        <a {...defns.link} href="https://phy.mbstu.ac.bd/" target="_blank">
                            Physics
                        </a>
                    </li>
                    <li>
                        <a {...defns.link} href="https://stat.mbstu.ac.bd/" target="_blank">
                            Statistics
                        </a>
                    </li>
                </ul>
                <br />
                <h5 {...defns.headingSecondary}>Faculty of Social Science</h5>
                <Divider />
                <ul>
                    <li>
                        <a {...defns.link} href="https://eco.mbstu.ac.bd/" target="_blank">
                            Economics
                        </a>
                    </li>
                </ul>
                <br />
                <h5 {...defns.headingSecondary}>Faculty of Arts</h5>
                <Divider />
                <ul>
                    <li>
                        <a {...defns.link} href="https://mbstu.ac.bd/depts/eng/index.html" target="_blank">
                            English
                        </a>
                    </li>
                </ul>
                <br /> <br />
                <h2 {...defns.headingSecondary}>Graduate Degree Programs</h2>
                <Divider />
                <br /> <br />
                <h5 {...defns.headingSecondary}>Faculty of Engineering</h5>
                <Divider />
                <ul>
                    <li>
                        <a {...defns.link} href="https://cse.mbstu.ac.bd/" target="_blank">
                            Computer Science and Engineering
                        </a>
                    </li>
                    <li>
                        <a {...defns.link} href="https://ict.mbstu.ac.bd/" target="_blank">
                            Information and Communication Technology
                        </a>
                    </li>
                    <li>
                        <a {...defns.link} href="https://te.mbstu.ac.bd/" target="_blank">
                            Textile Engineering
                        </a>
                    </li>
                </ul>
                <br />
                <h5 {...defns.headingSecondary}>Faculty of Life Science</h5>
                <Divider />
                <ul>
                    <li>
                        <a {...defns.link} href="https://esrm.mbstu.ac.bd/" target="_blank">
                            Environmental Science and Resource Management
                        </a>
                    </li>
                    <li>
                        <a {...defns.link} href="https://www.cps-mbstu.edu.bd/" target="_blank">
                            Criminology and Police Science
                        </a>
                    </li>
                    <li>
                        <a {...defns.link} href="https://mbstu.ac.bd/depts/ftns/index.html" target="_blank">
                            Food Technology and Nutritional Science
                        </a>
                    </li>
                    <li>
                        <a {...defns.link} href="https://bge.mbstu.ac.bd/" target="_blank">
                            Biotechnology and Genetic Engineering
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Faculties;
