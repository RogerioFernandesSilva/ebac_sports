import { Produto as ProdutoType } from '../types'
import Produto from '../components/Produto'
import * as S from './styles'

const ProdutosComponent = ({ produtos }: { produtos: ProdutoType[] }) => {
  return (
    <S.Produtos>
      {produtos.map((produto) => (
        <Produto key={produto.id} produto={produto} />
      ))}
    </S.Produtos>
  )
}

export default ProdutosComponent
