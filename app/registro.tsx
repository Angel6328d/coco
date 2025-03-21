import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { supabase } from "../supabaseConfig";

export default function RegisterScreen({ setScreen }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) {
      Alert.alert("Error", error.message);
    } else {
      Alert.alert("Éxito", "Registro exitoso. Revisa tu correo para verificar la cuenta.");
      setScreen("login");
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      <Text style={{ fontSize: 24, textAlign: "center" }}>Registro</Text>
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
      <TouchableOpacity onPress={handleRegister} style={{ backgroundColor: "green", padding: 10, marginVertical: 10 }}>
        <Text style={{ color: "white", textAlign: "center" }}>Registrarse</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setScreen("login")}>
        <Text style={{ color: "blue", textAlign: "center" }}>¿Ya tienes cuenta? Inicia sesión</Text>
      </TouchableOpacity>
    </View>
  );
}
