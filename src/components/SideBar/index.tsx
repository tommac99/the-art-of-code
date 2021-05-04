import React, { useEffect, useState } from "react";
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
import { CampingSVG, MoonSVG } from "../../assets/svg";
import { ProSiderBarContainer } from "./styles";
import { Text } from "..";
import { GetIcons } from "../../services";
import Lottie from "react-lottie";
import loadingHand from "../../assets/lottie/loadingHand.json";
import { Link } from "react-router-dom";
import { Routes } from "../../constants";

interface Icon {
  title: string;
  icon: string;
  children: Icon[];
}

export const SideBar = () => {
  // const [items, setItems] = useState<Icon[] | null>(null);
  const [isCollapsed, setIsCollapsed] = useState(true);

  // useEffect(() => {
  //   async function getData() {
  //     const data = await GetIcons();
  //     console.log("data:", data);
  //     setItems(data);
  //   }

  //   getData();
  // }, []);

  const renderMenuItems = () => {
    if (Routes === null) return;

    return Routes.map((icon, index) => {
      return icon.children.length === 0 ? (
        <MenuItem
          key={icon.title}
          title={icon.title}
          icon={
            icon.icon === "animation" ? (
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
              <i className={icon.icon} style={{ fontSize: 16 }} />
            )
          }
        >
          {icon.title}
          <Link to={icon.title.toLowerCase()} />
        </MenuItem>
      ) : (
        <SubMenu
          title={icon.title}
          icon={<i className={icon.icon} style={{ fontSize: 16 }} />}
          onOpenChange={() => {
            console.log("opening submenu");
          }}
        >
          {icon.children.map((icon) => {
            return (
              <MenuItem
                key={icon.title}
                title={icon.title}
                icon={<i className={icon.icon} style={{ fontSize: 16 }} />}
              >
                {icon.title}
                <Link to={icon.title.toLowerCase()} />
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
