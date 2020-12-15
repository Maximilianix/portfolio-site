import React, { useEffect, useState, Suspense, lazy } from 'react';
import { Route } from 'react-router-dom';
import { AnimatedSwitch, spring  } from 'react-router-transition';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import SideBar from '../components/layout/SideBar';
import AnimatedBox from '../components/animatedBox/AnimatedBox';
import Loader from '../components/loader/Loader';


const Resume = lazy(() => import('../components/routes/resume/Resume'));
const Contact = lazy(() => import('../components/routes/contact/Contact'));
const HomePage = lazy(() => import('../components/routes/home/HomePage'));
const Portfolio = lazy(() => import('../components/routes/portfolio/Portfolio'));
const NotFoundPage = lazy(() => import('../components/routes/404/NotFoundPage'));


const AppRouter = () => {

    const [isLoading, setLoading] = useState(true);
    
    const isMobile = window.innerWidth <= 1200;

    useEffect(() => {
        setLoading(false);
    }, []);

    function mapStyles(styles) {
      return {
        opacity: styles.opacity,
        transform: `scale(${styles.scale})`,
      };
    }

    // wrap the `spring` helper to use a bouncy config
    function bounce(val) {
      return spring(val, {
        stiffness: 330,
        damping: 22,
      });
    }
    // child matches will...
    const bounceTransition = {
      // start in a transparent, upscaled state
      atEnter: {
        opacity: 0,
        scale: 1.2,
      },
      // leave in a transparent, downscaled state
      atLeave: {
        opacity: bounce(0),
        scale: bounce(1),
      },
      // and rest at an opaque, normally-scaled state
      atActive: {
        opacity: bounce(1),
        scale: bounce(1),
      },
    };

    return (
          <div className="wrapper">
              {isLoading ? <Loader /> : (
                  <div className="container">
                      <SideBar />
                      <div className="mainContent">
                          <Header />
                          <div className="mainWrapper">
                            <Suspense fallback={<Loader />}>
                              <AnimatedSwitch
                                  atEnter={bounceTransition.atEnter}
                                  atLeave={bounceTransition.atLeave}
                                  atActive={bounceTransition.atActive}
                                  mapStyles={mapStyles}
                                  >
                                  <Route exact path="/" component={HomePage} />
                                  <Route path="/resume" component={Resume} />
                                  <Route path="/portfolio" component={Portfolio} />
                                  <Route path="/contact" component={Contact} />
                                  <Route component={NotFoundPage} />
                              </AnimatedSwitch>
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