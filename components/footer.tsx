import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = {
  company: [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
  ],
  services: [
    { name: "Web Development", href: "/services#web-development" },
    { name: "Software Development", href: "/services#software-development" },
    { name: "App Development", href: "/services#app-development" },
    { name: "Social Media", href: "/services#social-media" },
  ],
  contact: [
    { icon: Mail, text: "info@codewhiz.co" },
    { icon: Phone, text: "+1 (954) 901-8187" },
    { icon: MapPin, text: "3015 W. Signature Dr., Davie, FL 33314" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center">
              <Image
                src="/codewhiz.png"
                alt="CodeWhiz Logo"
                width={150}
                height={40}
              />
            </Link>
            <p className="mt-4 text-sm text-gray-400 max-w-xs">
              Empowering businesses with cutting-edge digital solutions and innovative technology.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold text-green-500">Company</h3>
            <ul className="mt-4 space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-sm font-semibold text-green-500">Services</h3>
            <ul className="mt-4 space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-green-500">Contact Us</h3>
            <ul className="mt-4 space-y-3">
              {navigation.contact.map((item, index) => {
                const Icon = item.icon;
                return (
                  <li key={index} className="flex items-center gap-2 text-sm text-gray-400">
                    <Icon className="h-4 w-4" />
                    <span>{item.text}</span>
                  </li>
                );
              })}
            </ul>
            <Button className="mt-6 bg-green-600 hover:bg-green-700 w-full" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-center text-xs text-gray-400">
              &copy; {new Date().getFullYear()} CodeWhiz. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-xs text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-xs text-gray-400 hover:text-white transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}