import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/layouts/main'
import RouteList from './constants/routes'
import { AuthTypes } from './constants/types'
import ProtectedRoute from './utils/protectedRoute'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {RouteList.map((route) =>
          route.authLevel === AuthTypes.NORMAL ? (
            <Route
              path={route.path}
              element={
                <Layout type={route.layout}>
                  <route.component />
                </Layout>
              }
              key={route.key}
            />
          ) : (
            <Route
              element={
                <ProtectedRoute authLevel={route.authLevel} pathName={route.path}>
                  <Layout type={route.layout}>
                    <route.component />
                  </Layout>
                </ProtectedRoute>
              }
              key={route.key}
            />
          )
        )}
      </Routes>
    </BrowserRouter>
  )
}

export default App
