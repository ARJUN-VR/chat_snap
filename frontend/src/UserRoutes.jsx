import { Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/HomePage"


export const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />



    </Routes>

  )
}
