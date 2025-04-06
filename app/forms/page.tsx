"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle, ArrowRight, Send, Info } from "lucide-react"
import { useSearchParams } from "next/navigation"

export default function FormsPage() {
  const searchParams = useSearchParams()
  const [activeTab, setActiveTab] = useState("get")
  const [getFormData, setGetFormData] = useState({
    name: "",
    unit: "",
    queryType: "",
    priority: "",
  })

  const [postFormData, setPostFormData] = useState({
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

  const [getFormSubmitted, setGetFormSubmitted] = useState(false)
  const [postFormSubmitted, setPostFormSubmitted] = useState(false)
  const [getFormResponse, setGetFormResponse] = useState(null)
  const [postFormResponse, setPostFormResponse] = useState(null)

  // Check if there are GET parameters in the URL
  useEffect(() => {
    if (searchParams.has("name")) {
      const name = searchParams.get("name")
      const unit = searchParams.get("unit")
      const queryType = searchParams.get("queryType")
      const priority = searchParams.get("priority")

      setGetFormResponse({
        name,
        unit,
        queryType,
        priority,
      })

      setActiveTab("get")
      setGetFormSubmitted(true)
    }

    // Check for hash in URL to set active tab
    if (window.location.hash) {
      const hash = window.location.hash.substring(1)
      if (hash === "get-form") {
        setActiveTab("get")
      } else if (hash === "post-form") {
        setActiveTab("post")
      }
    }
  }, [searchParams])

  const handleGetChange = (e) => {
    const { name, value } = e.target
    setGetFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handlePostChange = (e) => {
    const { name, value } = e.target
    setPostFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (formType, name, value) => {
    if (formType === "get") {
      setGetFormData((prev) => ({ ...prev, [name]: value }))
    } else {
      setPostFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleCheckboxChange = (name, checked) => {
    setPostFormData((prev) => ({ ...prev, [name]: checked }))
  }

  const handleGetSubmit = (e) => {
    e.preventDefault()
    setGetFormSubmitted(true)
    setGetFormResponse(getFormData)

    // In a real app, this would redirect to the same page with query parameters
    // For demo purposes, we'll just update the URL without a full page reload
    const queryString = new URLSearchParams(getFormData).toString()
    window.history.pushState({}, "", `?${queryString}#get-form`)
  }

  const handlePostSubmit = async (e) => {
    e.preventDefault()

    // Simulate a POST request
    setPostFormSubmitted(true)
    setPostFormResponse(postFormData)

    // In a real app, this would send a POST request to an API endpoint
    // For demo purposes, we'll just simulate a successful response
    console.log("POST form submitted:", postFormData)
  }

  const resetGetForm = () => {
    setGetFormSubmitted(false)
    setGetFormResponse(null)
    setGetFormData({
      name: "",
      unit: "",
      queryType: "",
      priority: "",
    })
    window.history.pushState({}, "", "/forms#get-form")
  }

  const resetPostForm = () => {
    setPostFormSubmitted(false)
    setPostFormResponse(null)
    setPostFormData({
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
    <div className="container mx-auto py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            <span className="gradient-heading">Interactive Forms</span>
          </h1>
          <p className="text-xl text-muted-foreground">Experience the difference between GET and POST request forms</p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Understanding HTTP Request Methods</CardTitle>
            <CardDescription>Learn the key differences between GET and POST requests</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-accent p-4 rounded-lg">
                <h3 className="text-lg font-medium mb-2 flex items-center">
                  <Info className="h-5 w-5 text-primary mr-2" />
                  GET Requests
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <ArrowRight className="h-4 w-4 text-primary mr-2 mt-0.5" />
                    <span>Data is appended to the URL as query parameters</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-4 w-4 text-primary mr-2 mt-0.5" />
                    <span>Visible in the address bar and browser history</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-4 w-4 text-primary mr-2 mt-0.5" />
                    <span>Limited to approximately 2048 characters</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-4 w-4 text-primary mr-2 mt-0.5" />
                    <span>Can be bookmarked with parameters</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-4 w-4 text-primary mr-2 mt-0.5" />
                    <span>Best for retrieving data, not modifying it</span>
                  </li>
                </ul>
              </div>

              <div className="bg-accent p-4 rounded-lg">
                <h3 className="text-lg font-medium mb-2 flex items-center">
                  <Info className="h-5 w-5 text-primary mr-2" />
                  POST Requests
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <ArrowRight className="h-4 w-4 text-primary mr-2 mt-0.5" />
                    <span>Data is sent in the HTTP request body</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-4 w-4 text-primary mr-2 mt-0.5" />
                    <span>Not visible in the URL</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-4 w-4 text-primary mr-2 mt-0.5" />
                    <span>No size limitations (can handle large data)</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-4 w-4 text-primary mr-2 mt-0.5" />
                    <span>Cannot be bookmarked with form data</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-4 w-4 text-primary mr-2 mt-0.5" />
                    <span>Best for submitting data that changes server state</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue={activeTab} value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="get" id="get-form">
              GET Request Form
            </TabsTrigger>
            <TabsTrigger value="post" id="post-form">
              POST Request Form
            </TabsTrigger>
          </TabsList>

          <TabsContent value="get" className="mt-6">
            {getFormSubmitted ? (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    GET Request Submitted
                  </CardTitle>
                  <CardDescription>Your request has been processed successfully</CardDescription>
                </CardHeader>
                <CardContent>
                  <Alert className="mb-4">
                    <Info className="h-4 w-4" />
                    <AlertTitle>URL Parameters</AlertTitle>
                    <AlertDescription className="font-mono text-xs break-all">{window.location.href}</AlertDescription>
                  </Alert>

                  <div className="bg-accent p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Submitted Data:</h3>
                    <ul className="space-y-2">
                      <li className="flex justify-between">
                        <span className="font-medium">Name:</span>
                        <span>{getFormResponse?.name}</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="font-medium">Unit Number:</span>
                        <span>{getFormResponse?.unit}</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="font-medium">Query Type:</span>
                        <span>{getFormResponse?.queryType}</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="font-medium">Priority:</span>
                        <span>{getFormResponse?.priority}</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-4">
                    <p className="text-sm text-muted-foreground">
                      Notice how all the form data appears in the URL above. This is a characteristic of GET requests.
                      The data is visible and can be bookmarked, but it's not suitable for sensitive information.
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button onClick={resetGetForm} className="w-full">
                    Submit Another GET Request
                  </Button>
                </CardFooter>
              </Card>
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle>GET Request Form</CardTitle>
                  <CardDescription>
                    This form uses the GET method. Notice how the form data appears in the URL after submission.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleGetSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="get-name">Your Name</Label>
                      <Input
                        id="get-name"
                        name="name"
                        placeholder="Enter your name"
                        value={getFormData.name}
                        onChange={handleGetChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="get-unit">Unit Number</Label>
                      <Input
                        id="get-unit"
                        name="unit"
                        placeholder="e.g. 101"
                        value={getFormData.unit}
                        onChange={handleGetChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="get-query">Query Type</Label>
                      <Select
                        name="queryType"
                        value={getFormData.queryType}
                        onValueChange={(value) => handleSelectChange("get", "queryType", value)}
                        required
                      >
                        <SelectTrigger id="get-query">
                          <SelectValue placeholder="Select a query type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="maintenance">Maintenance</SelectItem>
                          <SelectItem value="complaint">Complaint</SelectItem>
                          <SelectItem value="suggestion">Suggestion</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="get-priority">Priority</Label>
                      <Select
                        name="priority"
                        value={getFormData.priority}
                        onValueChange={(value) => handleSelectChange("get", "priority", value)}
                        required
                      >
                        <SelectTrigger id="get-priority">
                          <SelectValue placeholder="Select priority level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Low</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="high">High</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </form>
                </CardContent>
                <CardFooter>
                  <Button type="submit" onClick={handleGetSubmit} className="w-full bg-primary hover:bg-primary/90">
                    Submit GET Request
                  </Button>
                </CardFooter>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="post" className="mt-6">
            {postFormSubmitted ? (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    POST Request Submitted
                  </CardTitle>
                  <CardDescription>Your request has been processed successfully</CardDescription>
                </CardHeader>
                <CardContent>
                  <Alert className="mb-4">
                    <Info className="h-4 w-4" />
                    <AlertTitle>URL After Submission</AlertTitle>
                    <AlertDescription className="font-mono text-xs break-all">{window.location.href}</AlertDescription>
                  </Alert>

                  <div className="bg-accent p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Submitted Data (not visible in URL):</h3>
                    <ul className="space-y-2">
                      <li className="flex justify-between">
                        <span className="font-medium">Name:</span>
                        <span>{postFormResponse?.name}</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="font-medium">Email:</span>
                        <span>{postFormResponse?.email}</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="font-medium">Unit Number:</span>
                        <span>{postFormResponse?.unit}</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="font-medium">Query Type:</span>
                        <span>{postFormResponse?.queryType}</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="font-medium">Priority:</span>
                        <span>{postFormResponse?.priority}</span>
                      </li>
                      <li className="flex flex-col">
                        <span className="font-medium">Message:</span>
                        <span className="mt-1 p-2 bg-background rounded">{postFormResponse?.message}</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="font-medium">Contact Preference:</span>
                        <span>{postFormResponse?.contactPreference}</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="font-medium">Copy to Email:</span>
                        <span>{postFormResponse?.copyToEmail ? "Yes" : "No"}</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="font-medium">Attachments:</span>
                        <span>{postFormResponse?.attachments ? "Yes" : "No"}</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-4">
                    <p className="text-sm text-muted-foreground">
                      Notice how the form data does NOT appear in the URL. This is a characteristic of POST requests.
                      The data is sent in the request body, making it more secure and suitable for sensitive
                      information.
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button onClick={resetPostForm} className="w-full">
                    Submit Another POST Request
                  </Button>
                </CardFooter>
              </Card>
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle>POST Request Form</CardTitle>
                  <CardDescription>
                    This form uses the POST method. The form data is sent in the request body and not visible in the
                    URL.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handlePostSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="post-name">Your Name</Label>
                        <Input
                          id="post-name"
                          name="name"
                          placeholder="Enter your name"
                          value={postFormData.name}
                          onChange={handlePostChange}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="post-email">Email Address</Label>
                        <Input
                          id="post-email"
                          name="email"
                          type="email"
                          placeholder="your@email.com"
                          value={postFormData.email}
                          onChange={handlePostChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="post-unit">Unit Number</Label>
                        <Input
                          id="post-unit"
                          name="unit"
                          placeholder="e.g. 101"
                          value={postFormData.unit}
                          onChange={handlePostChange}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="post-query">Query Type</Label>
                        <Select
                          name="queryType"
                          value={postFormData.queryType}
                          onValueChange={(value) => handleSelectChange("post", "queryType", value)}
                          required
                        >
                          <SelectTrigger id="post-query">
                            <SelectValue placeholder="Select a query type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="maintenance">Maintenance</SelectItem>
                            <SelectItem value="complaint">Complaint</SelectItem>
                            <SelectItem value="suggestion">Suggestion</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="post-priority">Priority</Label>
                      <Select
                        name="priority"
                        value={postFormData.priority}
                        onValueChange={(value) => handleSelectChange("post", "priority", value)}
                        required
                      >
                        <SelectTrigger id="post-priority">
                          <SelectValue placeholder="Select priority level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Low</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="high">High</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="post-message">Message</Label>
                      <Textarea
                        id="post-message"
                        name="message"
                        placeholder="Please provide details about your query"
                        rows={4}
                        value={postFormData.message}
                        onChange={handlePostChange}
                        required
                      />
                    </div>

                    <div className="space-y-3">
                      <Label>Preferred Contact Method</Label>
                      <RadioGroup
                        name="contactPreference"
                        value={postFormData.contactPreference}
                        onValueChange={(value) => handleSelectChange("post", "contactPreference", value)}
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
                          checked={postFormData.copyToEmail}
                          onCheckedChange={(checked) => handleCheckboxChange("copyToEmail", checked)}
                        />
                        <Label htmlFor="copyToEmail">Send me a copy of this message</Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="attachments"
                          name="attachments"
                          checked={postFormData.attachments}
                          onCheckedChange={(checked) => handleCheckboxChange("attachments", checked)}
                        />
                        <Label htmlFor="attachments">I have attachments to include</Label>
                      </div>
                    </div>
                  </form>
                </CardContent>
                <CardFooter>
                  <Button type="submit" onClick={handlePostSubmit} className="w-full bg-primary hover:bg-primary/90">
                    <Send className="mr-2 h-4 w-4" /> Submit POST Request
                  </Button>
                </CardFooter>
              </Card>
            )}
          </TabsContent>
        </Tabs>

        {/* <Card>
          <CardHeader>
            <CardTitle>HTTP Status Codes</CardTitle>
            <CardDescription>Common response codes you might encounter when working with forms</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-3">Success Codes</h3>
                <ul className="space-y-3">
                  <li className="p-2 bg-green-50 dark:bg-green-900/20 rounded-md">
                    <span className="font-mono font-bold text-green-600 dark:text-green-400">200 OK</span>
                    <p className="text-sm mt-1">The request has succeeded.</p>
                  </li>
                  <li className="p-2 bg-green-50 dark:bg-green-900/20 rounded-md">
                    <span className="font-mono font-bold text-green-600 dark:text-green-400">201 Created</span>
                    <p className="text-sm mt-1">The request has succeeded and a new resource has been created.</p>
                  </li>
                  <li className="p-2 bg-green-50 dark:bg-green-900/20 rounded-md">
                    <span className="font-mono font-bold text-green-600 dark:text-green-400">204 No Content</span>
                    <p className="text-sm mt-1">The request has succeeded but returns no message body.</p>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">Error Codes</h3>
                <ul className="space-y-3">
                  <li className="p-2 bg-red-50 dark:bg-red-900/20 rounded-md">
                    <span className="font-mono font-bold text-red-600 dark:text-red-400">400 Bad Request</span>
                    <p className="text-sm mt-1">The server cannot process the request due to client error.</p>
                  </li>
                  <li className="p-2 bg-red-50 dark:bg-red-900/20 rounded-md">
                    <span className="font-mono font-bold text-red-600 dark:text-red-400">401 Unauthorized</span>
                    <p className="text-sm mt-1">Authentication is required and has failed or not been provided.</p>
                  </li>
                  <li className="p-2 bg-red-50 dark:bg-red-900/20 rounded-md">
                    <span className="font-mono font-bold text-red-600 dark:text-red-400">404 Not Found</span>
                    <p className="text-sm mt-1">The server cannot find the requested resource.</p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-medium mb-3">Redirect Codes</h3>
              <ul className="space-y-3">
                <li className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-md">
                  <span className="font-mono font-bold text-blue-600 dark:text-blue-400">301 Moved Permanently</span>
                  <p className="text-sm mt-1">The resource has been permanently moved to another URI.</p>
                </li>
                <li className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-md">
                  <span className="font-mono font-bold text-blue-600 dark:text-blue-400">302 Found</span>
                  <p className="text-sm mt-1">The resource has been temporarily moved to another URI.</p>
                </li>
                <li className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-md">
                  <span className="font-mono font-bold text-blue-600 dark:text-blue-400">307 Temporary Redirect</span>
                  <p className="text-sm mt-1">
                    The resource has been temporarily moved to another URI, preserving the HTTP method.
                  </p>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card> */}
      </div>
    </div>
  )
}

