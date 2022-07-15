import { authentication } from '../authentication/authentication';

const Home = () => (
    <>
        <h1>Home</h1>
        {authentication.isLoggedIn()
            ? `Welcome, ${authentication.getCurrentUser()}!`
            : 'Please login to view this message'}
    </>
);

export default Home;
