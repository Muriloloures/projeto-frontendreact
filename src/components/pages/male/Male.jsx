import { Products } from '../../../data/data'
import { MaleContainer } from './MaleStyle'
import { MaleShirts } from '../../helpers/male/MaleShirts'

export const Male = () => {
  const MaleProducts = Products.slice(0, 13)

  return (
      <MaleContainer>
        <h1>Camisetas Masculinas</h1>
        <div>
          {MaleProducts.map(product => (
            <MaleShirts key={product.id} product={product} />
          ))}
        </div>
      </MaleContainer>
  )
}
