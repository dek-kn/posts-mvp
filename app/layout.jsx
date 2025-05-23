import "./globals.css"
import StoreProvider from "@/app/store/StoreProvider"
import AppDrawerMenu from "@/app/drawer/AppDrawerMenu"
import AppHeader from "@/app/components/AppHeader"

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <AppDrawerMenu />
          <AppHeader />
          {children}
        </StoreProvider>
      </body>
    </html>
  )
}

export default RootLayout
