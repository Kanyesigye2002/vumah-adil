import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import AboutUs from './pages/about';
import Account from './pages/account';
import GuestAccount from './pages/guestAccount';
import PrivateReview from './pages/privateReview';
import PublicReview from './pages/public-review';
import CarListing from './pages/car-listing';
import RequestBooking from './pages/request-booking';
import Confirmation from './pages/confirmation';
import Partnership from './pages/partnership';
import Career from './pages/career';
import LandingPage from './pages/landingpage';
import Header from './components/header';
import Footer from './components/footer';
import Earning from './pages/earning';
import Chat from './pages/chat';
import Support from './pages/support';
import Search from './pages/search';
import GuestGuide from './pages/blogs/guest';
import HostGuide from './pages/blogs/hosts';
import AccountManagementGuide from './pages/blogs/accountManagement';

const Routes = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about-us" component={AboutUs} />

        <Route exact path="/account" component={Account} />
        <Route exact path="/guest-account" component={GuestAccount} />
        <Route exact path="/private-review" component={PrivateReview} />
        <Route exact path="/public-review" component={PublicReview} />

        <Route exact path="/car-listing" component={CarListing} />
        <Route exact path="/request-booking" component={RequestBooking} />
        <Route exact path="/confirmation" component={Confirmation} />
        <Route exact path="/partnership" component={Partnership} />
        <Route exact path="/career" component={Career} />
        <Route exact path="/landing-page" component={LandingPage} />
        <Route exact path="/earning" component={Earning} />
        <Route exact path="/chat" component={Chat} />
        <Route exact path="/support" component={Support} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/guest-guide" component={GuestGuide} />
        <Route exact path="/host-guide" component={HostGuide} />
        <Route exact path="/account-management-guide" component={AccountManagementGuide} />
        
        <Route exact path="/tos" component={Confirmation} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default Routes;