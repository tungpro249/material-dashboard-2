import BasePage from "../../basePage";
import Data from "./data";

const Product = () => {
  return (
    <BasePage
      headerTitle="Danh sách sản phẩm"
      showCheckAll={false}
      tableData={Data}
    />
  );
}

export default Product;
