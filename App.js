// App.js
import React, { useState } from "react";
import LoginScreen from "./app/login";
import RegisterScreen from "./app/registro";

export default function App() {
  const [screen, setScreen] = useState("login");

  return screen === "login" ? <LoginScreen setScreen={setScreen} /> : <RegisterScreen setScreen={setScreen} />;
}
