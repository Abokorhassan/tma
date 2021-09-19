import React from "react";

const Header = React.lazy(() => import("./Header"));
const Footer = React.lazy(() => import("./Footer"));

const Index = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Index;
