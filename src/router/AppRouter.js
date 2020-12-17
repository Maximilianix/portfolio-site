import React, { useEffect, useState, Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import SideBar from '../components/layout/SideBar';
import AnimatedBox from '../components/animatedBox/AnimatedBox';
import Loader from '../components/loader/Loader';


const Resume = lazy(() => import('../components/routes/resume/Resume'));
const Contact = lazy(() => import('../components/routes/contact/Contact'));
const HomePage = lazy(() => import('../components/routes/home/HomePage'));
const Portfolio = lazy(() => import('../components/routes/portfolio/Portfolio'));


const AppRouter = () => {

    const [isLoading, setLoading] = useState(true);
    
    const isMobile = window.innerWidth <= 1200;

    useEffect(() => {
        setLoading(false);
    }, []);

    return (
          <div className="wrapper">
              {isLoading ? <Loader /> : (
                  <div className="container">
                      <SideBar />
                      <div className="mainContent">
                          <Header />
                          <div className="mainWrapper">
                            <Suspense fallback={<Loader />}>
                              <Switch>
                                  <Route exact path="/" component={HomePage} />
                                  <Route path="/resume" component={Resume} />
                                  <Route path="/portfolio" component={Portfolio} />
                                  <Route path="/contact" component={Contact} />
                              </Switch>
                            </Suspense>
                          </div>
                          <Footer />
                      </div>
                  </div>
              )}
              {!isMobile&& <AnimatedBox />}
          </div>
    );
};

export default AppRouter;