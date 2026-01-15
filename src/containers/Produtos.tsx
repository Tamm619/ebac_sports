import { useDispatch, useSelector } from 'react-redux'
import Produto from '../components/Produto'
import * as S from './styles'
import { adicionarFavorito, removerFavorito } from '../store/favoritesSlice'

import { useGetProdutosQuery } from '../store/api'
import { adicionarAoCarrinho } from '../store/cartSlice'
import { RootState } from '../store'

const ProdutosComponent = () => {
  const dispatch = useDispatch()

  // RTK Query
  const { data: produtos = [], isLoading } = useGetProdutosQuery()

  // Redux state
  const favoritos = useSelector((state: RootState) => state.favoritos.itens)

  const produtoEstaNosFavoritos = (produto: any) => {
    return favoritos.some((f) => f.id === produto.id)
  }

  const favoritarProduto = (produto: any) => {
    if (produtoEstaNosFavoritos(produto)) {
      dispatch(removerFavorito(produto.id))
    } else {
      dispatch(adicionarFavorito(produto))
    }
  }

  if (isLoading) {
    return <h3>Carregando produtos...</h3>
  }

  return (
    <S.Produtos>
      {produtos.map((produto) => (
        <Produto
          key={produto.id}
          produto={produto}
          estaNosFavoritos={produtoEstaNosFavoritos(produto)}
          favoritar={() => favoritarProduto(produto)}
          aoComprar={() => dispatch(adicionarAoCarrinho(produto))}
        />
      ))}
    </S.Produtos>
  )
}

export default ProdutosComponent
