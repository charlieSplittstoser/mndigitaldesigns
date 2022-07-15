import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { blue, pink, lightGreen, green, grey } from '@mui/material/colors';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
import { Layout } from './layout/Layout';
import { Header } from './layout/Header';
import NotFound from './pages/NotFound';
import Tweets from './pages/Tweets';
import SecureRoute from './authentication/SecureRoute';

export const appTheme = createTheme({
    palette: {
        primary: green,
        secondary: green,
        background: {
            default: '#222222',
        },
    },
});

const App = () => (
    <ThemeProvider theme={appTheme}>
        <Layout header={<Header />}>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route
                    path='/tweets'
                    element={
                        <SecureRoute redirectTo='/tweets'>
                            <Tweets />
                        </SecureRoute>
                    }
                />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </Layout>
    </ThemeProvider>
);

export default App;
