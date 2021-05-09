import { FC, useState } from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "react-pro-sidebar";
import "./overrides.scss";
import { ProSiderBarContainer } from "./styles";
import { Text } from "..";
import Lottie from "react-lottie";
import loadingHand from "../../assets/lottie/loadingHand.json";
import { Link } from "react-router-dom";
import { Routes } from "../../constants";

export const SideBar: FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const renderMenuItems = () => {
    if (Routes === null) return;

    return Routes.map(({ title, icon, children }, index) => {
      return children.length === 0 ? (
        <MenuItem
          key={title}
          title={title}
          icon={
            icon === "animation" ? (
              <div>
                <Lottie
                  height={60}
                  width={60}
                  options={{
                    autoplay: true,
                    loop: true,
                    animationData: loadingHand,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice",
                    },
                  }}
                />
              </div>
            ) : (
              <i className={icon} style={{ fontSize: 16 }} />
            )
          }
        >
          {title}
          <Link to={`/${title.toLowerCase()}`} />
        </MenuItem>
      ) : (
        <SubMenu
          key={title}
          title={title}
          icon={<i className={icon} style={{ fontSize: 16 }} />}
        >
          {children.map((icon) => {
            return (
              <MenuItem
                key={icon.title}
                title={icon.title}
                icon={<i className={icon.icon} style={{ fontSize: 16 }} />}
              >
                {icon.title}
                {title === "Resources" ? (
                  <Link to={`/resources/${icon.title.toLowerCase()}`} />
                ) : (
                  <Link to={`/${icon.title.toLowerCase()}`} />
                )}
              </MenuItem>
            );
          })}
        </SubMenu>
      );
    });
  };

  return (
    <ProSiderBarContainer>
      <ProSidebar collapsed={isCollapsed}>
        <SidebarHeader>
          <Menu iconShape="square">
            <div onClick={() => setIsCollapsed(!isCollapsed)}>
              <MenuItem
                icon={
                  isCollapsed ? (
                    <i className="fas fa-arrow-right" />
                  ) : (
                    <i className="fas fa-arrow-left" />
                  )
                }
              >
                <Text weight="bold" variant="h3" ml={20}>
                  Art of Code
                </Text>
              </MenuItem>
            </div>
          </Menu>
        </SidebarHeader>
        <SidebarContent>
          <Menu iconShape="square">{Routes !== null && renderMenuItems()}</Menu>
        </SidebarContent>
        <SidebarFooter>
          {/**
           *  You can add a footer for the sidebar ex: copyright
           */}
        </SidebarFooter>
      </ProSidebar>
    </ProSiderBarContainer>
  );
};
