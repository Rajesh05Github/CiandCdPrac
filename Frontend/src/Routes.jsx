import {createBrowserRouter} from "react-router"
import App from "./App"
import UserList from "./pages/UserList"
import NotFound from "./pages/NotFound"
export const allRoutres=createBrowserRouter([
    {path:"/",
     element:<App/>,
     children:[
        {
          path:"user-list",
          element:<UserList/>
        },
        {
            path:"*",
            element:<NotFound/>
        }
     ]
    }
])