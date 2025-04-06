"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Mail, Phone, MapPin, Send, CheckCircle, Info } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    unit: "",
    queryType: "",
    message: "",
    priority: "",
    contactPreference: "email",
    copyToEmail: false,
    attachments: false,
  })

  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formResponse, setFormResponse] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (name, checked) => {
    setFormData((prev) => ({ ...prev, [name]: checked }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Simulate a POST request
    setFormSubmitted(true)
    setFormResponse(formData)

    // In a real app, this would send a POST request to an API endpoint
    console.log("Form submitted:", formData)
  }

  const resetForm = () => {
    setFormSubmitted(false)
    setFormResponse(null)
    setFormData({
      name: "",
      email: "",
      unit: "",
      queryType: "",
      message: "",
      priority: "",
      contactPreference: "email",
      copyToEmail: false,
      attachments: false,
    })
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">
          <span className="gradient-heading">Contact Us</span>
        </h1>
        <p className="text-xl text-muted-foreground">Get in touch with the strata committee or management</p>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Email Us</CardTitle>
              <CardDescription>Send us an email anytime</CardDescription>
            </CardHeader>
            <CardContent>
              <a href="mailto:committee@strataportal.com.au" className="text-primary hover:underline">
                committee@strataportal.com.au
              </a>
              <p className="text-sm text-muted-foreground mt-2">We aim to respond within 2 business days</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Call Us</CardTitle>
              <CardDescription>Speak to us directly</CardDescription>
            </CardHeader>
            <CardContent>
              <a href="tel:+61234567890" className="text-primary hover:underline">
                (02) 3456 7890
              </a>
              <p className="text-sm text-muted-foreground mt-2">Available Monday-Friday, 9am-5pm</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Visit Us</CardTitle>
              <CardDescription>Building manager's office</CardDescription>
            </CardHeader>
            <CardContent>
              <p>123 Strata Street</p>
              <p>Sydney, NSW 2000</p>
              <p className="text-sm text-muted-foreground mt-2">Office hours: Mon-Fri, 8am-4pm</p>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">Send us a message</CardTitle>
            <CardDescription>Fill out the form below and we'll get back to you as soon as possible</CardDescription>
          </CardHeader>
          <CardContent>
            {formSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Message Sent Successfully!</h3>
                <p className="text-muted-foreground mb-6">
                  Thank you for contacting us. We'll respond to your inquiry as soon as possible.
                </p>
                <Button onClick={resetForm}>Send Another Message</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="unit">Unit Number</Label>
                    <Input
                      id="unit"
                      name="unit"
                      placeholder="e.g. 101"
                      value={formData.unit}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="queryType">Query Type</Label>
                    <Select
                      name="queryType"
                      value={formData.queryType}
                      onValueChange={(value) => handleSelectChange("queryType", value)}
                      required
                    >
                      <SelectTrigger id="queryType">
                        <SelectValue placeholder="Select a query type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="maintenance">Maintenance</SelectItem>
                        <SelectItem value="committee">Committee Matter</SelectItem>
                        <SelectItem value="financial">Financial Question</SelectItem>
                        <SelectItem value="complaint">Complaint</SelectItem>
                        <SelectItem value="suggestion">Suggestion</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="priority">Priority Level</Label>
                  <Select
                    name="priority"
                    value={formData.priority}
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
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Please provide details about your query"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-3">
                  <Label>Preferred Contact Method</Label>
                  <RadioGroup
                    name="contactPreference"
                    value={formData.contactPreference}
                    onValueChange={(value) => handleSelectChange("contactPreference", value)}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="email" id="contact-email" />
                      <Label htmlFor="contact-email">Email</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="phone" id="contact-phone" />
                      <Label htmlFor="contact-phone">Phone</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="copyToEmail"
                      name="copyToEmail"
                      checked={formData.copyToEmail}
                      onCheckedChange={(checked) => handleCheckboxChange("copyToEmail", checked)}
                    />
                    <Label htmlFor="copyToEmail">Send me a copy of this message</Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="attachments"
                      name="attachments"
                      checked={formData.attachments}
                      onCheckedChange={(checked) => handleCheckboxChange("attachments", checked)}
                    />
                    <Label htmlFor="attachments">I have attachments to include</Label>
                  </div>
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                  <Send className="mr-2 h-4 w-4" /> Send Message
                </Button>
              </form>
            )}
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Emergency Contacts</h3>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
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
                  <Alert className="bg-accent">
                    <Info className="h-4 w-4" />
                    <AlertTitle>Emergency Services</AlertTitle>
                    <AlertDescription>For life-threatening emergencies, always call 000 first.</AlertDescription>
                  </Alert>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">When are committee meetings held?</h4>
                    <p className="text-sm text-muted-foreground">
                      Committee meetings are typically held on the first Tuesday of each month at 7:00 PM in the common
                      room.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium">How do I pay my strata levies?</h4>
                    <p className="text-sm text-muted-foreground">
                      Levy notices are sent quarterly with payment instructions. You can pay via direct deposit, credit
                      card, or check.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium">Can I renovate my unit?</h4>
                    <p className="text-sm text-muted-foreground">
                      Minor renovations may require committee approval, while major renovations need approval at a
                      general meeting. Contact the secretary for details.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium">How do I book the common facilities?</h4>
                    <p className="text-sm text-muted-foreground">
                      Common facilities can be booked through the building manager or via the resident portal.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

