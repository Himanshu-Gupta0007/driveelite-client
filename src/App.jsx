import { useEffect, useState } from "react";

export default function App() {
  /* =====================
     STATE
  ===================== */
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("light");

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const [cart, setCart] = useState([]);

  /* =====================
     PRODUCTS
  ===================== */
  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mobile", price: 20000 },
    { id: 3, name: "Headphones", price: 3000 },
    { id: 4, name: "Keyboard", price: 1500 },
    { id: 5, name: "Mouse", price: 800 },
  ];

  /* =====================
     EFFECT
  ===================== */
  useEffect(() => {
    console.log("App Loaded");
  }, []);

  /* =====================
     TODO FUNCTIONS
  ===================== */
  const addTodo = () => {
    if (!todo.trim()) return;
    setTodos([...todos, todo]);
    setTodo("");
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const clearTodos = () => {
    setTodos([]);
  };

  /* =====================
     CART FUNCTIONS
  ===================== */
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  /* =====================
     THEME
  ===================== */
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  /* =====================
     UI
  ===================== */
  return (
    <div
      className={`min-h-screen p-6 ${
        theme === "light"
          ? "bg-gray-100 text-black"
          : "bg-gray-900 text-white"
      }`}
    >
      <div className="max-w-4xl mx-auto space-y-8">

        {/* HEADER */}
        <header className="text-center">
          <h1 className="text-3xl font-bold">
            🚀 React + Tailwind Practice App
          </h1>
          <button
            onClick={toggleTheme}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
          >
            Toggle Theme
          </button>
        </header>

        {/* COUNTER */}
        <section className="bg-white text-black p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Counter</h2>
          <p className="text-3xl mb-2">{count}</p>
          <div className="space-x-2">
            <button
              onClick={() => setCount(count + 1)}
              className="px-4 py-1 bg-green-500 text-white rounded"
            >
              +
            </button>
            <button
              onClick={() => setCount(count - 1)}
              className="px-4 py-1 bg-red-500 text-white rounded"
            >
              -
            </button>
          </div>
        </section>

        {/* TODO APP */}
        <section className="bg-white text-black p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Todo App</h2>

          <div className="flex gap-2">
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

          <ul className="mt-3 space-y-2">
            {todos.map((t, i) => (
              <li
                key={i}
                className="flex justify-between items-center bg-gray-200 px-3 py-1 rounded"
              >
                {t}
                <button
                  onClick={() => deleteTodo(i)}
                  className="text-red-600"
                >
                  ❌
                </button>
              </li>
            ))}
          </ul>

          {todos.length > 0 && (
            <button
              onClick={clearTodos}
              className="mt-3 bg-red-500 text-white px-4 py-1 rounded"
            >
              Clear All
            </button>
          )}
        </section>

        {/* PRODUCTS */}
        <section className="bg-white text-black p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-3">Products</h2>

          <div className="space-y-2">
            {products.map((p) => (
              <div
                key={p.id}
                className="flex justify-between items-center border-b pb-2"
              >
                <span>
                  {p.name} — ₹{p.price}
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
        </section>

        {/* CART */}
        <section className="bg-white text-black p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Cart</h2>

          {cart.length === 0 && <p>No items in cart</p>}

          {cart.map((item, i) => (
            <div
              key={i}
              className="flex justify-between items-center mb-1"
            >
              <span>{item.name}</span>
              <button
                onClick={() => removeFromCart(i)}
                className="text-red-600"
              >
                Remove
              </button>
            </div>
          ))}

          <hr className="my-2" />

          <p className="font-semibold">
            Total Items: {cart.length}
          </p>
          <p className="font-semibold">
            Total Price: ₹{totalPrice}
          </p>
        </section>

      </div>
    </div>
  );
}
