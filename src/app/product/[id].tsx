// import { useRouter } from "next/router";
// import products from "../../data/products";
// import ProductCard from "../../components/ProductCard";

// export default function ProductPage() {
//   const router = useRouter();
//   const { id } = router.query;

//   // Fetch the product data based on the ID from the URL
//   const product = products.find((item) => item.id === id);

//   if (!product) return <p>Product not found!</p>;

//   return (
//     <div>
//       {/* Pass the product data to the ProductCard */}
//       <ProductCard product={product} />
//     </div>
//   );
// }
