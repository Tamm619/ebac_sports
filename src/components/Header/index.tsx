import { useSelector } from 'react-redux'
import * as S from './styles'

import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'
import { RootState } from '../../store'

const Header = () => {
  const itensNoCarrinho = useSelector((state: RootState) => state.cart.itens)

  const valorTotal = itensNoCarrinho.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{itensNoCarrinho.length} itens no carrinho</span>
        <img src={cesta} />
        <span>valor total: {paraReal(valorTotal)}</span>
      </div>
    </S.Header>
  )
}

export default Header
