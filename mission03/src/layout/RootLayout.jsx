import { Outlet } from "react-router-dom";
import YearProvider from "../contexts/Year";
import Footer from "./Footer";
import Header from "./Header";

function RootLayout() {
  return (
    <div className="mt-20 flex min-w-[768px] flex-col gap-y-16">
      <Header />

      <main className="h-[424px]">
        <YearProvider>
          <Outlet className="transition-all" />
        </YearProvider>
      </main>

      <Footer />
    </div>
  );
}

export default RootLayout;
