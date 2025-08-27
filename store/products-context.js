import { Children, createContext, useReducer } from "react";
import { Themes } from "../constants/styles";

const DUMMY_DATA = [
  {
    id: 1,
    product: { value: "Apple", required: true, isValid: true },
    date: new Date("2025-08-14"),
    username: "Dad",
    quantity: { value: "5", required: true, isValid: true },
    description: { value: "Fresh red apples", required: false, isValid: true },
    category: { value: "Food", required: true, isValid: true },
    emergency: "1",
  },
  {
    id: 2,
    product: { value: "T-Shirt", required: true, isValid: true },
    date: new Date("2025-08-15"),
    username: "Mom",
    quantity: { value: "3", required: true, isValid: true },
    description: { value: "Cotton T-shirts", required: false, isValid: true },
    category: { value: "Clothes", required: true, isValid: true },
    emergency: "1",
  },
  {
    id: 3,
    product: { value: "Banana", required: true, isValid: true },
    date: new Date("2025-08-16"),
    username: "John",
    quantity: { value: "7", required: true, isValid: true },
    description: { value: "Ripe bananas", required: false, isValid: true },
    category: { value: "Food", required: true, isValid: true },
    emergency: "1",
  },
  {
    id: 4,
    product: { value: "Jeans", required: true, isValid: true },
    date: new Date("2025-08-17"),
    username: "Anna",
    quantity: { value: "2", required: true, isValid: true },
    description: { value: "Blue denim jeans", required: false, isValid: true },
    category: { value: "Clothes", required: true, isValid: true },
    emergency: "1",
  },
  {
    id: 5,
    product: { value: "Bread", required: true, isValid: true },
    date: new Date("2025-08-18"),
    username: "Mike",
    quantity: { value: "10", required: true, isValid: true },
    description: { value: "Whole grain bread", required: false, isValid: true },
    category: { value: "Food", required: true, isValid: true },
    emergency: "1",
  },
  {
    id: 6,
    product: { value: "Jacket", required: true, isValid: true },
    date: new Date("2025-08-19"),
    username: "Sara",
    quantity: { value: "1", required: true, isValid: true },
    description: { value: "Winter jacket", required: false, isValid: true },
    category: { value: "Clothes", required: true, isValid: true },
    emergency: "1",
  },
  {
    id: 7,
    product: { value: "Orange", required: true, isValid: true },
    date: new Date("2025-08-20"),
    username: "Tom",
    quantity: { value: "8", required: true, isValid: true },
    description: { value: "", required: false, isValid: true },
    category: { value: "Food", required: true, isValid: true },
  },
];

export const ProductsContext = createContext({
  // Initial values - won't be used, but are helpful with auto-completions.
  products: [],
  addProduct: ({ productName, quantity, date, emergency, description }) => {},
  setProducts: (products) => {},
  deleteProduct: (id) => {},
  updateProduct: (
    id,
    { productName, quantity, date, emergency, description }
  ) => {},
});

function productsReducer(state, action) {
  console.log("log from ctx: PAYLOAD = ", action.payload);
  switch (action.type) {
    case "ADD":
      const username = "TEST"; // FIX IT... - MAKE IT USABLE
      const category = "NULL"; // FIX IT... - MAKE IT USABLE
      if (!action.payload.date) {
        action.payload.date = new Date();
      }
      return [{ ...action.payload, username, category }, ...state];
    case "SET":
      // in the future - filter by filter...
      const inverted = action.payload.reverse();
      return inverted;
    case "UPDATE":
      console.log("payload:", action.payload);
      const updatableProductIndex = state.findIndex(
        (product) => product.id === action.payload.data.id
      );
      if (updatableProductIndex === -1) return state;
      const updatableProduct = state[updatableProductIndex];
      const updatedProduct = { ...updatableProduct, ...action.payload.data };
      const updatedProducts = [...state];
      updatedProducts[updatableProductIndex] = updatedProduct;
      return updatedProducts;
    case "DELETE":
      return state.filter((product) => product.id !== action.payload.id);
    default:
      return state;
  }
}

function ProductsContextProvider({ children }) {
  const [productsState, dispatch] = useReducer(productsReducer, []); //Needs another function definition.

  function addProduct(productData) {
    console.log("ADDING...");
    dispatch({ type: "ADD", payload: productData });
  }

  function setProducts(products) {
    console.log("SETTING...");
    dispatch({ type: "SET", payload: products });
  }
  function deleteProduct(id) {
    console.log("DELETING...");
    dispatch({ type: "DELETE", payload: id });
  }

  function updateProduct(productData) {
    console.log("UPDATING...");
    dispatch({ type: "UPDATE", payload: { data: productData } });
  }

  const value = {
    products: productsState,
    addProduct: addProduct,
    setProducts: setProducts,
    deleteProduct: deleteProduct,
    updateProduct: updateProduct,
  };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductsContextProvider;
