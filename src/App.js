import './App.css';
import Home from './Components/Home/Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import History from './Components/History/History';
import Header from './Components/Home/Header/Header';
import Footer from './Components/Footer/Footer';
import Notice from './Components/Notice/Notice';
import Administration from './Components/Administration/Administration';
import CampusLife from './Components/CampusLife/CampusLife';
import ICTCell from './Components/ICTCell/ICTCell';
import Faculties from './Components/Faculties/Faculties';
import Library from './Components/Library/Library';
import NoticeDetails from './Components/Notice/NoticeDetails';
import News from './Components/News/News';
import AdminDashboardNews from "./Components/Dashboard/Admin/AdminDashboardNews/AdminDashboardNews";
import AdminAddNotice from "./Components/Dashboard/Admin/AdminNotice/AdminAddNotice";
import Register from "./Components/Dashboard/Login/Login/Register";
import Login from "./Components/Dashboard/Login/Login/Login";
import {createContext, useState} from "react";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {

    const [user, setUser] = useState({
        name: '',
        email: '',
    })
    const [isSignedIn, setIsSignedIn] = useState(true)
    const signin = () => {
        setIsSignedIn(true)
    }
    const signout = () => {
        setIsSignedIn(false)
    }
    return (
        <UserContext.Provider value={[user, setUser]}>
            <Router>
                <Header/>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/history" element={<History/>}/>
                    <Route path="/notice" element={<Notice/>}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/notice/:noticeId" element={<NoticeDetails/>}/>
                    <Route path="/administration" element={<Administration/>}/>
                    <Route path="/campus-life" element={<CampusLife/>}/>
                    <Route path="/ict-cell" element={<ICTCell/>}/>
                    <Route path="/faculties" element={<Faculties/>}/>
                    <Route path="/library" element={<Library/>}/>
                    <Route path="/admin/add-news" element={<AdminDashboardNews/>}/>
                    <Route path="/admin/add-notice" element={<AdminAddNotice/>}/>
                    <Route path="/admin/login" element={<Login/>}/>
                    <Route path="/admin/register" element={<Register/>}/>

                    {/*<Route*/}
                    {/*    path="/admin/add-news"*/}
                    {/*    element={*/}
                    {/*        <PrivateRoute isSignedIn={isSignedIn}>*/}
                    {/*            <AdminDashboardNews/>*/}
                    {/*        </PrivateRoute>*/}
                    {/*    }*/}
                    {/*/>*/}
                    {/*<Route*/}
                    {/*    path="/admin/add-notice"*/}
                    {/*    element={*/}
                    {/*        <PrivateRoute isSignedIn={isSignedIn}>*/}
                    {/*            <AdminAddNotice/>*/}
                    {/*        </PrivateRoute>*/}
                    {/*    }*/}
                    {/*/>*/}
                </Routes>
                <Footer/>
            </Router>
        </UserContext.Provider>
    );
}

export default App;
