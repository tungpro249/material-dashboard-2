/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
// @mui material components
import Tooltip from "@mui/material/Tooltip";
import MDBox from "components/ui/MDBox";
import MDTypography from "components/ui/MDTypography";
import MDAvatar from "components/ui/MDAvatar";
import MDProgress from "components/ui/MDProgress";

export default function data() {
  const avatars = (members:any) =>
    // @ts-ignore
    members.map(([image, name]:any) => (
      <Tooltip key={name} title={name} placeholder="bottom">
        <MDAvatar
          src={image}
          alt="name"
          size="xs"
          sx={{
            border: ({ borders: { borderWidth }, palette: { white } }:any) =>
              `${borderWidth[2]} solid ${white.main}`,
            cursor: "pointer",
            position: "relative",

            "&:not(:first-of-type)": {
              ml: -1.25,
            },

            "&:hover, &:focus": {
              zIndex: "10",
            },
          }}
        />
      </Tooltip>
    ));

  const Company = ({ image, name }: any) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDTypography variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "companies", accessor: "companies", width: "45%", align: "left" },
      { Header: "members", accessor: "members", width: "10%", align: "left" },
      { Header: "budget", accessor: "budget", align: "center" },
      { Header: "completion", accessor: "completion", align: "center" },
    ],

    rows: [
      {
        companies: <Company image={""} name="Material UI XD Version" />,
        members: (
          <MDBox display="flex" py={1}>
            {avatars([
              ["", "Ryan Tompson"],
              ["", "Romina Hadid"],
              ["", "Alexander Smith"],
            ])}
          </MDBox>
        ),
        budget: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            $14,000
          </MDTypography>
        ),
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={60} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        companies: <Company image={""} name="Add Progress Track" />,
        members: (
          <MDBox display="flex" py={1}>
            {avatars([
              ["", "Romina Hadid"],
              ["", "Jessica Doe"],
            ])}
          </MDBox>
        ),
        budget: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            $3,000
          </MDTypography>
        ),
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={10} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
      },
    ],
  };
}
