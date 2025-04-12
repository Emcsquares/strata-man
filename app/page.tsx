import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, FileText, PenToolIcon as Tool, DollarSign, ChevronRight } from "lucide-react"
import Image from "next/image"
import supabase from "../supabaseClient.js"

export default function HomePage() {
  console.log(supabase)

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-pattern py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                <span className="gradient-heading">Modern Strata</span> Management Portal
              </h1>
              <p className="text-xl mb-8 text-muted-foreground">
                Simplify your strata management with our comprehensive digital solution. Access documents, report
                maintenance issues, and stay connected with your community.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/forms">Try Our Forms</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/maintenance">Report an Issue</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-sky-500 rounded-lg blur opacity-25"></div>
                <div className="relative bg-background rounded-lg shadow-xl overflow-hidden">
                  <Image
                    src="/home_img.png"
                    alt="Strata Building"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <span className="gradient-heading">Key Features</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to manage your strata property efficiently
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-hover">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Document Management</CardTitle>
                <CardDescription>Access all your strata documents in one place</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Easily browse, search, and download important documents like by-laws, meeting minutes, and financial
                  reports.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost" className="w-full group">
                  <Link href="/documents" className="flex items-center justify-between w-full">
                    View Documents
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Tool className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Maintenance Requests</CardTitle>
                <CardDescription>Report and track maintenance issues</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Submit maintenance requests, track their progress, and receive updates when issues are resolved.</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost" className="w-full group">
                  <Link href="/maintenance" className="flex items-center justify-between w-full">
                    Report an Issue
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Financial Management</CardTitle>
                <CardDescription>Track levies and financial reports</CardDescription>
              </CardHeader>
              <CardContent>
                <p>View levy information, payment history, and access detailed financial reports for transparency.</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost" className="w-full group">
                  <Link href="/financial" className="flex items-center justify-between w-full">
                    View Finances
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Forms Section */}
      <section className="bg-accent py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <span className="gradient-heading">Interactive Forms</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience our user-friendly forms for various strata management needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="card-hover form-shine">
              <CardHeader>
                <CardTitle>GET Request Forms</CardTitle>
                <CardDescription>Simple forms for retrieving information</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Our GET request forms are perfect for simple queries and information retrieval. Data is appended to
                  the URL as query parameters.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-primary mr-2" />
                    <span>Quick and easy to use</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-primary mr-2" />
                    <span>Ideal for simple data retrieval</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-primary mr-2" />
                    <span>Bookmarkable results</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-primary hover:bg-primary/90">
                  <Link href="/forms#get-form">Try GET Form</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="card-hover form-shine">
              <CardHeader>
                <CardTitle>POST Request Forms</CardTitle>
                <CardDescription>Secure forms for submitting data</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Our POST request forms are designed for secure data submission. Data is sent in the request body, not
                  visible in the URL.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-primary mr-2" />
                    <span>More secure for sensitive data</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-primary mr-2" />
                    <span>Supports larger data submissions</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-primary mr-2" />
                    <span>Ideal for form submissions</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-primary hover:bg-primary/90">
                  <Link href="/forms#post-form">Try POST Form</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-600 to-sky-500 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to simplify your strata management?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join our platform today and experience the difference of modern strata management.
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
              <Link href="/login">Get Started Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

