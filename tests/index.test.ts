import { describe, expect, test } from "vitest"
import {
  Category,
  Product,
  mockedProducts,
  Cart,
  shoppingCart,
} from "../src/index.ts"

// Comparing objects attributes to standalone lists doesn't quite work.
// Helper function 'stringify' helps

function stringify(x: any): string {
  return JSON.stringify(x)
}

// Make sure as many scenarios are taken into account
describe("product tests", () => {
  test("Initialising cart with product", () => {
    // Create product
    const pasta: Product = {
      name: "Pasta",
      code: "abc1",
      category: Category.Food,
    }

    // Create cart with product
    const PastaLoversCart: Cart = new Cart([pasta])

    // Expects the output of the cart's products to equal an array with the pasta product inside only
    return expect(stringify(PastaLoversCart.getAllProducts())).toStrictEqual(
      stringify([pasta])
    )
  })

  test("Adding product to empty cart", () => {
    // Create empty cart and separate product
    const AmazonOrder: Cart = new Cart([])

    const mouse: Product = {
      name: "Logitech",
      code: "AZN_01",
      category: Category.Electronic,
    }

    // Add mouse to order
    AmazonOrder.addProduct(mouse)

    // Like the test above, check if the output of the cart is equal to an array with the mouse inside it
    return expect(stringify(AmazonOrder.getAllProducts())).toBe(
      stringify([mouse])
    )
  })

  test("Ensure true is returned when adding product to cart", () => {
    // Create empty cart and separate product
    const AmazonOrder: Cart = new Cart([])

    const mouse: Product = {
      name: "Logitech",
      code: "AZN_01",
      category: Category.Electronic,
    }

    // Ensure true is given
    return expect(AmazonOrder.addProduct(mouse)).toBe(true)
  })

  test("Adding multiple products into cart at once", () => {
    const ChristmasShopping: Cart = new Cart([])
    ChristmasShopping.addMultipleProducts(mockedProducts)

    // Just like before, see if getting all the products works this way too

    return expect(stringify(ChristmasShopping.getAllProducts())).toBe(
      stringify(mockedProducts)
    )
  })

  test("Removing a product from a cart", () => {
    const milk: Product = {
      name: "Milk",
      code: "d4d!",
      category: Category.Food,
    }

    const weeklyShop: Cart = new Cart([milk])

    // First check that we get the "true" boolean response
    expect(weeklyShop.removeProduct(milk)).toBe(true)

    // Make sure that the element was actually removed
    return expect(stringify(weeklyShop.products)).toBe(stringify([]))
  })

  test("Removing a product from a cart of many items", () => {
    const cart: Cart = new Cart(mockedProducts)
    const drip: Product = {
      name: "Hoodie",
      code: "9y9243k10s",
      category: Category.Clothing,
    }
    cart.removeProduct(drip)

    // Expected output:
    const newList: Product[] = [
      {
        name: "Jeans",
        code: "3a984kl10u",
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

    // Make sure that the element was actually removed
    return expect(stringify(cart.products)).toBe(stringify(newList))
  })

  test("Getting products by name (exact match)", () => {
    const cart: Cart = new Cart(mockedProducts)
    const hoodie: Product = {
      name: "Hoodie",
      code: "091s9sad09",
      category: Category.Clothing,
    }
    cart.addProduct(hoodie)

    // Calculate output
    const hoodies: Product[] = cart.products.filter(
      (prod) => prod.name == "Hoodie"
    )

    return expect(stringify(cart.getProductsByName("Hoodie"))).toBe(
      stringify(hoodies)
    )
  })

  test("Get products by category", () => {
    const cart: Cart = new Cart(mockedProducts)

    // Calculate output
    const foods: Product[] = cart.products.filter(
      (prod) => prod.category == Category.Food
    )

    return expect(stringify(cart.getProductsByCategory(Category.Food))).toBe(
      stringify(foods)
    )
  })

  test("Adding duplicates to cart", () => {
    const basket: Cart = new Cart()
    const rolex: Product = {
      name: "Rolex",
      code: "RLX_001",
      category: Category.Clothing,
    }

    expect(basket.addProduct(rolex)).toBe(true) // Cart should accept rolex
    expect(basket.addProduct(rolex)).toBe(false) // Cart should reject duplicate rolex
    return expect(basket.products.length).toBe(1) // Cart should only have 1 rolex
  })

  test("Getting products by name", () => {
    const ketchup: Product = {
      name: "Ketchup",
      code: "Heinz01",
      category: Category.Food,
    }
    const bakedBeans: Product = {
      name: "Baked Beans",
      code: "beans",
      category: Category.Food,
    }
    const batteredSausage: Product = {
      name: "Battered Sausage",
      code: "sausage",
      category: Category.Food,
    }

    const basket: Cart = new Cart([ketchup, bakedBeans, batteredSausage])

    let search: Product[] = basket.getProductsByName("k")
    expect(stringify(search)).toBe(stringify([ketchup]))

    search = basket.getProductsByName("ketch")
    expect(stringify(search)).toBe(stringify([ketchup]))

    search = basket.getProductsByName("ketchup")
    expect(stringify(search)).toBe(stringify([ketchup]))

    search = basket.getProductsByName("chup")
    expect(stringify(search)).toBe(stringify([]))

    search = basket.getProductsByName("ba")
    expect(stringify(search)).toBe(stringify([bakedBeans, batteredSausage]))

    search = basket.getProductsByName("baked")
    expect(stringify(search)).toBe(stringify([bakedBeans]))

    search = basket.getProductsByName("beans")
    return expect(stringify(search)).toBe(stringify([bakedBeans]))
  })
})
