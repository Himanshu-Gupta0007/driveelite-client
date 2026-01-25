import { useState, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("light");
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mobile", price: 20000 },
    { id: 3, name: "Headphones", price: 3000 },
    { id: 4, name: "Keyboard", price: 1500 },
    { id: 5, name: "Mouse", price: 800 },
  ];

  useEffect(() => {
    console.log("App Rendered");
  }, []);

  const addTodo = () => {
    if (!todo.trim()) return;
    setTodos([...todos, todo]);
    setTodo("");
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const totalPrice = cart.reduce((a, b) => a + b.price, 0);

  return (
    <div
      className={`min-h-screen p-6 ${
        theme === "light" ? "bg-gray-100 text-black" : "bg-gray-900 text-white"
      }`}
    >
      <div className="max-w-3xl mx-auto space-y-6">

        <h1 className="text-3xl font-bold text-center">
          🚀 BIG REACT + TAILWIND APP
        </h1>

        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Toggle Theme
        </button>

        {/* COUNTER */}
        <div className="bg-white text-black p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Counter</h2>
          <p className="text-2xl">{count}</p>
          <div className="space-x-2">
            <button
              onClick={() => setCount(count + 1)}
              className="px-3 py-1 bg-green-500 text-white rounded"
            >
              +
            </button>
            <button
              onClick={() => setCount(count - 1)}
              className="px-3 py-1 bg-red-500 text-white rounded"
            >
              -
            </button>
          </div>
        </div>

        {/* TODO */}
        <div className="bg-white text-black p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Todo App</h2>
          <div className="flex gap-2 mt-2">
            <input
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
              className="border p-2 flex-1 rounded"
              placeholder="Enter todo"
            />
            <button
              onClick={addTodo}
              className="bg-blue-500 text-white px-4 rounded"
            >
              Add
            </button>
          </div>

          <ul className="mt-3 space-y-1">
            {todos.map((t, i) => (
              <li
                key={i}
                className="flex justify-between bg-gray-200 px-2 py-1 rounded"
              >
                {t}
                <button
                  onClick={() =>
                    setTodos(todos.filter((_, index) => index !== i))
                  }
                >
                  ❌
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* PRODUCTS */}
        <div className="bg-white text-black p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Products</h2>
          {products.map((p) => (
            <div
              key={p.id}
              className="flex justify-between items-center mt-2"
            >
              <span>
                {p.name} - ₹{p.price}
              </span>
              <button
                onClick={() => addToCart(p)}
                className="bg-purple-500 text-white px-3 py-1 rounded"
              >
                Add
              </button>
            </div>
          ))}
        </div>

        {/* CART */}
        <div className="bg-white text-black p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Cart</h2>
          <p>Total Items: {cart.length}</p>
          <p>Total Price: ₹{totalPrice}</p>
        </div>

      </div>
    </div>
  );
}
