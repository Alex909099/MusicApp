import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App";
import Home from "./pages/home";
import ArtistProfile from "./pages/ArtistProfile";
import Reg from './pages/reg';
import ForgotPass from './pages/ForgotPass';
import Errorr from './pages/error';
import Layout from './components/Layout';
import { TabProvider } from './context/TabContext';
import { PlaylistProvider } from './context/PlaylistContext';
import ErrorBoundary from './components/ErrorBoundary';

// Компонент-обертка для провайдеров
const ProvidersWrapper = ({ children }) => {
  return (
    <TabProvider>
      <PlaylistProvider>
        {children}
      </PlaylistProvider>
    </TabProvider>
  );
};

// Оборачиваем каждый элемент в провайдеры
const wrapElement = (element) => (
  <ProvidersWrapper>
    {element}
  </ProvidersWrapper>
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: wrapElement(<App />),
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/register",
    element: wrapElement(<Reg />)
  },
  {
    path: "/passwordF",
    element: wrapElement(<ForgotPass />)
  },
  {
    path: "/home",
    element: wrapElement(<Home />)
  },
  {
    path: "/artist/:artistId",
    element: wrapElement(<ArtistProfile />)
  },
  {
    path: "/playlists",
    element: wrapElement(
      <Layout>
        <div>Плейлисты</div>
      </Layout>
    )
  }
], {
  basename: import.meta.env.DEV ? '/' : '/Mucicsapp'
}); 