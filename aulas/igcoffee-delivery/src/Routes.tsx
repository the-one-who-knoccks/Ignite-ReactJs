import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/Default/DefaultLayout'
import { CompleteOrderPage } from './pages/CompleteOrder'
import { Home } from './pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/complete-order" element={<CompleteOrderPage />} />
      </Route>
    </Routes>
  )
}
