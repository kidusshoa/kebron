import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../../../../../lib/services/user";

const AdminCard = () => {
  const { isLoading, data, error } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });
  const handleDelete = () => {
    // onDelete(admin.id); //
  };

  if (isLoading || !data || error) {
    return <div>Loading....</div>;
  }

  return (
    <div className="grid md:grid-cols-2 bg-gray-100 grid-cols-1 gap-4 h-full w-full p-20 ">
      {data.map((user: any) => (
        <div key={user.id} className="h-40 w-full">
          <div className="bg-white shadow-md rounded-lg p-4 mb-4 flex justify-between ">
            <div>
              <p className="text-lg font-semibold">{user.full_name}</p>
              <p className="text-lg font-semibold">{user.email}</p>
            </div>
            <button
              onClick={handleDelete}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminCard;
