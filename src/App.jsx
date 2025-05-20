import React, { useEffect } from "react";
import AppRoutes from "./routes/AppRoutes";
import { useDispatch } from "react-redux";
import { checkAuth } from "./features/auth/AuthSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  return <AppRoutes />;
}

export default App;
