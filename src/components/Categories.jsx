import React from 'react'
import '../assets/css/components/categories.css'

function Categories( {children ,title}){
return <> <h2 className="categories__title">{title}</h2>{children}</>

}


export default Categories