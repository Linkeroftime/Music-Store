// app/product/[id]/page.js

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function ProductPage({ params }) {
  const { id } = params;

  // Fetch the product by its ID
  const product = await prisma.product.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="p-6">
      <img src={product.image} alt={product.name} className="object-contain max-w-full h-auto" />
      <h1 className="text-2xl font-semibold mt-4">{product.name}</h1>
      <p className="text-gray-600">{product.price}</p>
      <button className="mt-4 bg-blue-500 text-white p-2 rounded-md">Buy Now</button>
    </div>
  );
}
