import React from "react";
import { Card } from "antd";
import {
  EditTwoTone,
  DeleteTwoTone,
  CheckCircleTwoTone,
} from "@ant-design/icons";
const { Meta } = Card;

export default function MyCard(props) {
  return (
    <>
      <Card
        style={{
          width: 300,
        }}
        actions={[
          <CheckCircleTwoTone twoToneColor="#2a9d8f" key="done" />,
          <EditTwoTone twoToneColor="#e9c46a" key="edit" />,
          <DeleteTwoTone twoToneColor="#e76f51" ey="setting" />,
        ]}
      >
        <Meta title={props.title} description={props.description} />
      </Card>
    </>
  );
}
