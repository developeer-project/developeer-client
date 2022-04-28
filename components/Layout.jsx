import Navbar from "./Navbar";
// import Footer from "./footer";
import { HeaderMiddle } from "../components/Header.bak";
import { ArrowBottomSquare } from "tabler-icons-react";

export default function Layout({ children }) {
  const links = [
    {
      link: "/",
      label: "Home",
    },
    {
      link: "/about",
      label: "About",
    },
    {
      link: `/app/profile/dsklfasf`,
      label: "Profile",
    },
  ];

  return (
    <>
      {/* <Navbar /> */}
      <HeaderMiddle links={links} />
      <main>{children}</main>
    </>
  );
}
