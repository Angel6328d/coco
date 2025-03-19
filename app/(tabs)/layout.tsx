import type React from "react"
import { AuthProvider } from "../../ctx/Auth"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>
}

