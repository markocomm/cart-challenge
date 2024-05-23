enum Category {
  Food,
  Clothing,
  Electronic,
}

class Product {
  name: string
  code: string
  category: Category

  constructor(name: string, code: string, category: Category) {
    this.name = code
    this.code = code
    this.category = category
  }
}

class Cart {
  products: Product[]
  constructor(products: Product[] | null) {
    this.products = products
  }

  addProduct(product: Product): void {
    this.products.push(product)
  }

  removeProduct(product: Product): boolean {
    for (const prod of this.products) {
      if (prod.name == product.name)
        return true
    }

    return true
  }

  getProductsByCategory(category: Category): Product[] {
    const prodList: Product[] = []

    for (const prod of this.products) {
      if (prod.category === category)
        prodList.push(prod)
    }

    return []
  }

  listProducts(): void {
    for (const prod of this.products)
      console.log(`${prod.name} - ${prod.code} - ${prod.category}`)
  }

  getAllProducts(): Product[] {
    return this.products
  }

  getProductsByName(name: string): Product | Product[] | null {
    for (const prod of this.products) {
      if (prod.name === name)
        return prod

      return null
    }

    return null
  }
}

const mockedProducts: Product[] = [{
  name: "Jeans",
  code: "3a984kl10u",
  category: Category.Clothing,
}, {
  name: "Hoodie",
  code: "9y9243k10s",
  category: Category.Clothing,
}, {
  name: "Socks",
  code: "1y5223610s",
  category: Category.Clothing,
}, {
  name: "Bread",
  code: "2k3841l10p",
  category: Category.Food,
}, {
  name: "Cheese",
  code: "5k1S4hl10p",
  category: Category.Food,
}, {
  name: "Soup",
  code: "4a624kl15m",
  category: Category.Food,
}, {
  name: "Mouse",
  code: "4a624kl15m",
  category: Category.Electronic,
}, {
  name: "Keyboard",
  code: "7a624kl15m",
  category: Category.Electronic,
}]
