import { Route, Routes } from 'react-router-dom';

import IndexPage from '@/pages/index';

import ScrollToTop from './components/scroll-to-top';
import NotFoundPage from './pages/404';
import ServiceDetailPage from './pages/service-ind';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<IndexPage />} path="/" />
        {/* <Route element={<PricingPage />} path="/pricing" /> */}
        {/* <Route element={<AdvantagesPage />} path="/advantages" />
        <Route element={<AboutPage />} path="/about" />
        <Route element={<PartnersPage />} path="/partners" />
        <Route element={<RServicePage />} path="/rvs" />
        <Route element={<ContactPage />} path="/contact" />
        <Route element={<DemoRequestPage />} path="/rvs/price" />
        <Route element={<CustomersPage />} path="/customers" /> */}
        {/* <Route element={<ServicesPage />} path="/cyber-security" /> */}
        <Route element={<ServiceDetailPage />} path="/cyber-security/:serviceId" />
        {/* 404 route - must be last to catch all unmatched paths */}
        <Route element={<NotFoundPage />} path="*" />
      </Routes>
    </>
  );
}

export default App;
