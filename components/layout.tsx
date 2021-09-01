import type { NextPage } from 'next';
import Header from './header';
import Footer from './footer';
import 'tailwindcss/tailwind.css';

type PropsType = {
  title: string;
};

const Layout: NextPage<PropsType> = ({ children, title }) => {
  return (
    <div className="font-mono flex flex-col min-h-screen h-auto">
      <Header title={title} />
      <main className="flex flex-col justify-center min-h-screen m-auto w-9/12">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
