import Navbar from "./Navbar";
// import Footer from "./footer";
import { HeaderMiddle } from "../components/Header.bak";
import { ArrowBottomSquare } from "tabler-icons-react";
import { useSession } from "next-auth/react";

export default function Layout({ children }) {
  const ssn = useSession();
  console.log("ssn", ssn);
  const links = [
    {
      link: "/",
      label: "Home",
    },
    {
      link: "/app",
      label: "Explore",
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
