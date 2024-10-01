import React from "react";
import "./App.css";
import "antd/dist/antd";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import AppHeader from "./components/common/header";
import AppFooter from "./components/common/footer";
import AppHome from "./views/home";

import { Layout } from "antd";
const { Header, Content, Footer } = Layout;

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout className="mainLayout">
        <Header>
          <AppHeader />
        </Header>
        <Content>
          <AppHome />
        </Content>
        <Footer>
          <AppFooter />
        </Footer>
      </Layout>
    </QueryClientProvider>
  );
}

export default App;
