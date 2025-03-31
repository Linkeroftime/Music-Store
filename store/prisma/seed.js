const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.product.deleteMany();

  const products = [
    {
      id: 1,
      name: "Acoustic Guitar",
      price: "$300",
      image: "https://www.gryphonstrings.com/cdn/shop/files/1711981_540x.jpg?v=1742806796",
    },
    {
      id: 2,
      name: "Electric Guitar",
      price: "$500",
      image: "https://media.istockphoto.com/id/178087719/photo/electric-guitar.jpg?s=612x612&w=0&k=20&c=jjG3Hy7quzWUNhAJMNNFk9z_x7W4qKzwFeNnjx5GbDY=",
    },
    {
      id: 3,
      name: "Drum Set",
      price: "$700",
      image: "https://media.istockphoto.com/id/521607340/photo/drum-kit-isolated.jpg?s=612x612&w=0&k=20&c=wttsl4ocIsrBuQ6tP91PHq91CwVnZ5CQU31yqKg9xjA=",
    },
    {
      id: 4,
      name: "Keyboard",
      price: "$400",
      image: "https://www.hermesmusic.com/cdn/shop/files/Casio-CT-X3000-61-Key-Portable-Keyboard-keyboard-www_hermesmusic_com.jpg?v=1713989734&width={width}",
    },
    {
      id: 5,
      name: "Violin",
      price: "$350",
      image: "https://media.gettyimages.com/id/BC4990-001/photo/violin.jpg?s=612x612&w=0&k=20&c=39XB3PbN8cXUz4f6Ukx2AAc8PKFYxwq42of6MgcDnJs=",
    },
  ];

  for (let product of products) {
    await prisma.product.create({
      data: product,
    });
  }

  console.log('Database has been seeded.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
