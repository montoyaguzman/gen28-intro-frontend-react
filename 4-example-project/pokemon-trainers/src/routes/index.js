const routes = useRoutes([
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "trainer",
      element: <Trainer />
    },
    {
      path: "formTrainers",
      element: <FormTrainers />
    },
    {
      path: "*",
      element: <NotFound />
    }
]);

export { routes };