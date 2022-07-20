import { DatePicker, Space } from "antd";

function DateComponent() {
  return (
    <>
      <Space direction="vertical">
        <DatePicker showTime />
      </Space>
    </>
  );
}

export default DateComponent;
