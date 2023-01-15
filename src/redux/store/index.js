import { configureStore } from "@reduxjs/toolkit";
import permission from "../reducers/permission";
import component from "../reducers/component";
import role from "../reducers/role";

const store = configureStore({
    reducer: { permission: permission, component: component, role: role }
});

export default store;