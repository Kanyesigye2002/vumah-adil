import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
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
import Messages from './pages/messages';
import Support from './pages/support';
import Search from './pages/search';
import GuestGuide from './pages/blogs/guest';
import HostGuide from './pages/blogs/hosts';
import AccountManagementGuide from './pages/blogs/accountManagement';
import TOS from './pages/blogs/tos';
import Trust from './pages/blogs/trust';
import Covid from './pages/blogs/covid';
import FAQ from './pages/blogs/faq';
import Privacy from './pages/blogs/privacy';
import Blog1 from './pages/blogs/blog-1';
import Blog2 from './pages/blogs/blog-2';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const Routes = () => {
  return (
    <Router>
      <ScrollToTop />
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
        <Route exact path="/messages" component={Messages} />
        <Route exact path="/support" component={Support} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/guest-guide" component={GuestGuide} />
        <Route exact path="/host-guide" component={HostGuide} />
        <Route exact path="/account-management-guide" component={AccountManagementGuide} />

        <Route exact path="/tos" component={TOS} />
        <Route exact path="/privacy" component={Privacy} />
        <Route exact path="/faq" component={FAQ} />
        <Route exact path="/covid" component={Covid} />
        <Route exact path="/trust" component={Trust} />
        <Route exact path="/blog-1" component={Blog1} />
        <Route exact path="/blog-2" component={Blog2} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default Routes;