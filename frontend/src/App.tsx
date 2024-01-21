import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';
import Layout from './layouts/Layout';
import Register from './pages/Register';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="register" element={<Register />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default App;
