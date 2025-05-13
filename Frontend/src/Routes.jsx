import {createBrowserRouter} from "react-router"
import App from "./App"
import UserList from "./pages/UserList"
import NotFound from "./pages/NotFound"
import UserDetail from "./pages/UserDetail"
export const allRoutres=createBrowserRouter([
    {path:"/",
     element:<App/>,
     children:[
        {
          path:"user-list",
          element:<UserList/>
        },
        {
          path:"creatUser",
          element:<UserDetail/>
        },
        {
            path:"*",
            element:<NotFound/>
        }
     ]
    }
])