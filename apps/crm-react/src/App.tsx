import { Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<div>Index Page</div>} />
      </Route>
      <Route path="/auth" element={<div>Auth Page</div>}></Route>
      <Route path="*" element={<div>Not Found</div>}></Route>
    </Routes>
  );
}
