import type { NextPage } from 'next';
import Header from './header';
import Footer from './footer';
import 'tailwindcss/tailwind.css';

type PropsType = {
  title: string;
};

const Layout: NextPage<PropsType> = ({ children, title }) => {
  return (
    <div className="h-screen font-mono flex flex-col">
      <Header title={title} />
      <main className="flex flex-col justify-center items-center h-5/6">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
