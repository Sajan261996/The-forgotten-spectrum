// src/App.tsx
import Scene from "./Componet/Screen" // Make sure the folder name is 'components'
import InstallButton from "./Componet/InstallButton" // Optional: if using PWA install flow

export default function App() {
  return (
    <div style={{ height: "100vh", margin: 0, position: "relative" }}>
      <Scene />
      <InstallButton /> {/* Optional: remove if not using PWA */}
    </div>
  )
}
