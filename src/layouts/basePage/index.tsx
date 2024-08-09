import DashboardLayout from "components/customizes/DashboardLayout";
import DataTable from "components/customizes/Tables/DataTable";
import React from "react";
import DashboardNavbar from "components/customizes/Navbars/DashboardNavbar";

type Props = {
  showCheckAll: boolean,
  headerTitle: string,
  tableData: () => {
    columns: any;
    rows: any;
  }
}

const BasePage = ({
  showCheckAll,
  tableData,
  headerTitle
}:Props): React.ReactElement => {
  const {columns, rows} = tableData();
  return(
    <DashboardLayout>
      <DashboardNavbar />
      <header>
        {headerTitle}
      </header>
      <DataTable
        showCheckAll={showCheckAll}
        table={{ columns, rows }}
      />
    </DashboardLayout>
  )
}

export default BasePage;

