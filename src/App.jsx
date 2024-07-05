import { ConfigProvider, Layout } from "antd";
const { Header, Content, Footer } = Layout;

function App() {
  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            footerBg: "#0053A4",            
            headerBg: "#0053A4",
            headerColor: "#F2F5FE",
          },
        },
      }}
    >
      <Layout>
        <Header>Контент Шапки</Header>
        <Content>Основной контент</Content>
        <Footer>Контент подвала</Footer>
      </Layout>
    </ConfigProvider>
  );
}

export default App;
