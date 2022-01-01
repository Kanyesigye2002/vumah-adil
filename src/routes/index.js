import React, {Suspense, lazy} from 'react';
import { Navigate, useRoutes, useLocation, Route, Outlet } from 'react-router-dom';

import Guest from '../layouts/guests';
import AuthGuard from '../layouts/authGuard';
import Guard from '../layouts/authGuard/guard';
import LoadingScreen from '../components/LoadingScreen';


const Loadable = (Component) => (props) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return (
        <Suspense
            fallback={
                <LoadingScreen/>
            }
        >
            <Component {...props} />
        </Suspense>
    );
};

export default function Router() {
    return useRoutes([

        {
            path: '',
            element: <Guest/>,
            children: [
                {path: '', element: <Landing/>},
                {path: 'about-us', element: <AboutUs/>},
                {path: 'guest-account', element: <GuestAccount/>},
                {path: 'public-review', element: <PublicReview/>},
                {path: 'car-listing', element: <CarListing/>},
                {path: 'partnership', element: <Partnership/>},
                {path: 'career', element: <Career/>},
                {path: 'landing-page', element: <LandingPage/>},
                {path: 'support', element: <Support/>},
                {path: 'search', element: <Search/>},
                {path: 'old-search', element: <OldSearch/>},
                {path: 'guest-guide', element: <GuestGuide/>},
                {path: 'host-guide', element: <HostGuide/>},
                {path: 'account-management-guide', element: <AccountManagementGuide/>},
                {path: 'tos', element: <TOS/>},
                {path: 'privacy', element: <Privacy/>},
                {path: 'faq', element: <FAQ/>},
                {path: 'favorites', element: <Favorites/>},
                {path: 'covid', element: <Covid/>},
                {path: 'trust', element: <Trust/>},
                {path: 'blog-1', element: <Blog1/>},
                {path: 'blog-2', element: <Blog2/>},
                {path: 'account', element: <Account/>},
                {path: 'private-review', element: <PrivateReview/>},
                {path: 'request-booking', element: <RequestBooking/>},
                {path: 'confirmation', element: <Confirmation/>},
                {path: 'old-chat', element: <OldChat/>},
                {path: 'chat', element: <Outlet />,
                    children: [
                        { path: '', element: <Chat /> },
                        { path: 'new', element: <Chat /> },
                        { path: ':conversationKey', element: <Chat /> }
                    ]
                },
                {path: 'email-verification', element: <EmailVerification />},
                {path: 'email-verification/:token', element: <EmailVerification />},
                {path: 'verify-password-change/:token', element: <PasswordVerification />},
                {path: 'verify-phoneNumber-change/:token', element: <PhoneNumberVerification />},
                {path: 'forgot-password', element: <ForgotPassword />},
                {path: 'forgot-password/:token', element: <ForgotPassword />},
                {path: 'messages', element: <Messages/>},
                {path: 'earning', element: <Earning/>},
            ]
        }
    ])
}

const Chat = Loadable(lazy(() => import('../pages/newChat/Chat')));

const Home = Loadable(lazy(() => import('../pages/home')));

const EmailVerification = Loadable(lazy(() => import('../pages/Verification/EmailVerification')));
const PasswordVerification = Loadable(lazy(() => import('../pages/Verification/PasswordVerification')));
const PhoneNumberVerification = Loadable(lazy(() => import('../pages/Verification/PhoneNumberVerification')));
const ForgotPassword = Loadable(lazy(() => import('../pages/Verification/ForgotPassword')));

const Landing = Loadable(lazy(() => import('../pages/Landing')));
const Favorites = Loadable(lazy(() => import('../pages/Favorites')));
const AboutUs = Loadable(lazy(() => import('../pages/about')));
const Account = Loadable(lazy(() => import('../pages/account')));
const GuestAccount = Loadable(lazy(() => import('../pages/guestAccount')));
const PrivateReview = Loadable(lazy(() => import('../pages/privateReview')));
const PublicReview = Loadable(lazy(() => import('../pages/public-review')));
const CarListing = Loadable(lazy(() => import('../pages/car-listing')));
const RequestBooking = Loadable(lazy(() => import('../pages/request-booking')));
const Confirmation = Loadable(lazy(() => import('../pages/confirmation')));
const Partnership = Loadable(lazy(() => import('../pages/partnership')));
const Career = Loadable(lazy(() => import('../pages/career')));
const LandingPage = Loadable(lazy(() => import('../pages/landingpage')));
const Earning = Loadable(lazy(() => import('../pages/earning')));
const OldChat = Loadable(lazy(() => import('../pages/messages')));
const Messages = Loadable(lazy(() => import('../pages/messages')));
const Support = Loadable(lazy(() => import('../pages/support')));
const Search = Loadable(lazy(() => import('../pages/search')));
const OldSearch = Loadable(lazy(() => import('../pages/search/oldSearch')));
const GuestGuide = Loadable(lazy(() => import('../pages/blogs/guest')));
const HostGuide = Loadable(lazy(() => import('../pages/blogs/hosts')));
const AccountManagementGuide = Loadable(lazy(() => import('../pages/blogs/accountManagement')));
const TOS = Loadable(lazy(() => import('../pages/blogs/tos')));
const Trust = Loadable(lazy(() => import('../pages/blogs/trust')));
const Covid = Loadable(lazy(() => import('../pages/blogs/covid')));
const FAQ = Loadable(lazy(() => import('../pages/blogs/faq')));
const Privacy = Loadable(lazy(() => import('../pages/blogs/privacy')));
const Blog1 = Loadable(lazy(() => import('../pages/blogs/blog-1')));
const Blog2 = Loadable(lazy(() => import('../pages/blogs/blog-2')));
