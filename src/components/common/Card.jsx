export default function Card({ children, className = "" }) {
    return (
        <div className={`bg-white p-5 rounded-xl shadow-sm ${className}`}>
            {children}
        </div>
    );
}
