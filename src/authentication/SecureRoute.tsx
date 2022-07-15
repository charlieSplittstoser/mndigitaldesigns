import { FC } from 'react';
import { authentication } from './authentication';
import Login from '../pages/Login';

interface ISecureRouteProps {
    children: JSX.Element
    redirectTo?: string,
}

const SecureRoute = ({ children, redirectTo }: ISecureRouteProps) => {
    if (authentication.isLoggedIn()) {
        return children
    }

    return <Login redirectTo={redirectTo} />
};

export default SecureRoute;
