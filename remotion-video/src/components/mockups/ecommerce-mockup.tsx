import { useCurrentFrame, interpolate } from "remotion";
import { ShoppingCart, Search, Star } from "lucide-react";
import { BorderBeam } from "../magic-ui/border-beam";
import { cn } from "@/lib/utils";

interface EcommerceMockupProps {
  className?: string;
  showError?: boolean;
  buttonPosition?: "bottom-right" | "top-left";
}

export const EcommerceMockup: React.FC<EcommerceMockupProps> = ({
  className,
  showError = false,
  buttonPosition = "bottom-right",
}) => {
  const frame = useCurrentFrame();

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
          https://shop.example.com/checkout
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b">
          <div className="flex items-center gap-2">
            <ShoppingCart className="w-6 h-6 text-orange-500" />
            <span className="font-bold text-xl">ShopNow</span>
          </div>
          <div className="flex items-center gap-4">
            <Search className="w-5 h-5 text-gray-500" />
            <div className="flex items-center gap-2">
              <ShoppingCart className="w-5 h-5" />
              <span className="text-sm font-medium">Cart (2)</span>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {/* Product 1 */}
          <div className="border rounded-lg p-3">
            <div className="bg-gray-100 rounded h-32 mb-2 flex items-center justify-center">
              <span className="text-4xl">🍎</span>
            </div>
            <div className="text-sm font-medium mb-1">Organic Apples</div>
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-xs text-gray-500">(234)</span>
            </div>
            <div className="font-bold text-orange-600">$4.99/lb</div>
          </div>

          {/* Product 2 */}
          <div className="border rounded-lg p-3">
            <div className="bg-gray-100 rounded h-32 mb-2 flex items-center justify-center">
              <span className="text-4xl">🍌</span>
            </div>
            <div className="text-sm font-medium mb-1">Fresh Bananas</div>
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-xs text-gray-500">(189)</span>
            </div>
            <div className="font-bold text-orange-600">$2.99/lb</div>
          </div>
        </div>

        {/* Checkout Button */}
        <div className="relative">
          <button
            className={cn(
              "px-6 py-3 rounded-lg font-medium transition-all",
              showError
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-orange-500 text-white hover:bg-orange-600",
              buttonPosition === "top-left" ? "float-left" : "float-right"
            )}
          >
            {buttonPosition === "bottom-right" ? "Add to Cart" : "Place Order"}
          </button>
        </div>

        {/* Error Overlay */}
        {showError && (
          <div className="absolute inset-0 bg-red-50/90 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 shadow-xl max-w-sm">
              <div className="flex items-center gap-3 text-red-600 mb-2">
                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center animate-bounce">
                  ⚠
                </div>
                <div className="font-bold text-lg">RPA Script Failed</div>
              </div>
              <div className="text-sm text-gray-600 mb-3">
                Element #add-to-cart not found
              </div>
              <div className="text-xs text-gray-500 font-mono bg-gray-100 p-2 rounded">
                Retrying... (5/5 failed)
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Border Beam */}
      <BorderBeam color="#FF9800" duration={4} />
    </div>
  );
};
