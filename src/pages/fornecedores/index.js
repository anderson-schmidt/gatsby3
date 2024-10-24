import * as React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"

//Isso é um componente React
export default function IndexFornecedores(){
  return (
    <Layout pageTitle="Fornecedores">
      < hr/>
      <p>Essa é a tela de Fornecedores</p>
      <hr/>
      </Layout>
  )
}

export const Head = () => <title>Fornecedores</title>
