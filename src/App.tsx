/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ServicePage from './pages/ServicePage';
import GenericPage from './pages/GenericPage';
import ContactUs from './pages/ContactUs';
import PartnerPage from './pages/PartnerPage';
import AIPage from './pages/AIPage';
import DataPage from './pages/DataPage';
import DigitalPage from './pages/DigitalPage';
import RetailPage from './pages/RetailPage';
import HealthcarePage from './pages/HealthcarePage';
import HighTechPage from './pages/HighTechPage';
import FinancialServicesPage from './pages/FinancialServicesPage';

// Digital Services Pages
import DigitalStrategyPage from './pages/DigitalStrategyPage';
import ExperienceInnovationPage from './pages/ExperienceInnovationPage';
import DataAIAutomationPage from './pages/DataAIAutomationPage';
import DigitalPlatformsPage from './pages/DigitalPlatformsPage';
import CloudSecurityPage from './pages/CloudSecurityPage';
import FutureOfWorkPage from './pages/FutureOfWorkPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          
          {/* Specific Digital Services Pages */}
          <Route path="service/digital-strategy-transformation" element={<DigitalStrategyPage />} />
          <Route path="service/experience-product-innovation" element={<ExperienceInnovationPage />} />
          <Route path="service/data-ai-intelligent-automation" element={<DataAIAutomationPage />} />
          <Route path="service/digital-platforms-engineering" element={<DigitalPlatformsPage />} />
          <Route path="service/cloud-security-infrastructure" element={<CloudSecurityPage />} />
          <Route path="service/future-of-work-digital-workplace" element={<FutureOfWorkPage />} />

          {/* Generic Service Page Fallback */}
          <Route path="service/:slug" element={<ServicePage />} />
          <Route path="industry/retail-e-commerce" element={<RetailPage />} />
          <Route path="industry/healthcare-life-sciences" element={<HealthcarePage />} />
          <Route path="industry/high-tech" element={<HighTechPage />} />
          <Route path="industry/financial-services" element={<FinancialServicesPage />} />
          <Route path="industry/:slug" element={<GenericPage />} />
          <Route path="insights/:slug" element={<GenericPage />} />
          <Route path="company/partnerships/:slug" element={<PartnerPage />} />
          <Route path="company/:slug" element={<GenericPage />} />
          <Route path="capabilities/ai" element={<AIPage />} />
          <Route path="capabilities/data" element={<DataPage />} />
          <Route path="capabilities/digital" element={<DigitalPage />} />
          <Route path="capabilities/:slug" element={<GenericPage />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="*" element={<GenericPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
