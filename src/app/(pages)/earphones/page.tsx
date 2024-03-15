import React from 'react'
interface Params {
  params:{
    id:string
  }
}
export default function EarPhone({params}:Params) {
  return (
    <div>{params.id}</div>
  )
}
