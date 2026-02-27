export default function Dashboard() {
  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold mb-6">Creator Dashboard</h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-gray-900 p-6 rounded-xl">
          <h3>Total Earnings</h3>
          <p className="text-2xl font-bold">KSh 0</p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl">
          <h3>Platform Fee (5%)</h3>
          <p className="text-2xl font-bold">Active</p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl">
          <h3>Withdraw</h3>
          <button className="bg-yellow-500 text-black px-4 py-2 rounded-lg mt-2">
            Request Withdrawal
          </button>
        </div>
      </div>
    </div>
  );
}
