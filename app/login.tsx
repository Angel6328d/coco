import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { supabase } from "../supabaseConfig";

export default function LoginScreen({ setScreen }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      Alert.alert("Error", error.message);
    } else {
      Alert.alert("Éxito", "Has iniciado sesión correctamente");
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      <Text style={{ fontSize: 24, textAlign: "center" }}>Iniciar Sesión</Text>
      <TextInput
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        style={{ borderWidth: 1, marginVertical: 10, padding: 10 }}
      />
      <TextInput
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ borderWidth: 1, marginVertical: 10, padding: 10 }}
      />
      <TouchableOpacity onPress={handleLogin} style={{ backgroundColor: "blue", padding: 10, marginVertical: 10 }}>
        <Text style={{ color: "white", textAlign: "center" }}>Iniciar Sesión</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setScreen("register")}>
        <Text style={{ color: "blue", textAlign: "center" }}>¿No tienes cuenta? Regístrate</Text>
      </TouchableOpacity>
    </View>
  );
}
