import Checkout from "@/components/Checkout";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-white">
      <Checkout />
    </div>
  );
}
