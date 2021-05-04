import { FC } from "react";
import { Icon } from "../index";
import { Root } from "./styles";

interface IIconFolder {
  icons: any[];
  index: number;
}

export const IconFolder: FC<IIconFolder> = ({ icons, index }) => {
  const parentIndex = index;

  return (
    <Root>
      {icons.map(({ title, icon }, index) => {
        return (
          <Icon
            title={title}
            icon={icon}
            index={index}
            parentIndex={parentIndex}
          />
        );
      })}
    </Root>
  );
};
