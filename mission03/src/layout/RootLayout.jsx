import Landing from '../routes/Landing';
import Footer from './Footer';
import Header from './Header';

function RootLayout() {
  return (
    <div className="mt-28 min-w-[768px] flex flex-col gap-y-20">
      <Header />
      <main>
        <Landing />
      </main>
      <Footer />
    </div>
  );
}

export default RootLayout;
