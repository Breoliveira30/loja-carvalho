"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { searchProducts } from "@/lib/products"
import { Search } from "lucide-react"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"

interface SearchDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
  const [query, setQuery] = useState("")
  const router = useRouter()

  const results = query.length > 0 ? searchProducts(query) : []

  const handleSelect = (productId: string) => {
    onOpenChange(false)
    router.push(`/produto/${productId}`)
    setQuery("")
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] p-0 gap-0">
        {/* TÍTULO OCULTO PARA ACESSIBILIDADE */}
        <VisuallyHidden>
          <DialogTitle>Buscar produtos</DialogTitle>
        </VisuallyHidden>

        <div className="sticky top-0 bg-white border-b p-4 flex items-center gap-3">
          <Search className="h-5 w-5 text-gray-400" />
          <Input
            placeholder="Buscar produtos... (ex: Sofá, Mesa, Cama)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="border-0 focus-visible:ring-0 text-base"
            autoFocus
          />
        </div>

        <div className="overflow-y-auto max-h-[calc(80vh-80px)] p-4">
          {results.length === 0 && query.length > 0 && (
            <div className="text-center py-12 text-gray-500">
              <p className="text-lg font-medium mb-2">Nenhum produto encontrado</p>
              <p className="text-sm">
                Tente buscar por: Sofá, Mesa, Cama, Guarda-Roupa, etc.
              </p>
            </div>
          )}

          {results.length === 0 && query.length === 0 && (
            <div className="text-center py-12 text-gray-400">
              <p className="text-lg font-medium mb-2">Digite para buscar produtos</p>
              <p className="text-sm">
                Exemplos: Sofá, Mesa de Jantar, Cama Box...
              </p>
            </div>
          )}

          {results.length > 0 && (
            <div className="space-y-3">
              {results.map((product) => {
                const hasDiscount =
                  product.originalPrice &&
                  product.originalPrice > product.price

                const discountPercentage = hasDiscount
                  ? Math.round(
                      ((product.originalPrice! - product.price) /
                        product.originalPrice!) *
                        100
                    )
                  : 0

                return (
                  <button
                    key={product.id}
                    onClick={() => handleSelect(product.id)}
                    className="w-full flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors text-left"
                  >
                    <div className="relative flex-shrink-0">
                      <img
                        src={product.images[0] || "/placeholder.svg"}
                        alt={product.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      {hasDiscount && (
                        <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                          -{discountPercentage}%
                        </div>
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 truncate">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-500 mb-1">
                        {product.category}
                      </p>
                      <div className="flex items-center gap-2">
                        <span
                          className={`font-bold ${
                            hasDiscount ? "text-red-600" : "text-amber-600"
                          }`}
                        >
                          R$ {product.price.toFixed(2).replace(".", ",")}
                        </span>
                        {hasDiscount && (
                          <span className="text-sm text-gray-400 line-through">
                            R${" "}
                            {product.originalPrice!
                              .toFixed(2)
                              .replace(".", ",")}
                          </span>
                        )}
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
