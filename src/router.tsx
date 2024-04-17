import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import { Layout } from './components/Layout'
import { Questions } from './pages/Questions'
import { AuthForm } from './pages/AuthForm'
import { Result } from './pages/Result'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<AuthForm />} />
      <Route path="/questions" element={<Questions />} />
      <Route path="/result" element={<Result />} />
    </Route>,
  ),
)
