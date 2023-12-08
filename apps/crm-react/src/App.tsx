import { Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import IndexPage from './pages/IndexPage';
import AuthPage from './pages/AuthPage';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
      </Route>
      <Route path="/auth" element={<AuthPage />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}
