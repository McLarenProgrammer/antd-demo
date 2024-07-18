import { ConfigProvider, Layout } from "antd";
import HeaderDropdown from "./components/HeaderDropdown";

const { Header, Content, Footer } = Layout;

function App() {
  const intelligenceItems = [
    {
      label: <a href="#">Инвентарная книга</a>,
      key: "0",
    },
    {
      label: <a href="#">Инвентарная книга</a>,
      key: "1",
    },
  ];
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
        <Header>
          <HeaderDropdown items={intelligenceItems}>
            IntelligenceLibrary
          </HeaderDropdown>
        </Header>
        <Content>Основной контент</Content>
        <ConfigProvider
          theme={{
            token: {
              colorText: "#F2F5FE",
            },
          }}
        >
          <Footer>Контент подвала</Footer>
        </ConfigProvider>
      </Layout>
    </ConfigProvider>
  );
}

export default App;
