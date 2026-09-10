import { redirect } from "next/navigation"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/api/auth/[...nextauth]"

export default async function DashboardPage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/login")
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900">
          Welcome back, {session.user?.name}!
        </h1>
        <p className="text-gray-600 mt-2">
          Here's your portfolio overview
        </p>
      </div>

      {/* Dashboard Content */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-sm text-gray-600 font-medium">Total Portfolio Value</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">$0.00</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-sm text-gray-600 font-medium">Available Cash</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">$0.00</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-sm text-gray-600 font-medium">Today's Gain/Loss</p>
          <p className="text-3xl font-bold text-green-600 mt-2">$0.00</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-sm text-gray-600 font-medium">Return %</p>
          <p className="text-3xl font-bold text-purple-600 mt-2">0.00%</p>
        </div>
      </div>

      {/* Coming Soon */}
      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h2 className="text-lg font-semibold text-blue-900 mb-2">Coming Soon</h2>
        <p className="text-blue-700">
          More features coming in Phase 3: Charts, trading, and portfolio management
        </p>
      </div>
    </div>
  )
}