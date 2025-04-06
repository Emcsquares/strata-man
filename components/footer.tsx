import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Phone, MapPin, ArrowRight, Github, Twitter, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t py-12 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="gradient-heading">Strata</span>
              <span className="ml-1">Portal</span>
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Managing your strata property efficiently and transparently.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center"
                >
                  <ArrowRight className="h-3 w-3 mr-2" />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/committee"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center"
                >
                  <ArrowRight className="h-3 w-3 mr-2" />
                  Committee
                </Link>
              </li>
              <li>
                <Link
                  href="/documents"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center"
                >
                  <ArrowRight className="h-3 w-3 mr-2" />
                  Documents
                </Link>
              </li>
              <li>
                <Link
                  href="/maintenance"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center"
                >
                  <ArrowRight className="h-3 w-3 mr-2" />
                  Maintenance
                </Link>
              </li>
              <li>
                <Link
                  href="/forms"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center"
                >
                  <ArrowRight className="h-3 w-3 mr-2" />
                  Forms
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">123 Strata Street, Sydney, NSW 2000</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@strataportal.com.au" className="text-sm hover:text-primary transition-colors">
                  info@strataportal.com.au
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <a href="tel:+61234567890" className="text-sm hover:text-primary transition-colors">
                  (02) 3456 7890
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to our newsletter for updates and announcements.
            </p>
            <div className="flex space-x-2">
              <Input type="email" placeholder="Your email" className="h-9" />
              <Button size="sm" className="bg-primary hover:bg-primary/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Strata Portal. All rights reserved.</p>
          <p className="mt-1 flex justify-center space-x-4">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="/accessibility" className="hover:text-primary transition-colors">
              Accessibility
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

