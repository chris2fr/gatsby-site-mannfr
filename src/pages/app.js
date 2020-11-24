import React from "react"
import { 
  LocalizedRouter, 
  // useLocalization 
} from "gatsby-theme-i18n"
// import Name from "../components/name"

const App = ({children, ...props}) => {
  // var { locale } = useLocalization()
  // locale = (locale == "md" || !locale)?"en-FR":locale; // Static reference to repclace from gatsby-config.js
  //const locale = "en-FR"

  return (
    <LocalizedRouter basePath="/app">
    </LocalizedRouter>
  )
}

export default App
