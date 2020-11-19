import React from "react"
import { LocalizedRouter, useLocalization, LocalizedLink as Link } from "gatsby-theme-i18n"
// import Name from "../components/name"

const App = () => {
  const { locale } = useLocalization()

  return (
    <LocalizedRouter basePath="/app">
    </LocalizedRouter>
  )
}

export default App
