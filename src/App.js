import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/history" element={<History />} />
                <Route path="/notice" element={<Notice />} />
                <Route path="/notice/:noticeId" element={<NoticeDetails />} />
                <Route path="/administration" element={<Administration />} />
                <Route path="/campus-life" element={<CampusLife />} />
                <Route path="/ict-cell" element={<ICTCell />} />
                <Route path="/faculties" element={<Faculties />} />
                <Route path="/library" element={<Library />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
