import { Users, Phone, Mail, Calendar, TrendingUp } from "lucide-react";
import { BorderBeam } from "../magic-ui/border-beam";
import { cn } from "@/lib/utils";

interface CRMMockupProps {
  className?: string;
  showThinking?: boolean;
}

export const CRMMockup: React.FC<CRMMockupProps> = ({
  className,
  showThinking = false,
}) => {
  return (
    <div className={cn("relative rounded-lg overflow-hidden shadow-2xl", className)}>
      {/* Browser Chrome */}
      <div className="bg-gray-200 px-4 py-2 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 bg-white rounded px-3 py-1 text-xs text-gray-500">
          https://crm.salesapp.com/accounts
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-gray-50 flex h-[400px]">
        {/* Sidebar */}
        <div className="w-48 bg-[#00A1E0] text-white p-4">
          <div className="font-bold text-lg mb-6">SalesApp</div>
          <nav className="space-y-2">
            <div className="flex items-center gap-2 px-3 py-2 rounded hover:bg-white/10 cursor-pointer">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm">Dashboard</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 rounded bg-white/20">
              <Users className="w-4 h-4" />
              <span className="text-sm font-medium">Accounts</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 rounded hover:bg-white/10 cursor-pointer">
              <Phone className="w-4 h-4" />
              <span className="text-sm">Contacts</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 rounded hover:bg-white/10 cursor-pointer">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">Activities</span>
            </div>
          </nav>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 bg-white p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Accounts</h2>
            <button className="bg-[#00A1E0] text-white px-4 py-2 rounded text-sm font-medium">
              New Account
            </button>
          </div>

          {/* Account List */}
          <div className="space-y-2">
            {[
              { name: "Acme Corp", status: "Active", value: "$125,000" },
              { name: "TechStart Inc", status: "Prospecting", value: "$85,000" },
              { name: "Global Solutions", status: "Active", value: "$245,000" },
            ].map((account, i) => (
              <div
                key={i}
                className="border rounded-lg p-4 hover:border-[#00A1E0] transition-colors cursor-pointer"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="font-medium">{account.name}</div>
                  <div className="text-sm text-gray-500">{account.value}</div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={cn(
                    "px-2 py-1 rounded text-xs font-medium",
                    account.status === "Active" 
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  )}>
                    {account.status}
                  </span>
                  <span className="text-xs text-gray-400">Last updated 2 hours ago</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Thinking Overlay */}
      {showThinking && (
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="bg-white rounded-lg p-8 max-w-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                <div className="animate-spin">🤔</div>
              </div>
              <div className="font-bold text-lg">AI Processing...</div>
            </div>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                <span>Analyzing request...</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                <span>Planning approach...</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                <span>Navigating UI...</span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Tokens used:</span>
                <span className="font-mono font-bold">12,847</span>
              </div>
              <div className="flex justify-between text-sm mt-1">
                <span className="text-gray-500">Cost:</span>
                <span className="font-mono font-bold text-yellow-600">$0.85</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Border Beam */}
      <BorderBeam color="#00A1E0" duration={5} />
    </div>
  );
};
