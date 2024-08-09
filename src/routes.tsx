import Dashboard from "layouts/dashboard";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";

// @mui icons
import Icon from "@mui/material/Icon";
import Configurator from "components/customizes/Configurator";
import Product from "./layouts/admin/product";
import Category from "./layouts/admin/category";
import Order from "./layouts/admin/order";
import Customer from "./layouts/admin/customer";

const routes = [
  {
    type: "collapse",
    name: "Trang chủ",
    key: "home",
    icon: <Icon fontSize="small">home</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Danh mục",
    key: "category",
    icon: <Icon fontSize="small">local_mall</Icon>,
    route: "/category",
    component: <Category />,
  },
  {
    type: "collapse",
    name: "Sản phẩm",
    key: "product",
    icon: <Icon fontSize="small">local_mall</Icon>,
    route: "/product",
    component: <Product />,
  },
  {
    type: "collapse",
    name: "Đơn hàng",
    key: "order",
    icon: <Icon fontSize="small">shopping_cart_checkout</Icon>,
    route: "/order",
    component: <Order />,
  },
  {
    type: "collapse",
    name: "Khách hàng thân thiết",
    key: "customer",
    icon: <Icon fontSize="small">support_agent</Icon>,
    route: "/customer",
    component: <Customer />,
  },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
  {
    type: "collapse",
    name: "Cài đặt",
    key: "setting",
    icon: <Icon fontSize="small">settings_suggest</Icon>,
    route: "/setting",
    component: <Configurator />,
  },
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/authentication/sign-up",
    component: <SignUp />,
  },
];

export default routes;
