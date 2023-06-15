import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "./components/Layout/Layout";
import "./App.css";
import { loadUser, loadUserGoogle } from "./redux/actions/users.tsx";
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(loadUser())
    dispatch(loadUserGoogle())
  }, []);

  return <Layout />;
};

export default App;
