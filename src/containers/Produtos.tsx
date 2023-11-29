import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'
import { useGetProdutosQuery } from '../services/api'

import * as S from './styles'

const ProdutosComponent = () => {
  const { data: produtos, isLoading } = useGetProdutosQuery()

  return (
    <>
      <S.Produtos>
        {produtos?.map((produto: ProdutoType) => (
          <Produto
            key={produto.id}
            produto={produto}
            favoritar={(produto: ProdutoType): void => {
              console.log('Favoritar', produto)
            }}
            estaNosFavoritos={false}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
