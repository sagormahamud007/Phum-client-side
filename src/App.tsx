import MainLayout from "./components/layout/MainLayout"
import ProtectedRoute from "./components/layout/ProtectedRoute"

function App() {
  //added protected route
  return <ProtectedRoute>
    <MainLayout />
  </ProtectedRoute>

}

export default App
