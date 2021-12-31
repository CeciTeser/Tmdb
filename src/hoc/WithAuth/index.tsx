import { FC } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Loading } from "../../components/Common/Loading";
import { useAuth } from "../../hooks/useAuth";
import { User } from "../../types";

const publicRoutes = ["/login", "/sign-up", "/contact"];


type withAuthenticationFn = (Component: FC) => FC;

const WithAuth: withAuthenticationFn = (Component) => {

    const Authenticated: FC = (): JSX.Element | null => {
        const { push, location } = useHistory();

        const { hasUserLoggedIn, currentUser } = useAuth();

        if (hasUserLoggedIn === undefined) return <Loading />;

        if (hasUserLoggedIn && publicRoutes.includes(location.pathname)) push(`/user:${currentUser?.idDB}`);

        if (hasUserLoggedIn === false && !publicRoutes.includes(location.pathname))
        push("/login");

        return <Component />;
    };

    return Authenticated;
};

export { WithAuth };