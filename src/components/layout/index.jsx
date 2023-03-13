import { Header } from "../index";

const Layout = ({ children }) => {
  return (
    <div className="grid layout">
      <Header />
      <main className="main">{children}</main>
      <footer className="bg-blue-300 footer">
        <p>Footer</p>
      </footer>
    </div>
  );
};
export default Layout;
