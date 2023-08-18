export default function Button({ title, children, onClick, className }) {
  return (
    <button
      type="button"
      className={`hover:text-grey-700 mb-2 mr-2 mt-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:border-slate-400 hover:bg-gray-100 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 ${className}`}
      onClick={onClick}
    >
      {title || children}
    </button>
  );
}
