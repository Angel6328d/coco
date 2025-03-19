import { createContext, useContext, useState, type ReactNode } from "react"

// Define the shape of the auth context
type AuthContextType = {
  user: User | null
  signIn: (email: string, password: string) => boolean
  register: (email: string, password: string, passwordConfirmation: string) => boolean
  signOut: () => void
}

// Define the user type
type User = {
  id: string
  email: string
}

// Create the context with a default value
const AuthContext = createContext<AuthContextType>({
  user: null,
  signIn: () => false,
  register: () => false,
  signOut: () => {},
})

// Create a provider component
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  // Mock sign in function - replace with actual implementation
  const signIn = (email: string, password: string) => {
    // In a real app, you would validate credentials against your backend
    if (email && password) {
      setUser({ id: "1", email })
      return true
    }
    return false
  }

  // Mock register function - replace with actual implementation
  const register = (email: string, password: string, passwordConfirmation: string) => {
    // In a real app, you would send registration data to your backend
    if (email && password && password === passwordConfirmation) {
      // Registration successful, but don't sign in automatically
      return true
    }
    return false
  }

  // Sign out function
  const signOut = () => {
    setUser(null)
  }

  return <AuthContext.Provider value={{ user, signIn, register, signOut }}>{children}</AuthContext.Provider>
}

// Create a hook to use the auth context
export const useAuth = () => useContext(AuthContext)

