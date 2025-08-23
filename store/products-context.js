import { Children, createContext, useReducer } from "react";
import { Themes } from "../constants/styles";

const DUMMY_DATA = [
  {
    id: 1,
    product: "Product 1",
    date: new Date("2025-08-14"),
    username: "Dad",
    quantity: "5",
    description: "description 1...",
    category: "Food",
    emergency: "1",
  },
  {
    id: 2,
    product: "Product 2",
    date: new Date("2025-08-15"),
    username: "Mom",
    quantity: "3",
    description: "description 2...",
    category: "Clothes",
    emergency: "1",
  },
  {
    id: 3,
    product: "Product 3",
    date: new Date("2025-08-16"),
    username: "John",
    quantity: "7",
    description: "description 3...",
    category: "Food",
    emergency: "1",
  },
  {
    id: 4,
    product: "Product 4",
    date: new Date("2025-08-17"),
    username: "Anna",
    quantity: "2",
    description: "description 4...",
    category: "Clothes",
    emergency: "1",
  },
  {
    id: 5,
    product: "Product 5",
    date: new Date("2025-08-18"),
    username: "Mike",
    quantity: "10",
    description: "description 5...",
    category: "Food",
    emergency: "1",
  },
  {
    id: 6,
    product: "Product 6",
    date: new Date("2025-08-19"),
    username: "Sara",
    quantity: "1",
    description: "description 6...",
    category: "Clothes",
    emergency: "1",
  },
  {
    id: 7,
    product: "Product 7",
    date: new Date("2025-08-20"),
    username: "Tom",
    quantity: "8",
    description: "description 7...",
    category: "Food",
    emergency: "1",
  },
];

export const ProductsContext = createContext({
  // Initial values - won't be used, but are helpful with auto-completions.
  products: [],
  addProduct: ({ productName, quantity, date, emergency, description }) => {},
  deleteProduct: (id) => {},
  updateProduct: (
    id,
    { productName, quantity, date, emergency, description }
  ) => {},
});

function productsReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random.toString();
      return [{ ...action.payload, id: id }, ...state];
    case "UPDATE":
      const updatabeProductIndex = state.find(
        (product) => (product.id = action.payload.id)
      );
      const updatableProduct = state[updatabeProductIndex];
      const updatedProduct = { ...updatableProduct, ...action.payload.data };
      const updatedProducts = [...state];
      updatedProducts[updatableProduct] = updatedProduct;
      return updatedProducts;
    case "DELETE":
      return state.filter((product) => product.id !== action.payload.id);
    default:
      return state;
  }
}

function ProductsContextProvider({ children }) {
  const [productsState, dispatch] = useReducer(productsReducer, DUMMY_DATA); //Needs another function definition.

  function addProduct(productData) {
    dispatch({ type: "ADD", payload: productData });
  }

  function deleteProduct(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateProduct(id, productData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: productData } });
  }
  return <ProductsContext.Provider>{children}</ProductsContext.Provider>;
}

export default ProductsContextProvider;
