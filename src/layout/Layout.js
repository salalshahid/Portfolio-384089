import React from "react";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Container } from "./LayoutStyles";

export const Layout = ({ children }) => {
  return (
    <Container>
      <head>
        <title>My Portfolio - Salal Shahid</title>
        <meta
          name="description"
          content="I'm a Computer Science student who loves to develop web applications entirely from scratch"
        ></meta>
      </head>
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  );
};
