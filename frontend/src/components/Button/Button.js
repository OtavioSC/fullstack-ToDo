import { Button } from "antd";

function ButtonComponent(props) {
  return (
    <>
      <Button type={props.type}>{props.text}</Button>
    </>
  );
}

export default ButtonComponent;
