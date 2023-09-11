import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import Home from './pages/Home';
import Contents from './pages/Contents';

import Community from './pages/Community';
import Event from './pages/Event';
import Place from './pages/Place';
import SignUP from './layout/SignUP';
import ContentDetail from './components/contents/ContentDetail';

// 구버전 처럼 사용할 사용자를 위한 최신 방법
// 배열 → JSX
const router = createBrowserRouter(
  // 유틸리티 함수
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="contents" element={<Contents />} />
      <Route path="contents/detail/:contentId" element={<ContentDetail />} />
      <Route path="community" element={<Community />} />
      <Route path="event" element={<Event />} />
      <Route path="place" element={<Place />} />
      <Route path="signUP" element={<SignUP />} />
    </Route>
  )
);

export default router;

// 최신 방법(기본 방법)
// 배열 → 객체
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <RootLayout />,
//     // 중첩된 라우트
//     children: [
//       // '/'
//       { index: true, element: <Home /> },
//       // '/products'
//       { path: 'products', element: <Products /> },
//       // '/contact'
//       { path: 'contact', element: <Contact /> },
//     ],
//   },
// ]);
