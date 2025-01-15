import Link from "next/link";

export default function Cart() {
    return (
      <div className="min-h-screen bg-gray-100">
        <header className="bg-[url('/cart.png.png')] bg-cover bg-center h-60 flex items-center justify-center">
          <h1 className="text-center text-4xl font-bold"></h1>
        </header>
  
        <main className="max-w-7xl mx-auto px-4 py-10">
          <div className="grid grid-cols-12 gap-6">
            {/* Cart Items Table */}
            <div className="col-span-12 md:col-span-8 bg-white p-5 shadow-md rounded-md">
              <table className="w-full text-left">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-3 px-4">Product</th>
                    <th className="py-3 px-4">Price</th>
                    <th className="py-3 px-4">Quantity</th>
                    <th className="py-3 px-4">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-4 px-4">Asgaard Sofa</td>
                    <td className="py-4 px-4">Rs. 250,000.00</td>
                    <td className="py-4 px-4">
                      <input type="number" value="1" className="w-16 border px-2 py-1" min="1" />
                    </td>
                    <td className="py-4 px-4">Rs. 250,000.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
  
            {/* Cart Totals Section */}
            <div className="col-span-12 md:col-span-4 bg-white p-5 shadow-md rounded-md">
              <h2 className="text-xl font-bold mb-4">Cart Totals</h2>
              <div className="flex justify-between py-2">
                <span>Subtotal:</span>
                <span>Rs. 250,000.00</span>
              </div>
              <div className="flex justify-between py-2 font-bold">
                <span>Total:</span>
                <span>Rs. 250,000.00</span>
              </div>
              <button className="w-full mt-4 bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600">
                <Link  href="/checkout">
                Proceed to Checkout
                </Link>
              </button>
            </div>
          </div>
        </main>
        <img src="nero.png.png"
      alt="all"
      width={2000}
      height={700}>
      </img>
  
       
      </div>
    );
  }
  









