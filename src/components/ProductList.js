
import React from 'react'
import { useParams ,useSearchParams,useLocation, UNSAFE_LocationContext} from 'react-router-dom'

const ProductList = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  console.log(location)
 // console.log(searchParams);
  return (
    <div>
            <h1>Product ist</h1>

      
    </div>
  )
}

export default ProductList
