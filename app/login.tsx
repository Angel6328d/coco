"use client"

import { useState } from "react"
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, SafeAreaView } from "react-native"
import { useRouter } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { useAuth } from "../ctx/Auth"

export default function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { signIn } = useAuth()
  const router = useRouter()

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert("Error", "Por favor ingrese su correo y contraseña")
      return
    }

    if (signIn(email, password)) {
      router.replace("/")
    } else {
      Alert.alert("Error", "Correo o contraseña incorrectos")
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      {/* Top section with teal background */}
      <View style={styles.topSection}>
        <Text style={styles.appName}>GreenMate</Text>
        <Text style={styles.title}>Iniciar sesión</Text>

        {/* Input fields */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Correo electrónico"
            placeholderTextColor="#FFFFFF"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            placeholderTextColor="#FFFFFF"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        {/* Login button */}
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Ingresar</Text>
        </TouchableOpacity>

        {/* No account text and register button */}
        <Text style={styles.noAccountText}>No tienes una cuenta?</Text>
        <TouchableOpacity style={styles.registerButton} onPress={() => router.push("/register")}>
          <Text style={styles.registerButtonText}>Regístrate</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom section with plant illustration */}
      <View style={styles.bottomSection}>
        {/* Aquí iría la ilustración de la planta, pero no la incluimos */}
        <View style={styles.plantPlaceholder} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  topSection: {
    flex: 3,
    backgroundColor: "#5AAFBA",
    alignItems: "center",
    paddingTop: 40,
    paddingHorizontal: 30,
  },
  appName: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "500",
    color: "#FFFFFF",
    marginBottom: 30,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    borderRadius: 25,
    padding: 15,
    marginBottom: 15,
    color: "#FFFFFF",
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: "#A13D3D",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 30,
  },
  loginButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  noAccountText: {
    color: "#FFFFFF",
    fontSize: 16,
    marginBottom: 10,
  },
  registerButton: {
    backgroundColor: "#A13D3D",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  registerButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  bottomSection: {
    flex: 2,
    backgroundColor: "#B9D98C",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  plantPlaceholder: {
    width: "100%",
    height: "80%",
    // Espacio reservado para la ilustración de la planta
  },
})

