import {
  Route,
  Navigate,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import { Layout } from './components/Layout'
import { Questions } from './components/Questions'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/questions" element={<Questions />} />
    </Route>,
  ),
)
