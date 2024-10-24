import { Link } from "gatsby"
import * as React from "react"
import Layout from "../components/layout"

//Isso é um componente React
export default function About(){
  return (
    <Layout pageTitle="Sobre">
      <hr/>
      <p>
         Estamos estudando o Gatsby
      </p>
      </Layout>
  )
}

export const Head = () => <title>Sobre</title>
