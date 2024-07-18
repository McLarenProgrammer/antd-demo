import { ConfigProvider, Dropdown, Space, Button } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";

function HeaderDropdown({ items, children }) {
  return (
    <ConfigProvider>
      <Dropdown menu={{ items }} trigger={["click"]}>
        <Button type="text">
          <Space>
            {children}
            <CaretDownOutlined />
          </Space>
        </Button>
      </Dropdown>
    </ConfigProvider>
  );
}

export default HeaderDropdown;
