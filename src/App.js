import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Public from './components/Public'
import ImageSorter from './components/ImageSorter'
import './css/App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Public />} />
        <Route path="image-sorter" element={<ImageSorter />} />
      </Route>
    </Routes>
  );
}

export default App;
