export default function Home() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Welcome to Portfolio Tracker Pro
        </h1>
        <p className="text-xl text-gray-600">
          Manage your investments and track your portfolio performance
        </p>
      </div>

      {/* Placeholder Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="font-semibold text-gray-900 mb-2">Total Value</h3>
          <p className="text-3xl font-bold text-blue-600">$0</p>
          <p className="text-sm text-gray-500 mt-2">Coming soon</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="font-semibold text-gray-900 mb-2">Total Gain/Loss</h3>
          <p className="text-3xl font-bold text-green-600">$0</p>
          <p className="text-sm text-gray-500 mt-2">Coming soon</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="font-semibold text-gray-900 mb-2">Return %</h3>
          <p className="text-3xl font-bold text-purple-600">0%</p>
          <p className="text-sm text-gray-500 mt-2">Coming soon</p>
        </div>
      </div>
    </div>
  )
}