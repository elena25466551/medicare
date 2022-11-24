import React from 'react'
import { useParams } from 'react-router-dom'

const PageNotFound= () => {
        const params = useParams();
  return (
    <div>No se puede encontrar la página "{params.pageName}"</div>
  )
}

export default PageNotFound;
