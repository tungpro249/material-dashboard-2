import BasePage from "../../basePage";
import Data from "./data";

const Category = () => {
  return (
    <BasePage
      headerTitle="Danh mục sản phẩm"
      showCheckAll={true}
      tableData={Data}
    />
  )
}

export default Category;
