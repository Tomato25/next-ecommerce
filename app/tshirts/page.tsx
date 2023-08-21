import Stripe from "stripe";
import Product from "../components/Product";
import Hero from "./components/Hero";

const getProducts = async () => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2022-11-15",
  });
  const products = await stripe.products.search({
    query: 'metadata[\'type\']:\'tshirt\''
  });

  const productWithPrices = await Promise.all(
    products.data.map(async (product) => {
      const prices = await stripe.prices.list({ product: product.id }); 
      return {
        id: product.id,
        name: product.name,
        unit_amount: prices.data[0].unit_amount,
        image: product.images[0],
        currency: prices.data[0].currency,
        description: product.description,
      };
    })
  );
  return productWithPrices;
};

export default async function Shoes() {
  const products = await getProducts();
  console.log(products)

  //const filteredProducts = products.filter(product =>{
    //return product.name !== "HANDBALL SPEZIAL SHOES"
  //})

  return (
    <>
      <Hero />
      <Product products={...products} />
    </>
  );
}
