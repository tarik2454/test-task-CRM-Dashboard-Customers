import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import Layout from './components/Layout';
const Dashboard = lazy(() => import('./pages/Dashboard/Dashboard'));
const Customers = lazy(() => import('./pages/Customers/Customers'));
const Help = lazy(() => import('./pages/Help/Help'));
const Income = lazy(() => import('./pages/Income/Income'));
const Product = lazy(() => import('./pages/Product/Product'));
const Promote = lazy(() => import('./pages/Promote/Promote'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Customers />} />
          <Route path="customers" element={<Customers />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="help" element={<Help />} />
          <Route path="income" element={<Income />} />
          <Route path="product" element={<Product />} />
          <Route path="promote" element={<Promote />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
