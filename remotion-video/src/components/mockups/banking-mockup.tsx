import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { motion } from "framer-motion";
import { Receipt, CreditCard, TrendingUp, AlertCircle, CheckCircle, Clock } from "lucide-react";
import { BorderBeam } from "@/components/magic-ui/border-beam";
import { cn } from "@/lib/utils";

interface BankingMockupProps {
  showError?: boolean;
  scale?: number;
  className?: string;
}

export function BankingMockup({ showError = false, scale = 1, className }: BankingMockupProps) {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: "clamp" });

  const invoices = [
    { id: "INV-8821", vendor: "Office Supplies Inc.", amount: 2450.00, due: "Feb 12", status: "pending" },
    { id: "INV-8822", vendor: "Cloud Services LLC", amount: 8950.00, due: "Feb 10", status: "overdue" },
    { id: "INV-8823", vendor: "Marketing Agency", amount: 15000.00, due: "Feb 15", status: "pending" },
    { id: "INV-8824", vendor: "Software Licenses", amount: 3200.00, due: "Feb 9", status: "paid" },
    { id: "INV-8825", vendor: "Legal Services", amount: 12500.00, due: "Feb 20", status: "pending" },
  ];

  const transactions = [
    { time: "10:24 AM", desc: "Wire Transfer - Payroll", amount: -125000.00, balance: 458920.00 },
    { time: "09:15 AM", desc: "ACH Credit - Customer Payment", amount: 45000.00, balance: 583920.00 },
    { time: "Yesterday", desc: "Check #4521 - Rent", amount: -8500.00, balance: 538920.00 },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "paid": return "bg-green-100 text-green-700 border-green-300";
      case "pending": return "bg-yellow-100 text-yellow-700 border-yellow-300";
      case "overdue": return "bg-red-100 text-red-700 border-red-300";
      default: return "bg-gray-100 text-gray-700 border-gray-300";
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
  };

  return (
    <div
      className={cn("relative", className)}
      style={{
        transform: `scale(${scale})`,
        opacity,
      }}
    >
      {/* Browser Chrome */}
      <div className="bg-gray-100 rounded-t-lg px-4 py-2 flex items-center gap-2 border-b border-gray-200">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-300" />
          <div className="w-3 h-3 rounded-full bg-yellow-300" />
          <div className="w-3 h-3 rounded-full bg-green-300" />
        </div>
        <div className="flex-1 bg-white rounded px-3 py-1 text-xs text-gray-500">
          https://banking.acmebank.com/ap-automation
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-b-lg relative overflow-hidden">
        <BorderBeam size={250} duration={12} colorFrom="#10B981" colorTo="#059669" />

        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-700 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-white font-bold text-xl">Business Banking Portal</h1>
              <p className="text-green-100 text-sm">Accounts Payable Automation</p>
            </div>
            <div className="flex gap-4">
              <div className="text-center">
                <div className="text-white text-2xl font-bold">{formatCurrency(458920)}</div>
                <div className="text-green-100 text-xs">Available Balance</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Grid Layout */}
        <div className="p-6 space-y-6">
          {/* Invoice Queue */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Receipt className="w-5 h-5 text-green-600" />
                <h2 className="font-bold text-lg text-gray-900">Invoice Processing Queue</h2>
              </div>
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors">
                Process Selected
              </button>
            </div>

            <div className="space-y-2">
              {invoices.map((invoice, index) => (
                <motion.div
                  key={invoice.id}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.08 }}
                  className="glassmorphism-green border border-green-200 rounded-lg p-4 hover:border-green-400 transition-all cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 flex-1">
                      <input type="checkbox" className="w-4 h-4 text-green-600" defaultChecked={index < 2} />
                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <span className="font-bold text-gray-900">{invoice.id}</span>
                          <span className="text-gray-700">{invoice.vendor}</span>
                        </div>
                        <div className="text-xs text-gray-500 mt-1">Due: {invoice.due}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="font-bold text-lg text-gray-900">{formatCurrency(invoice.amount)}</div>
                      </div>
                      <span className={cn(
                        "px-3 py-1 rounded-full text-xs font-medium border",
                        getStatusColor(invoice.status)
                      )}>
                        {invoice.status}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom Grid: Recent Transactions + Quick Actions */}
          <div className="grid grid-cols-2 gap-6">
            {/* Recent Transactions */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-5 h-5 text-green-600" />
                <h3 className="font-bold text-gray-900">Recent Activity</h3>
              </div>
              <div className="space-y-2">
                {transactions.map((txn, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                    className="glassmorphism-green border border-green-100 rounded p-3"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-gray-900">{txn.desc}</span>
                      <span className={cn(
                        "font-bold text-sm",
                        txn.amount > 0 ? "text-green-600" : "text-gray-700"
                      )}>
                        {txn.amount > 0 ? "+" : ""}{formatCurrency(txn.amount)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {txn.time}
                      </span>
                      <span>Balance: {formatCurrency(txn.balance)}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Payment Terminal */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <CreditCard className="w-5 h-5 text-green-600" />
                <h3 className="font-bold text-gray-900">Payment Terminal</h3>
              </div>
              <div className="glassmorphism-green border border-green-200 rounded-lg p-4">
                <div className="space-y-3">
                  <div>
                    <label className="text-xs font-medium text-gray-600 mb-1 block">Payee Account</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-green-200 rounded text-sm"
                      placeholder="Account number or routing"
                      defaultValue="Office Supplies Inc."
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-gray-600 mb-1 block">Amount</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-green-200 rounded text-sm font-bold"
                      defaultValue="$2,450.00"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-gray-600 mb-1 block">Payment Date</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-green-200 rounded text-sm"
                      defaultValue="Feb 12, 2026"
                    />
                  </div>
                  <button className="w-full py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors">
                    Authorize Payment
                  </button>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-2 mt-3">
                <div className="glassmorphism-green border border-green-100 rounded p-2 text-center">
                  <div className="text-lg font-bold text-green-600">23</div>
                  <div className="text-xs text-gray-600">Pending</div>
                </div>
                <div className="glassmorphism-green border border-green-100 rounded p-2 text-center">
                  <div className="text-lg font-bold text-green-600">$42K</div>
                  <div className="text-xs text-gray-600">This Week</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Error Overlay */}
        {showError && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-red-500/10 backdrop-blur-sm flex items-center justify-center"
          >
            <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md border-2 border-red-500">
              <div className="text-5xl mb-4 text-center">⚠️</div>
              <h3 className="text-xl font-bold text-red-600 mb-2 text-center">Payment Failed</h3>
              <p className="text-gray-700 text-sm text-center mb-4">
                Button selector changed from #authorize-btn to .payment-submit-action
              </p>
              <div className="bg-red-50 rounded p-3 font-mono text-xs text-red-800">
                Error: Element not interactable (click failed)
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
