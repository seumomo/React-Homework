import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

function RootLayout() {
  return (
    <div className="mt-28 min-w-[768px] flex flex-col gap-y-16">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default RootLayout;
