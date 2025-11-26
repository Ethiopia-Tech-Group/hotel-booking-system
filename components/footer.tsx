import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">H</span>
              </div>
              <span className="text-xl font-light text-foreground">Hyatt Hotel</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Experience authentic Ethiopian hospitality with modern luxury in the heart of Addis Ababa.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-medium text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/rooms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Rooms
                </Link>
              </li>
              <li>
                <Link href="/#amenities" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Amenities
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-medium text-foreground mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  Bole Road, Addis Ababa<br />Ethiopia
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <a href="tel:+251911234567" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  +251 91 123 4567
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <a href="mailto:info@luxuryhotel.et" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  info@luxuryhotel.et
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media & Hours */}
          <div>
            <h3 className="font-medium text-foreground mb-4">Follow Us</h3>
            <div className="flex gap-3 mb-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
            <div className="text-sm text-muted-foreground">
              <p className="font-medium text-foreground mb-1">Reception Hours</p>
              <p>24/7 Available</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Hyatt Hotel. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
