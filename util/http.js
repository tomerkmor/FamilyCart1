import axios from "axios";

const BACKEND_URL =
  "https://react-native-course-949c1-default-rtdb.europe-west1.firebasedatabase.app/";

export async function storeProduct(productData) {
  const response = await axios.post(
    `${BACKEND_URL}/products.json`,
    productData
  );
  const id = response.data.name; // Holds the id generated my FireBase.
  return id;
}

export async function fetchProducts() {
  const response = await axios.get(`${BACKEND_URL}/products.json`);

  const products = [];
  for (const key in response.data) {
    const productObj = {
      id: key,
      product: response.data[key].product,
      date: new Date(response.data[key].date),
      username: response.data[key].username,
      quantity: response.data[key].quantity,
      description: response.data[key].description,
      category: response.data[key].category,
      emergency: response.data[key].emergency,
    };
    products.push(productObj);
  }
  return products;
}

export async function updateProduct(productData) {
  return axios.put(
    `${BACKEND_URL}/products/${productData.id}.json`,
    productData
  );
}

export async function deleteProduct(id) {
  return axios.delete(`${BACKEND_URL}/products/${id}.json`);
}

