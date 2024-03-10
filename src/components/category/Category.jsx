import { CategoryCard } from "./CategoryStyles"

function Category({img,name,category}) {
  return (
    <CategoryCard>
    <img src={img} alt={category} />
    <h2>{name}</h2>
    </CategoryCard>
  )
}

export default Category