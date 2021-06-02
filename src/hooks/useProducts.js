import React, {useState} from 'react'

function useProducts(){
  const  [produtos, setProdutos] = useState([])

  function addProdutos(value, quantidade){
    setProdutos([...produtos, {produto:value, quantidadesProduto: quantidade} ])
  }
  return [produtos, addProdutos]
}

export default useProducts