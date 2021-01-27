import React, { ReactNode } from 'react'
import { useSearchPage } from 'vtex.search-page-context/SearchPageContext'

interface ShelfContainerProps {
  children: ReactNode
}

function ShelfContainer({ children }: ShelfContainerProps) {
  const { searchQuery } = useSearchPage()

  const { products } = searchQuery?.data?.productSearch ?? {}

  const hasProducts = !!(products && products.length > 0)

  return <>{hasProducts && children}</>
}

export default ShelfContainer
