"use client";
import { useCart } from "../context/CartContext";
import Link from "next/link";
import Headbar from "../components/headbar";

export default function CartPage() {
  const { cartItems = [], removeFromCart, clearCart } = useCart();

  const total = (cartItems || []).reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <Headbar />
      <div className="p-4 max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty. <Link href="/">Go shopping</Link></p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center border-b py-2">
                <div>
                  <p>{item.name}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
                <div className="flex items-center gap-4">
                  <p>${(item.price * item.quantity).toFixed(2)}</p>
                  <button onClick={() => removeFromCart(item.id)} className="text-red-500">Remove</button>
                </div>
              </div>
            ))}
            <div className="mt-4 text-lg font-semibold">Total: ${total.toFixed(2)}</div>
            <div className="mt-4 flex gap-4">
              <button onClick={clearCart} className="bg-red-600 text-white py-1 px-3 rounded">
                Clear Cart
              </button>
              <button className="bg-green-600 text-white py-1 px-3 rounded">
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}