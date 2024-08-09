import BasePage from "../../basePage";
import Data from "./data";

const Order = () => {
  return (
    <BasePage
      headerTitle="Đơn hàng"
      showCheckAll={true}
      tableData={Data}
    />
  )
}

export default Order;
