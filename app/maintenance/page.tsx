"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  PenToolIcon as Tool,
  Plus,
  Search,
  Calendar,
  ArrowRight,
  CheckCircle2,
  Clock,
  XCircle,
  AlertCircle,
} from "lucide-react"

export default function MaintenancePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [newRequestForm, setNewRequestForm] = useState({
    title: "",
    location: "",
    description: "",
    priority: "",
    contactMethod: "",
  })

  const maintenanceRequests = [
    {
      id: 1,
      title: "Leaking Tap in Common Area Bathroom",
      location: "Ground Floor Common Bathroom",
      description:
        "The sink tap in the ground floor common bathroom is constantly dripping, wasting water and making noise.",
      dateSubmitted: "2023-07-15",
      status: "completed",
      priority: "medium",
      updates: [
        { date: "2023-07-15", content: "Request received and logged." },
        { date: "2023-07-16", content: "Plumber scheduled for July 18th." },
        { date: "2023-07-18", content: "Plumber replaced tap washer and fixed the leak." },
        { date: "2023-07-19", content: "Issue resolved and closed." },
      ],
    },
    {
      id: 2,
      title: "Broken Tile in Pool Area",
      location: "Swimming Pool Deck",
      description: "There's a cracked tile on the pool deck near the shallow end. It's creating a tripping hazard.",
      dateSubmitted: "2023-07-20",
      status: "in-progress",
      priority: "high",
      updates: [
        { date: "2023-07-20", content: "Request received and logged." },
        { date: "2023-07-21", content: "Area has been cordoned off for safety." },
        { date: "2023-07-22", content: "Tile replacement scheduled for July 25th." },
      ],
    },
    {
      id: 3,
      title: "Flickering Light in Garage",
      location: "Basement Parking Level 1",
      description: "The fluorescent light near parking space 25 is flickering and may need replacement.",
      dateSubmitted: "2023-07-18",
      status: "pending",
      priority: "low",
      updates: [
        { date: "2023-07-18", content: "Request received and logged." },
        { date: "2023-07-19", content: "Electrician to be scheduled." },
      ],
    },
    {
      id: 4,
      title: "Intercom Not Working",
      location: "Building Entrance",
      description:
        "The intercom system at the main entrance isn't connecting to units. Visitors cannot buzz residents.",
      dateSubmitted: "2023-07-10",
      status: "completed",
      priority: "high",
      updates: [
        { date: "2023-07-10", content: "Request received and logged." },
        { date: "2023-07-10", content: "Emergency technician contacted." },
        { date: "2023-07-11", content: "Technician identified system reset issue." },
        { date: "2023-07-11", content: "System reset completed and tested." },
        { date: "2023-07-12", content: "Issue resolved and closed." },
      ],
    },
    {
      id: 5,
      title: "Gym Equipment Maintenance",
      location: "Fitness Center",
      description: "The treadmill is making a loud noise when in use and occasionally stops working.",
      dateSubmitted: "2023-07-05",
      status: "rejected",
      priority: "medium",
      updates: [
        { date: "2023-07-05", content: "Request received and logged." },
        { date: "2023-07-06", content: "Equipment specialist consulted." },
        { date: "2023-07-08", content: "Determined equipment is beyond repair and needs replacement." },
        {
          date: "2023-07-10",
          content: "Request closed. New equipment purchase to be discussed at next committee meeting.",
        },
      ],
    },
    {
      id: 6,
      title: "Garbage Room Odor",
      location: "Garbage Collection Area",
      description: "Strong unpleasant smell coming from the garbage room even when bins are empty.",
      dateSubmitted: "2023-07-22",
      status: "pending",
      priority: "medium",
      updates: [{ date: "2023-07-22", content: "Request received and logged." }],
    },
  ]

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString("en-AU", options)
  }

  const filterRequests = () => {
    if (!searchTerm) return maintenanceRequests

    return maintenanceRequests.filter(
      (request) =>
        request.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        request.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        request.description.toLowerCase().includes(searchTerm.toLowerCase()),
    )
  }

  const filteredRequests = filterRequests()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setNewRequestForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setNewRequestForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would submit the form data to an API
    alert("Maintenance request submitted successfully!")
    setNewRequestForm({
      title: "",
      location: "",
      description: "",
      priority: "",
      contactMethod: "",
    })
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle2 className="h-4 w-4 text-green-500" />
      case "in-progress":
        return <Clock className="h-4 w-4 text-blue-500" />
      case "rejected":
        return <XCircle className="h-4 w-4 text-red-500" />
      default:
        return <AlertCircle className="h-4 w-4 text-amber-500" />
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return "Completed"
      case "in-progress":
        return "In Progress"
      case "rejected":
        return "Rejected"
      default:
        return "Pending"
    }
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">
          <span className="gradient-heading">Maintenance Requests</span>
        </h1>
        <p className="text-xl text-muted-foreground">Report and track maintenance issues in our building</p>
      </div>

      <div className="max-w-5xl mx-auto">
        <Tabs defaultValue="view">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="view">View Requests</TabsTrigger>
            <TabsTrigger value="new">Submit New Request</TabsTrigger>
          </TabsList>

          <TabsContent value="view" className="mt-6">
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search maintenance requests..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {filteredRequests.length > 0 ? (
              <div className="space-y-6">
                {filteredRequests.map((request) => (
                  <Card key={request.id} className="overflow-hidden">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-xl">{request.title}</CardTitle>
                        <div className={`maintenance-status status-${request.status} flex items-center`}>
                          {getStatusIcon(request.status)}
                          <span className="ml-1">{getStatusText(request.status)}</span>
                        </div>
                      </div>
                      <CardDescription className="flex items-center mt-1">
                        <Calendar className="h-4 w-4 mr-1" />
                        Submitted on {formatDate(request.dateSubmitted)}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4">
                        <h4 className="text-sm font-medium mb-1">Location</h4>
                        <p className="text-muted-foreground">{request.location}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium mb-1">Description</h4>
                        <p className="text-muted-foreground">{request.description}</p>
                      </div>

                      <div className="mt-6">
                        <h4 className="text-sm font-medium mb-2">Progress Updates</h4>
                        <div className="relative pl-6 border-l border-muted">
                          {request.updates.map((update, index) => (
                            <div key={index} className="mb-4 relative">
                              <div className="absolute -left-[25px] w-4 h-4 rounded-full bg-primary"></div>
                              <p className="text-xs text-muted-foreground mb-1">{formatDate(update.date)}</p>
                              <p className="text-sm">{update.content}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Tool className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium">No maintenance requests found</h3>
                <p className="text-muted-foreground mb-6">Try adjusting your search or submit a new request</p>
                <Button
                  onClick={() => document.querySelector('[value="new"]')?.dispatchEvent(new Event("click"))}
                  className="bg-primary hover:bg-primary/90"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Submit New Request
                </Button>
              </div>
            )}
          </TabsContent>

          <TabsContent value="new" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Submit a New Maintenance Request</CardTitle>
                <CardDescription>Please provide details about the maintenance issue you've identified</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="title">Issue Title</Label>
                    <Input
                      id="title"
                      name="title"
                      placeholder="Brief description of the issue"
                      value={newRequestForm.title}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      name="location"
                      placeholder="Where is the issue located?"
                      value={newRequestForm.location}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Detailed Description</Label>
                    <Textarea
                      id="description"
                      name="description"
                      placeholder="Please provide as much detail as possible about the issue"
                      rows={4}
                      value={newRequestForm.description}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="priority">Priority Level</Label>
                      <Select
                        name="priority"
                        value={newRequestForm.priority}
                        onValueChange={(value) => handleSelectChange("priority", value)}
                        required
                      >
                        <SelectTrigger id="priority">
                          <SelectValue placeholder="Select priority level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Low - Not Urgent</SelectItem>
                          <SelectItem value="medium">Medium - Needs Attention</SelectItem>
                          <SelectItem value="high">High - Urgent Issue</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contactMethod">Preferred Contact Method</Label>
                      <Select
                        name="contactMethod"
                        value={newRequestForm.contactMethod}
                        onValueChange={(value) => handleSelectChange("contactMethod", value)}
                        required
                      >
                        <SelectTrigger id="contactMethod">
                          <SelectValue placeholder="How should we contact you?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="email">Email</SelectItem>
                          <SelectItem value="phone">Phone</SelectItem>
                          <SelectItem value="sms">SMS</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                      Submit Maintenance Request
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-accent">
            <CardHeader>
              <CardTitle className="text-lg">Maintenance Process</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-primary font-medium">1</span>
                </div>
                <div>
                  <h4 className="font-medium">Submit Request</h4>
                  <p className="text-sm text-muted-foreground">
                    Fill out the maintenance request form with all relevant details
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-primary font-medium">2</span>
                </div>
                <div>
                  <h4 className="font-medium">Review & Prioritize</h4>
                  <p className="text-sm text-muted-foreground">Building manager reviews and prioritizes the request</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-primary font-medium">3</span>
                </div>
                <div>
                  <h4 className="font-medium">Schedule & Complete</h4>
                  <p className="text-sm text-muted-foreground">
                    Work is scheduled and completed by appropriate contractors
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-accent">
            <CardHeader>
              <CardTitle className="text-lg">Emergency Contacts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium">Building Manager</h4>
                <p className="text-sm text-muted-foreground">(02) 9876 5430</p>
                <p className="text-sm text-muted-foreground">Available Mon-Fri, 8am-4pm</p>
              </div>
              <div>
                <h4 className="font-medium">After Hours Emergency</h4>
                <p className="text-sm text-muted-foreground">(02) 9876 5499</p>
                <p className="text-sm text-muted-foreground">For urgent issues only</p>
              </div>
              <div>
                <h4 className="font-medium">Strata Manager</h4>
                <p className="text-sm text-muted-foreground">(02) 9876 5400</p>
                <p className="text-sm text-muted-foreground">For administrative inquiries</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-accent">
            <CardHeader>
              <CardTitle className="text-lg">Maintenance Tips</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start">
                <ArrowRight className="h-4 w-4 text-primary mr-2 mt-1" />
                <p className="text-sm">Report issues promptly to prevent further damage</p>
              </div>
              <div className="flex items-start">
                <ArrowRight className="h-4 w-4 text-primary mr-2 mt-1" />
                <p className="text-sm">Include photos when possible to help identify the issue</p>
              </div>
              <div className="flex items-start">
                <ArrowRight className="h-4 w-4 text-primary mr-2 mt-1" />
                <p className="text-sm">Be specific about the location and nature of the problem</p>
              </div>
              <div className="flex items-start">
                <ArrowRight className="h-4 w-4 text-primary mr-2 mt-1" />
                <p className="text-sm">For water leaks, turn off the water supply if possible before reporting</p>
              </div>
              <div className="flex items-start">
                <ArrowRight className="h-4 w-4 text-primary mr-2 mt-1" />
                <p className="text-sm">Keep track of your request number for future reference</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

