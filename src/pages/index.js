import * as React from "react"
import Teste from "../components/teste"
import { Link } from "gatsby"
import Layout from "../components/layout"

//Isso é um componente React
export default function IndexPage(){
  return (
    <Layout pageTitle="Home">
      <h1>
        Olá Gatsby World
      </h1>
      <p>
         Estamos estudando o Gatsby
      </p>
      <Teste nome="Machado de Assis"/>
      </Layout>
  )
}

export const Head = () => <title>Home Page</title>
