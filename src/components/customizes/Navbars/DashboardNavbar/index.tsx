import React, { useState, useEffect, MouseEvent } from "react";
import { useLocation, Link } from "react-router-dom";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Icon from "@mui/material/Icon";
import MDBox from "components/ui/MDBox";
import MDInput from "components/ui/MDInput";
import Breadcrumbs from "components/customizes/Breadcrumbs";
import NotificationItem from "components/customizes/Items/NotificationItem";
import {
  navbar,
  navbarContainer,
  navbarRow,
  navbarIconButton,
  navbarMobileMenu,
} from "components/customizes/Navbars/DashboardNavbar/styles";
import {
  useMaterialUIController,
  setTransparentNavbar,
  setMiniSidenav,
  setOpenConfigurator,
} from "context/materialContext";

interface DashboardNavbarProps {
  absolute?: boolean;
  light?: boolean;
  isMini?: boolean;
}

const DashboardNavbar: React.FC<DashboardNavbarProps> = ({ absolute = false, light = false, isMini = false }) => {
  const [navbarType, setNavbarType] = useState<'static' | 'sticky'>('static');
  // @ts-ignore
  const [controller, dispatch] = useMaterialUIController();
  const { miniSidenav, transparentNavbar, fixedNavbar, openConfigurator, darkMode } = controller;
  const [openMenu, setOpenMenu] = useState<null | HTMLElement>(null);
  const route = useLocation().pathname.split("/").slice(1);

  useEffect(() => {
    if (fixedNavbar) {
      setNavbarType('sticky');
    } else {
      setNavbarType('static');
    }

    const handleTransparentNavbar = () => {
      setTransparentNavbar(dispatch, (fixedNavbar && window.scrollY === 0) || !fixedNavbar);
    };

    window.addEventListener("scroll", handleTransparentNavbar);
    handleTransparentNavbar();

    return () => window.removeEventListener("scroll", handleTransparentNavbar);
  }, [dispatch, fixedNavbar]);

  const handleMiniSidenav = () => setMiniSidenav(dispatch, !miniSidenav);
  const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);
  const handleOpenMenu = (event: MouseEvent<HTMLElement>) => setOpenMenu(event.currentTarget);

  const iconsStyle = ({ palette: { dark, white, text }, functions: { rgba } }: any) => ({
    color: () => {
      let colorValue = light || darkMode ? white.main : dark.main;

      if (transparentNavbar && !light) {
        colorValue = darkMode ? rgba(text.main, 0.6) : text.main;
      }

      return colorValue;
    },
  });

  return (
    <AppBar
      position={absolute ? "absolute" : navbarType}
      color="inherit"
      sx={(theme) => navbar(theme, { transparentNavbar, absolute, light, darkMode })}
    >
      <Toolbar sx={(theme) => navbarContainer(theme)}>
        <MDBox color="inherit" mb={{ xs: 1, md: 0 }} sx={(theme: any) => navbarRow(theme, { isMini })}>
          <Breadcrumbs icon="home" title={route[route.length - 1]} route={route} light={light} />
        </MDBox>
        {isMini ? null : (
          <MDBox sx={(theme:any) => navbarRow(theme, { isMini })}>
            {/*<MDBox pr={1}>*/}
            {/*  <MDInput label="Search here" />*/}
            {/*</MDBox>*/}
            {/*<MDBox color={light ? "white" : "inherit"}>*/}
            {/*  <Link to="/authentication/sign-in/basic">*/}
            {/*    <IconButton sx={navbarIconButton} size="small" disableRipple>*/}
            {/*      <Icon sx={iconsStyle}>account_circle</Icon>*/}
            {/*    </IconButton>*/}
            {/*  </Link>*/}
            {/*  <IconButton*/}
            {/*    size="small"*/}
            {/*    disableRipple*/}
            {/*    color="inherit"*/}
            {/*    sx={navbarMobileMenu}*/}
            {/*    onClick={handleMiniSidenav}*/}
            {/*  >*/}
            {/*    <Icon sx={iconsStyle} fontSize="medium">*/}
            {/*      {miniSidenav ? "menu_open" : "menu"}*/}
            {/*    </Icon>*/}
            {/*  </IconButton>*/}
            {/*  <IconButton*/}
            {/*    size="small"*/}
            {/*    disableRipple*/}
            {/*    color="inherit"*/}
            {/*    // sx={navbarIconButton}*/}
            {/*    onClick={handleConfiguratorOpen}*/}
            {/*  >*/}
            {/*    <Icon sx={iconsStyle}>settings</Icon>*/}
            {/*  </IconButton>*/}
            {/*  <IconButton*/}
            {/*    size="small"*/}
            {/*    disableRipple*/}
            {/*    color="inherit"*/}
            {/*    // sx={navbarIconButton}*/}
            {/*    aria-controls="notification-menu"*/}
            {/*    aria-haspopup="true"*/}
            {/*    variant="contained"*/}
            {/*    onClick={handleOpenMenu}*/}
            {/*  >*/}
            {/*    <Icon sx={iconsStyle}>notifications</Icon>*/}
            {/*  </IconButton>*/}
            {/*</MDBox>*/}
          </MDBox>
        )}
      </Toolbar>
    </AppBar>
  );
};

DashboardNavbar.defaultProps = {
  absolute: false,
  light: false,
  isMini: false,
};

DashboardNavbar.propTypes = {
  absolute: PropTypes.bool,
  light: PropTypes.bool,
  isMini: PropTypes.bool,
};

export default DashboardNavbar;
