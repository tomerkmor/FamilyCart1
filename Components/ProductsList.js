import { FlatList } from "react-native";
import Product from "./Product";

const DUMMY_DATA = [
  {
    id: 1,
    product: "Product 1",
    date: new Date("2025-08-14"),
    username: "Dad",
    quantity: "5",
    description: "description 1...",
  },
  {
    id: 2,
    product: "Product 2",
    date: new Date("2025-08-15"),
    username: "Mom",
    quantity: "3",
    description: "description 2...",
  },
  {
    id: 3,
    product: "Product 3",
    date: new Date("2025-08-16"),
    username: "John",
    quantity: "7",
    description: "description 3...",
  },
  {
    id: 4,
    product: "Product 4",
    date: new Date("2025-08-17"),
    username: "Anna",
    quantity: "2",
    description: "description 4...",
  },
  {
    id: 5,
    product: "Product 5",
    date: new Date("2025-08-18"),
    username: "Mike",
    quantity: "10",
    description: "description 5...",
  },
  {
    id: 6,
    product: "Product 6",
    date: new Date("2025-08-19"),
    username: "Sara",
    quantity: "1",
    description: "description 6...",
  },
  {
    id: 7,
    product: "Product 7",
    date: new Date("2025-08-20"),
    username: "Tom",
    quantity: "8",
    description: "description 7...",
  },
];

function ProductsList() {
  return (
    <FlatList
      data={DUMMY_DATA}
      renderItem={({ item }) => <Product productData={item} />}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}

export default ProductsList;
