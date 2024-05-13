import EmployeeDetail from "../pages/Main/EmployeeDetail";
import Favorites from "../pages/Main/Favorites";
import Home from "../pages/Main/Home";
import NotFound from "../pages/Main/Notfound";
import MainRoot from "../pages/Main/MainRoot";
import MainEmployees from "../pages/Main/employees";
import AdminEmployees from "../pages/Admin/Employees";
import AddEmployee from "../pages/Admin/AddEmployee";
import EditEmployee from "../pages/Admin/EditEmployee";
import AdminRoot from "../pages/Admin/AdminRoot";


export const Routes =[
    {
        path:'',
        element:<MainRoot/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path:"employees",
                element:<MainEmployees/>
            },
            {
                path:"favorites",
                element:<Favorites/>
            },
            {
                path:"employees/:id",
                element:<EmployeeDetail/>
            },
            {
                path:"*",
                element:<NotFound/>
            },
        ]
            
        
    },
    {
        path: '/admin',
        element: <AdminRoot/>,
        children: [
          {
              path: '',
              element: <AdminEmployees/>
          },
          {
              path: 'add-employee',
              element: <AddEmployee/>
          },
          {
              path: 'employees/edit:id',
              element: <EditEmployee/>
          }
        ]
      }
]