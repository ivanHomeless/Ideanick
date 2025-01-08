import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Layout } from "./components/Layout"
import { getAllIdeasRoute, getViewIdeaRoute, viewIdeaRouteParams } from "./lib/routes"
import { TrpcProvider } from './lib/trpc'
import { AllIdeasPage } from './pages/AllIdeasPage'
import { ViewIdeaPage } from './pages/ViewIdeaPage'
import './styles/global.scss'


export const App = () => {
  return (
    <TrpcProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
            <Route path={getAllIdeasRoute()} element={<AllIdeasPage/>}></Route>
            <Route path={getViewIdeaRoute(viewIdeaRouteParams)} element={<ViewIdeaPage/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>      
    </TrpcProvider>
  )
}
