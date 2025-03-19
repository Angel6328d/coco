import { useState } from "react"
import { View, Text, TextInput, TouchableOpacity, Image, Alert, StyleSheet } from "react-native"
import { useRouter } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { useAuth } from "../ctx/Auth"

export default function Register() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")
  const { register } = useAuth()
  const router = useRouter()

  const handleRegister = () => {
    // Basic validation
    if (!email || !password || !passwordConfirmation) {
      Alert.alert("Error", "Todos los campos son obligatorios")
      return
    }

    if (password !== passwordConfirmation) {
      Alert.alert("Error", "Las contraseñas no coinciden")
      return
    }

    try {
      if (register(email, password, passwordConfirmation)) {
        Alert.alert("Éxito", "Cuenta creada correctamente", [{ text: "OK", onPress: () => router.push("/login") }])
      } else {
        Alert.alert("Error", "No se pudo crear la cuenta")
      }
    } catch (error) {
      Alert.alert("Error", "Error al registrar usuario")
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.content}>
        <Text style={styles.logo}>GreenMate</Text>

        <Text style={styles.title}>Crear cuenta</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Correo electrónico"
            placeholderTextColor="#fff"
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            placeholderTextColor="#fff"
            secureTextEntry
            onChangeText={setPassword}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Confirmar contraseña"
            placeholderTextColor="#fff"
            secureTextEntry
            onChangeText={setPasswordConfirmation}
          />
        </View>

        <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
          <Text style={styles.registerButtonText}>Registrarse</Text>
        </TouchableOpacity>

        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>¿Ya tienes una cuenta?</Text>
          <TouchableOpacity style={styles.loginButton} onPress={() => router.push("/login")}>
            <Text style={styles.loginButtonText}>Iniciar sesión</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4AAEB5",
    position: "relative",
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 60,
    alignItems: "center",
  },
  logo: {
    fontSize: 36,
    fontWeight: "bold",
    color: "white",
    marginBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    marginBottom: 30,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 16,
  },
  input: {
    height: 50,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 16,
    color: "white",
  },
  registerButton: {
    backgroundColor: "#A93226",
    borderRadius: 4,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    marginTop: 16,
  },
  registerButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  loginContainer: {
    marginTop: 40,
    alignItems: "center",
  },
  loginText: {
    color: "white",
    fontSize: 16,
    marginBottom: 10,
  },
  loginButton: {
    backgroundColor: "#A93226",
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  loginButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  bottomImage: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 200,
  },
})

