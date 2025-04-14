// src/components/Loader.jsx
const Loader = () => {
    return (
        <div className="flex justify-center items-center h-32">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-100"></div>
        </div>
    );
};

export default Loader;