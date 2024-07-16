const AdminCard = () => {
  const handleDelete = () => {
    // onDelete(admin.id); //
  };

  return (
    <div className="grid md:grid-cols-2 bg-gray-100 grid-cols-1 gap-4 h-full w-full p-20 ">
      <div className="h-40 w-full">
        <div className="bg-white shadow-md rounded-lg p-4 mb-4 flex justify-between items-center">
          <div>
            <p className="text-lg font-semibold">Full Name</p>
            <p className="text-lg font-semibold">admin email</p>
          </div>
          <button
            onClick={handleDelete}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminCard;
