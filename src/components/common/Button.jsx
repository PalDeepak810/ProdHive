export default function Button({ children, variant = "primary", className = "", ...props }) {
  const styles = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    secondary: "bg-gray-100 hover:bg-gray-200 text-black",
  };

  return (
    <button
      {...props}
      className={`${styles[variant]} px-4 py-2 rounded-lg text-sm font-medium transition ${className}`}
    >
      {children}
    </button>
  );
}
