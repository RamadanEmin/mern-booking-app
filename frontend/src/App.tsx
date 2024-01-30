import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';
import { useAppContext } from './contexts/AppContext';
import Layout from './layouts/Layout';
import Register from './pages/Register';
import SignIn from './pages/SignIn';
import AddHotel from './pages/AddHotel';
import MyHotels from './pages/MyHotels';
import EditHotel from './pages/EditHotel';
import Search from './pages/Search';
import Detail from './pages/Detail';

const App = () => {
    const { isLoggedIn } = useAppContext();

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="search" element={<Search />} />
                    <Route path="detail/:hotelId" element={<Detail />} />
                    <Route path="register" element={<Register />} />
                    <Route path="sign-in" element={<SignIn />} />
                    {isLoggedIn && (
                        <>
                            <Route path="add-hotel" element={<AddHotel />} />
                            <Route path="edit-hotel/:hotelId" element={<EditHotel />} />
                            <Route path="my-hotels" element={<MyHotels />} />
                        </>
                    )}
                </Route>
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
};

export default App;