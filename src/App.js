import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import History from './Components/History/History';
import Header from './Components/Home/Header/Header';
import Footer from './Components/Home/Footer/Footer';
import Notice from './Components/Notice/Notice';
import Banner from './Components/Home/Banner/Banner';
import Administration from './Components/Administration/Administration';
import CampusLife from './Components/CampusLife/CampusLife';
import ICTCell from './Components/ICTCell/ICTCell';

function App() {
    return (
        <Router>
            <Header />
            <Banner />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/history" element={<History />} />
                <Route path="/notice" element={<Notice />} />
                <Route path="/administration" element={<Administration />} />
                <Route path="/campus-life" element={<CampusLife />} />
                <Route path="/ict-cell" element={<ICTCell />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
