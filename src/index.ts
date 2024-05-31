export enum Category {
  Food,
  Clothing,
  Electronic,
}

export class Product {
  name: string
  code: string
  category: Category

  constructor(name: string, code: string, category: Category) {
    this.name = name
    this.code = code
    this.category = category
  }
}

export class Cart {
  products: Product[]

  // Accept list of products, or accept nothing to start with empty cart
  constructor(products: Product[] = []) {
    this.products = products
  }

  addProduct(product: Product): boolean {
    for (const prod of this.products) if (prod == product) return false
    this.products.push(product)
    return true
  }

  addMultipleProducts(prodList: Product[]): void {
    for (const prod of prodList) this.addProduct(prod)
  }

  removeProduct(product: Product): boolean {
    // If product is found, splice from list and return true
    for (const prod of this.products) {
      if (prod.name == product.name) {
        const index: number = this.products.indexOf(prod)
        this.products.splice(index, 1)
        return true
      }
    }
    return false
  }

  getProductsByCategory(category: Category): Product[] {
    const prodList: Product[] = []

    for (const prod of this.products) {
      if (prod.category === category) {
        prodList.push(prod)
      }
    }

    return prodList
  }

  listProducts(): void {
    for (const prod of this.products)
      console.log(`${prod.name} - ${prod.code} - ${prod.category}`)
  }

  getAllProducts(): Product[] {
    return this.products
  }

  getProductsByName(nameRaw: string): Product[] {
    const prodList: Product[] = []
    const name: string = nameRaw.toLowerCase()
    const searchWords: string[] = name.split(" ")

    for (const prod of this.products) {
      const prodName: string = prod.name.toLowerCase()
      // If exact match
      if (prodName === name) {
        prodList.push(prod)
        continue
      }

      // If product name starts with search term or if search term starts with product name
      if (prodName.startsWith(name) || name.startsWith(prodName)) {
        prodList.push(prod)
        continue
      }

      // If product name contains a WORD in search term
      for (const word of searchWords) {
        if (prodName.includes(`${word} `)) {
          prodList.push(prod)
          continue
        } else if (prodName.includes(` ${word}`)) {
          prodList.push(prod)
          continue
        }
      }
    }

    return prodList
  }
}

export const mockedProducts: Product[] = [
  {
    name: "Jeans",
    code: "3a984kl10u",
    category: Category.Clothing,
  },
  {
    name: "Hoodie",
    code: "9y9243k10s",
    category: Category.Clothing,
  },
  {
    name: "Socks",
    code: "1y5223610s",
    category: Category.Clothing,
  },
  {
    name: "Bread",
    code: "2k3841l10p",
    category: Category.Food,
  },
  {
    name: "Cheese",
    code: "5k1S4hl10p",
    category: Category.Food,
  },
  {
    name: "Soup",
    code: "4a624kl15m",
    category: Category.Food,
  },
  {
    name: "Mouse",
    code: "4a624kl15m",
    category: Category.Electronic,
  },
  {
    name: "Keyboard",
    code: "7a624kl15m",
    category: Category.Electronic,
  },
]

export const shoppingCart: Cart = new Cart()
