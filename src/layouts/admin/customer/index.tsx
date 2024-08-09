import BasePage from "../../basePage";
import Data from "./data";

const Customer = () => {
  return (
    <BasePage
      headerTitle="Khách hàng thân thiết"
      showCheckAll={true}
      tableData={Data}
    />
  )
}

export default Customer;
