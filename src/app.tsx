import { HashRouteProvider } from './HashRouteContext';
import Header from './Header';
import Router from './Router';
import Footer from './Footer';

export function App() {
  return (
    <HashRouteProvider>
      <Router />
    </HashRouteProvider>
  );
}
