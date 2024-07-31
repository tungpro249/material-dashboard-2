// react-router-dom components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

// @mui material components
import { Breadcrumbs as MuiBreadcrumbs } from "@mui/material";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/ui/MDBox";
import MDTypography from "components/ui/MDTypography";
import React from "react";

function Breadcrumbs({
   icon,
   title,
   route,
   module,
   light = false,
 }: {
  icon: React.ReactNode;
  title: string;
  route: string | Array<string>;
  module: string | null;
  light: boolean;
}) {
  const navigate = useNavigate();
  return (
    <MDBox mr={{ xs: 0, xl: 8 }}>
      <MuiBreadcrumbs
        separator={
          <NavigateNextIcon
            sx={{
              display: {
                lg: "flex",
                xs: "none",
              },
            }}
            fontSize="medium"
          />
        }
        sx={{
          "& .MuiBreadcrumbs-separator": {
            color: ({ palette: { white, grey } }: any) => (light ? white.main : grey[600]),
            margin: {
              xs: "-4px",
              md: 0,
              lg: "-4px",
            },
          },
        }}
      >
        <MDBox
          sx={{
            cursor: "pointer",
            display: {
              lg: "flex",
              xs: "none",
            },
          }}
          onClick={() => {
            localStorage.removeItem("module");
            navigate("/");
          }}
        >
          <MDTypography
            component="span"
            variant="h6"
            color={light ? "white" : "dark"}
            opacity={light ? 0.8 : 0.5}
            fontSize={28}
          >
            <Icon>{icon}</Icon>
          </MDTypography>
        </MDBox>

        {module && (
          <MDTypography
            variant="h6"
            fontWeight="regular"
            // textTransform="capitalize"
            color={light ? "white" : "dark"}
            sx={{
              display: {
                lg: "flex",
                xs: "none",
              },
            }}
          >
            {module}
          </MDTypography>
        )}

        <MDTypography
          variant="h6"
          fontWeight="regular"
          // textTransform="capitalize"
          color={light ? "white" : "dark"}
          sx={{
            marginTop: {
              xs: "3px",
              lg: 0,
            },
          }}
        >
          {title.replace("-", " ")}
        </MDTypography>
      </MuiBreadcrumbs>
    </MDBox>
  );
}

// Setting default values for the props of Breadcrumbs
Breadcrumbs.defaultProps = {
  light: false,
};

// Typechecking props for the Breadcrumbs
Breadcrumbs.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  route: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  light: PropTypes.bool,
};

export default Breadcrumbs;
