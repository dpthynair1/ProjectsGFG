import { Navbar } from "../../components/Navbar";
import "/Users/dpthynair/Downloads/GeeksCourse/Projects/ECommerce/src/components/Landing/style.css";
import Landing from "../../components/Landing/index";
import { useState } from "react";

export const Home = () => {
  // console.log("dishes", dishes);
  // const [menu, setMenu] = useState(dishes);
  // console.log("dishes", menu);
  return (
    <>
      <Navbar />
      <Landing />
    </>
  );
};
