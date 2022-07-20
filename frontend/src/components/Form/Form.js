import { Form, Input } from "antd";
import ButtonComponent from "../Button/Button";
import DateComponent from "../Date/Date";

function FormComponent() {
  return (
    <>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        autoComplete="off"
      >
        <Form.Item
          label="Title"
          name="title"
          rules={[
            {
              required: true,
              message: "Title is required!",
            },
          ]}
        >
          <Input className="input" />
        </Form.Item>
        <Form.Item
          label="Description"
          name="description"
          rules={[
            {
              required: true,
              message: "Description is required!",
            },
          ]}
        >
          <Input className="input" />
        </Form.Item>
        <Form.Item
          label="Duration"
          name="Duration"
          rules={[
            {
              required: true,
              message: "Duration is required!",
            },
          ]}
        >
          <Input className="input" />
        </Form.Item>
        <Form.Item
          label="Date"
          name="Date"
          rules={[
            {
              required: true,
              message: "Date is required!",
            },
          ]}
        >
          <DateComponent />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <ButtonComponent type="primary" htmlType="submit" text="Create" />
          <ButtonComponent htmlType="button" text="Delete" type="danger" />
          <ButtonComponent htmlType="button" text="Update" />
        </Form.Item>
      </Form>
    </>
  );
}

export default FormComponent;
