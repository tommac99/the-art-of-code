import { FC } from "react";
import { Text } from "../Text";
import { Root, Empty } from "./styles";

interface IIcon {
  title: string | null;
  icon: any | null;
  index: number;
  parentIndex: number;
}

export const Icon: FC<IIcon> = ({ title, icon, index, parentIndex }) => {
  if (title === null) return <Empty index={index} parentIndex={parentIndex} />;

  return (
    <Root index={index} parentIndex={parentIndex}>
      <i className={icon} />
      <Text color="secondary" align="center">
        {title}
      </Text>
    </Root>
  );
};
