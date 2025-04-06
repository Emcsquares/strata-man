import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function CommitteePage() {
  const committeeMembers = [
    {
      name: "Sarah Johnson",
      role: "Chairperson",
      bio: "Sarah has been a resident for 5 years and works in corporate governance. She brings valuable leadership experience to the committee.",
      email: "sarah.johnson@example.com",
      phone: "(02) 9876 5432",
      unit: "Unit 301",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Michael Chen",
      role: "Secretary",
      bio: "Michael has a background in administration and keeps detailed records of all strata matters. He's been on the committee for 3 years.",
      email: "michael.chen@example.com",
      phone: "(02) 9876 5433",
      unit: "Unit 205",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Priya Patel",
      role: "Treasurer",
      bio: "Priya is a certified accountant who manages the strata finances with precision. She ensures transparency in all financial matters.",
      email: "priya.patel@example.com",
      phone: "(02) 9876 5434",
      unit: "Unit 112",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "David Wilson",
      role: "Committee Member",
      bio: "David has expertise in building maintenance and helps coordinate repairs and improvements to the property.",
      email: "david.wilson@example.com",
      phone: "(02) 9876 5435",
      unit: "Unit 408",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Emma Thompson",
      role: "Committee Member",
      bio: "Emma has a background in community management and focuses on building a positive community atmosphere.",
      email: "emma.thompson@example.com",
      phone: "(02) 9876 5436",
      unit: "Unit 217",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "James Rodriguez",
      role: "Committee Member",
      bio: "James has experience in project management and helps oversee major building projects and renovations.",
      email: "james.rodriguez@example.com",
      phone: "(02) 9876 5437",
      unit: "Unit 509",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">
          <span className="gradient-heading">Committee Members</span>
        </h1>
        <p className="text-xl text-muted-foreground">Meet the dedicated team managing our strata community</p>
      </div>

      <div className="mb-12 bg-accent p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">About the Strata Committee</h2>
        <p className="mb-4">
          Under the NSW Strata Schemes Management Act (2015), our strata committee is responsible for the day-to-day
          management of the building. The committee consists of elected owners who volunteer their time to ensure our
          building is well-maintained and our community thrives.
        </p>
        <p className="mb-4">The committee meets regularly to discuss and make decisions on matters such as:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Building maintenance and repairs</li>
          <li>Financial management of strata funds</li>
          <li>Enforcement of by-laws</li>
          <li>Addressing owner and resident concerns</li>
          <li>Planning for future improvements</li>
        </ul>
        <p>
          Committee members are elected annually at the Annual General Meeting (AGM). If you're interested in joining
          the committee, please contact the Secretary for more information.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {committeeMembers.map((member, index) => (
          <Card key={index} className="overflow-hidden card-hover">
            <div className="relative h-48 bg-muted">
              <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
            </div>
            <CardHeader>
              <CardTitle>{member.name}</CardTitle>
              <CardDescription className="text-primary font-medium">{member.role}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4">{member.bio}</p>
              <div className="text-sm space-y-2">
                <p className="text-muted-foreground">{member.unit}</p>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 text-primary mr-2" />
                  <a href={`mailto:${member.email}`} className="hover:text-primary transition-colors">
                    {member.email}
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 text-primary mr-2" />
                  <a href={`tel:${member.phone}`} className="hover:text-primary transition-colors">
                    {member.phone}
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <h3 className="text-xl font-semibold mb-4">Interested in Joining the Committee?</h3>
        <p className="mb-6 max-w-2xl mx-auto text-muted-foreground">
          We're always looking for enthusiastic owners who want to contribute to our community. The next committee
          election will be held at our Annual General Meeting.
        </p>
        <Button asChild className="bg-primary hover:bg-primary/90">
          <a href="/contact" className="inline-flex items-center">
            Contact Us for More Information
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
    </div>
  )
}

