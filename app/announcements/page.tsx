"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Bell, Calendar, Search, Tag, ChevronDown, ChevronUp, Eye } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AnnouncementsPage() {
  const [expandedAnnouncement, setExpandedAnnouncement] = useState<number | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const announcements = [
    {
      id: 1,
      title: "Annual General Meeting - 15th June 2023",
      date: "2023-05-15",
      category: "Meeting",
      summary: "The Annual General Meeting will be held on June 15th at 7:00 PM in the building's common room.",
      content:
        "Dear Owners,\n\nThe Annual General Meeting (AGM) for our strata scheme will be held on Thursday, June 15th, 2023 at 7:00 PM in the building's common room.\n\nThe agenda will include:\n- Committee election for the upcoming year\n- Review of the annual financial statements\n- Discussion of proposed capital works\n- Setting the budget and levies for the next financial year\n- General business\n\nIf you cannot attend in person, please complete the proxy form attached to the formal notice. Refreshments will be provided.\n\nWe look forward to seeing you there.",
      important: true,
    },
    {
      id: 2,
      title: "Swimming Pool Maintenance - Temporary Closure",
      date: "2023-05-10",
      category: "Maintenance",
      summary: "The swimming pool will be closed for maintenance from May 20th to May 25th.",
      content:
        "Please be advised that the swimming pool will be closed for essential maintenance from Saturday, May 20th to Thursday, May 25th, 2023.\n\nThe maintenance work includes:\n- Retiling damaged areas\n- Replacing the pool pump\n- Cleaning the filtration system\n- Rebalancing water chemistry\n\nWe apologize for any inconvenience this may cause and appreciate your understanding. The pool will reopen on Friday, May 26th.\n\nIf you have any questions, please contact the building manager.",
      important: true,
    },
    {
      id: 3,
      title: "New Recycling Guidelines",
      date: "2023-05-05",
      category: "General",
      summary: "Updated recycling guidelines for all residents to follow.",
      content:
        "Dear Residents,\n\nWe are implementing new recycling guidelines to improve our environmental impact and comply with council regulations.\n\nEffective immediately, please ensure:\n\n1. All cardboard is flattened before placing in recycling bins\n2. Soft plastics are not placed in recycling (these can be taken to collection points at major supermarkets)\n3. Glass bottles and jars are emptied and rinsed\n4. No food waste in the recycling bins\n\nRecycling is collected every Wednesday. Please have your recycling in the designated bins by Tuesday evening.\n\nThank you for your cooperation in making our building more environmentally friendly.",
      important: false,
    },
    {
      id: 4,
      title: "Fire Alarm Testing - May 30th",
      date: "2023-05-01",
      category: "Safety",
      summary: "Mandatory fire alarm testing will be conducted on May 30th between 10:00 AM and 2:00 PM.",
      content:
        "Notice to All Residents:\n\nAs part of our annual fire safety compliance, mandatory fire alarm testing will be conducted throughout the building on Tuesday, May 30th between 10:00 AM and 2:00 PM.\n\nDuring this time:\n- Fire alarms will sound intermittently\n- Emergency lighting will be tested\n- Fire exits will be inspected\n- Sprinkler systems will be checked (no water will be discharged)\n\nYou do NOT need to evacuate the building during this testing unless instructed to do so by the fire safety officers.\n\nIf you have pets that may be disturbed by the alarms, you might want to make alternative arrangements for them during this time.\n\nThis testing is required by law and ensures the safety of all residents. Thank you for your cooperation.",
      important: true,
    },
    {
      id: 5,
      title: "Community Garden Initiative",
      date: "2023-04-25",
      category: "Community",
      summary: "Proposal for a community garden in the eastern courtyard area.",
      content:
        "Dear Residents,\n\nWe're excited to announce a proposal for a community garden in the eastern courtyard area. This initiative aims to create a shared space where residents can grow vegetables, herbs, and flowers.\n\nThe proposed plan includes:\n- 10 raised garden beds\n- A small tool shed\n- Composting area\n- Rainwater collection system\n\nIf you're interested in participating or have suggestions, please attend the information session on Sunday, May 7th at 11:00 AM in the common room.\n\nThis project will be funded from the capital works fund, with ongoing maintenance handled by participating residents.\n\nWe believe this will be a wonderful addition to our community and provide a relaxing outdoor activity for interested residents.",
      important: false,
    },
    {
      id: 6,
      title: "Quarterly Levy Payments Due",
      date: "2023-04-20",
      category: "Financial",
      summary: "Reminder that quarterly strata levy payments are due by May 1st.",
      content:
        "Dear Owners,\n\nThis is a reminder that quarterly strata levy payments are due by May 1st, 2023.\n\nPayment details:\n- Administrative Fund: $800 per lot\n- Capital Works Fund: $400 per lot\n- Total Due: $1,200 per lot\n\nPayments can be made via:\n1. Direct deposit to the strata account\n2. Check mailed to the strata manager\n3. Credit card payment through the owner portal (2% surcharge applies)\n\nPlease ensure your lot number is included as a reference with your payment.\n\nLate payments will incur interest charges as per the Strata Schemes Management Act 2015.\n\nIf you are experiencing financial hardship, please contact the treasurer to discuss payment arrangements.",
      important: true,
    },
    {
      id: 7,
      title: "New Building Manager Introduction",
      date: "2023-04-15",
      category: "General",
      summary: "Introducing our new building manager, Robert Thompson, who starts on May 1st.",
      content:
        "Dear Residents,\n\nWe are pleased to introduce Robert Thompson as our new building manager, starting May 1st, 2023.\n\nRobert brings over 15 years of experience in building management and maintenance. He previously managed a 120-unit complex in North Sydney and has extensive knowledge of strata regulations and building systems.\n\nAs building manager, Robert will be responsible for:\n- Day-to-day building operations\n- Coordinating maintenance and repairs\n- Supervising contractors\n- Assisting residents with building-related issues\n- Ensuring compliance with by-laws\n\nRobert will be available on-site Monday to Friday, 8:00 AM to 4:00 PM. His office is located next to the mailroom, and he can be reached at robert.thompson@example.com or (02) 9876 5430.\n\nPlease join us in welcoming Robert to our community.",
      important: false,
    },
    {
      id: 8,
      title: "Visitor Parking Reminder",
      date: "2023-04-10",
      category: "General",
      summary: "Reminder about visitor parking rules and regulations.",
      content:
        "Attention All Residents:\n\nWe've noticed an increase in misuse of visitor parking spaces and would like to remind everyone of the rules:\n\n1. Visitor parking is for genuine visitors only, not for residents or their additional vehicles\n2. Visitors may park for a maximum of 48 consecutive hours\n3. Residents must register visitors' vehicles through the building management system\n4. Commercial vehicles are not permitted in visitor parking\n\nViolations of these rules may result in vehicles being stickered or towed at the owner's expense.\n\nIf you have special circumstances requiring extended visitor parking, please contact the building manager for approval in advance.\n\nThank you for your cooperation in ensuring fair access to visitor parking for all residents.",
      important: false,
    },
  ]

  const toggleAnnouncement = (id: number) => {
    if (expandedAnnouncement === id) {
      setExpandedAnnouncement(null)
    } else {
      setExpandedAnnouncement(id)
    }
  }

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString("en-AU", options)
  }

  const filterAnnouncements = () => {
    return announcements.filter((announcement) => {
      const matchesSearch =
        announcement.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        announcement.content.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesCategory = selectedCategory ? announcement.category === selectedCategory : true

      return matchesSearch && matchesCategory
    })
  }

  const filteredAnnouncements = filterAnnouncements()

  const categories = [...new Set(announcements.map((a) => a.category))]

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">
          <span className="gradient-heading">Announcements</span>
        </h1>
        <p className="text-xl text-muted-foreground">
          Stay updated with the latest news and information about our strata community
        </p>
      </div>

      <div className="max-w-4xl mx-auto mb-8">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search announcements..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            <Button
              variant={selectedCategory === null ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(null)}
              className={selectedCategory === null ? "bg-primary hover:bg-primary/90" : ""}
            >
              All
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "bg-primary hover:bg-primary/90" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <Tabs defaultValue="all">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="all">All Announcements</TabsTrigger>
            <TabsTrigger value="important">Important Only</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6 space-y-6">
            {filteredAnnouncements.length > 0 ? (
              filteredAnnouncements.map((announcement) => (
                <Card
                  key={announcement.id}
                  className={`overflow-hidden transition-all duration-300 ${announcement.important ? "border-l-4 border-l-primary" : ""}`}
                >
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">{announcement.title}</CardTitle>
                        <CardDescription className="flex items-center mt-1">
                          <Calendar className="h-4 w-4 mr-1" />
                          {formatDate(announcement.date)}
                        </CardDescription>
                      </div>
                      <div className="flex items-center space-x-2">
                        {announcement.important && (
                          <Badge variant="default" className="bg-primary hover:bg-primary">
                            Important
                          </Badge>
                        )}
                        <Badge variant="outline" className="flex items-center">
                          <Tag className="h-3 w-3 mr-1" />
                          {announcement.category}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p>{announcement.summary}</p>
                    {expandedAnnouncement === announcement.id && (
                      <div className="mt-4 whitespace-pre-line text-muted-foreground">{announcement.content}</div>
                    )}
                  </CardContent>
                  <CardFooter className="flex justify-between pt-0">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-primary"
                      onClick={() => toggleAnnouncement(announcement.id)}
                    >
                      {expandedAnnouncement === announcement.id ? (
                        <span className="flex items-center">
                          <ChevronUp className="h-4 w-4 mr-1" />
                          Show Less
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <ChevronDown className="h-4 w-4 mr-1" />
                          Read More
                        </span>
                      )}
                    </Button>
                    <span className="text-xs text-muted-foreground flex items-center">
                      <Eye className="h-3 w-3 mr-1" />
                      {Math.floor(Math.random() * 50) + 10} views
                    </span>
                  </CardFooter>
                </Card>
              ))
            ) : (
              <div className="text-center py-12">
                <Bell className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium">No announcements found</h3>
                <p className="text-muted-foreground">Try adjusting your search or filters</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="important" className="mt-6 space-y-6">
            {filteredAnnouncements.filter((a) => a.important).length > 0 ? (
              filteredAnnouncements
                .filter((a) => a.important)
                .map((announcement) => (
                  <Card key={announcement.id} className="overflow-hidden border-l-4 border-l-primary">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl">{announcement.title}</CardTitle>
                          <CardDescription className="flex items-center mt-1">
                            <Calendar className="h-4 w-4 mr-1" />
                            {formatDate(announcement.date)}
                          </CardDescription>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge variant="default" className="bg-primary hover:bg-primary">
                            Important
                          </Badge>
                          <Badge variant="outline" className="flex items-center">
                            <Tag className="h-3 w-3 mr-1" />
                            {announcement.category}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p>{announcement.summary}</p>
                      {expandedAnnouncement === announcement.id && (
                        <div className="mt-4 whitespace-pre-line text-muted-foreground">{announcement.content}</div>
                      )}
                    </CardContent>
                    <CardFooter className="flex justify-between pt-0">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-primary"
                        onClick={() => toggleAnnouncement(announcement.id)}
                      >
                        {expandedAnnouncement === announcement.id ? (
                          <span className="flex items-center">
                            <ChevronUp className="h-4 w-4 mr-1" />
                            Show Less
                          </span>
                        ) : (
                          <span className="flex items-center">
                            <ChevronDown className="h-4 w-4 mr-1" />
                            Read More
                          </span>
                        )}
                      </Button>
                      <span className="text-xs text-muted-foreground flex items-center">
                        <Eye className="h-3 w-3 mr-1" />
                        {Math.floor(Math.random() * 50) + 10} views
                      </span>
                    </CardFooter>
                  </Card>
                ))
            ) : (
              <div className="text-center py-12">
                <Bell className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium">No important announcements found</h3>
                <p className="text-muted-foreground">Try adjusting your search or filters</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

