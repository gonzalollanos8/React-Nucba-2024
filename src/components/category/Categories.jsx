import {categories} from '../../data/categories'
import { CategoryContainer, CategoryWrap } from './CategoryStyles'
import Category from './Category/'

function Categories() {
  return (
    <CategoryContainer>
      <h2>Categories</h2>

      <CategoryWrap>
        {categories.map(cat =>(
          <Category key={cat.id} {...cat}/>
        )
        )}
      </CategoryWrap>
    
    </CategoryContainer>
  )
}

export default Categories