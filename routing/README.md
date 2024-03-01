React Router v6.4+

const router = createBrowserRouter([
  {element: <AppLayout/>,
    errorElement: <Error/>,
    children: [
    {path: "/",
      element: <Home />},
    {path: "/users",
      element: <Users />}
    ]}
])

hooks - 
RouterProvider
createBrowserRouter
useNavigate
useLoaderData
useNavigation
useRouteError
