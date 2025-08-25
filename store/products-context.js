import { Children, createContext, useReducer } from "react";
import { Themes } from "../constants/styles";

const DUMMY_DATA = [
  {
    id: 1,
    product: "Apple",
    date: new Date("2025-08-14"),
    username: "Dad",
    quantity: "5",
    description: "Fresh red apples",
    category: "Food",
    emergency: "1",
  },
  {
    id: 2,
    product: "T-Shirt",
    date: new Date("2025-08-15"),
    username: "Mom",
    quantity: "3",
    description: "Cotton T-shirts",
    category: "Clothes",
    emergency: "1",
  },
  {
    id: 3,
    product: "Banana",
    date: new Date("2025-08-16"),
    username: "John",
    quantity: "7",
    description: "Ripe bananas",
    category: "Food",
    emergency: "1",
  },
  {
    id: 4,
    product: "Jeans",
    date: new Date("2025-08-17"),
    username: "Anna",
    quantity: "2",
    description: "Blue denim jeans",
    category: "Clothes",
    emergency: "1",
  },
  {
    id: 5,
    product: "Bread",
    date: new Date("2025-08-18"),
    username: "Mike",
    quantity: "10",
    description: "Whole grain bread",
    category: "Food",
    emergency: "1",
  },
  {
    id: 6,
    product: "Jacket",
    date: new Date("2025-08-19"),
    username: "Sara",
    quantity: "1",
    description: "Winter jacket",
    category: "Clothes",
    emergency: "1",
  },
  {
    id: 7,
    product: "Orange",
    date: new Date("2025-08-20"),
    username: "Tom",
    quantity: "8",
    description: "Fresh oranges",
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
  console.log("log from ctx: PAYLOAD = ", action.payload);
  switch (action.type) {
    case "ADD":
      const id = new Date().toLocaleDateString() + Math.random().toString();
      const username = "TEST";
      const category = "ADD CATEGORY FIELD";
      if (!action.payload.date) {
        action.payload.date = new Date();
      }
      return [{ ...action.payload, id, username }, ...state];
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
  const [productsState, dispatch] = useReducer(productsReducer, DUMMY_DATA); //Needs another function definition.

  function addProduct(productData) {
    console.log("ADDING...");
    dispatch({ type: "ADD", payload: productData });
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
