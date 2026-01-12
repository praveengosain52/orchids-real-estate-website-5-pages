import Link from "next/link";
import { Home, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-zinc-50 border-t border-zinc-200 dark:bg-zinc-900/50 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold text-zinc-900 dark:text-zinc-50">
              <Home className="w-6 h-6 text-blue-600" />
              <span>LuxeEstate</span>
            </Link>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Your trusted partner in finding the perfect home. We provide the best real estate services with a touch of luxury.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-zinc-400 hover:text-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-blue-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-blue-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-blue-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50 uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-zinc-600 hover:text-blue-600 dark:text-zinc-400">Home</Link>
              </li>
              <li>
                <Link href="/listings" className="text-sm text-zinc-600 hover:text-blue-600 dark:text-zinc-400">Listings</Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-zinc-600 hover:text-blue-600 dark:text-zinc-400">About Us</Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-zinc-600 hover:text-blue-600 dark:text-zinc-400">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50 uppercase tracking-wider mb-4">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-zinc-600 hover:text-blue-600 dark:text-zinc-400">Buying Guide</Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-zinc-600 hover:text-blue-600 dark:text-zinc-400">Selling Guide</Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-zinc-600 hover:text-blue-600 dark:text-zinc-400">Market Trends</Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-zinc-600 hover:text-blue-600 dark:text-zinc-400">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50 uppercase tracking-wider mb-4">
              Contact Us
            </h3>
            <ul className="space-y-2">
              <li className="text-sm text-zinc-600 dark:text-zinc-400">
                123 Luxury Lane, Beverly Hills, CA 90210
              </li>
              <li className="text-sm text-zinc-600 dark:text-zinc-400">
                +1 (555) 123-4567
              </li>
              <li className="text-sm text-zinc-600 dark:text-zinc-400">
                contact@luxeestate.com
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800 text-center">
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} LuxeEstate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
