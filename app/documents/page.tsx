"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { FileText, Download, Search, Calendar, Lock, FileIcon, FileLock2 } from "lucide-react"

export default function DocumentsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const documents = [
    {
      id: 1,
      title: "Strata By-Laws",
      category: "Legal",
      date: "2022-11-15",
      description: "Complete set of by-laws for the strata scheme as registered with NSW Land Registry Services.",
      fileSize: "1.2 MB",
      fileType: "PDF",
      restricted: false,
      downloadUrl: "#",
    },
    {
      id: 2,
      title: "Annual General Meeting Minutes - 2023",
      category: "Minutes",
      date: "2023-06-20",
      description: "Minutes from the Annual General Meeting held on June 15, 2023.",
      fileSize: "850 KB",
      fileType: "PDF",
      restricted: false,
      downloadUrl: "#",
    },
    {
      id: 3,
      title: "Quarterly Financial Report - Q2 2023",
      category: "Financial",
      date: "2023-07-10",
      description:
        "Financial statements for the second quarter of 2023, including income, expenses, and fund balances.",
      fileSize: "1.5 MB",
      fileType: "PDF",
      restricted: true,
      downloadUrl: "#",
    },
    {
      id: 4,
      title: "Building Insurance Certificate",
      category: "Insurance",
      date: "2023-01-05",
      description: "Current building insurance certificate showing coverage details and policy period.",
      fileSize: "750 KB",
      fileType: "PDF",
      restricted: false,
      downloadUrl: "#",
    },
    {
      id: 5,
      title: "Fire Safety Compliance Report - 2023",
      category: "Compliance",
      date: "2023-03-22",
      description: "Annual fire safety inspection report and compliance certificate.",
      fileSize: "2.1 MB",
      fileType: "PDF",
      restricted: false,
      downloadUrl: "#",
    },
    {
      id: 6,
      title: "10-Year Capital Works Plan",
      category: "Planning",
      date: "2022-08-30",
      description: "Detailed 10-year plan for major capital works and maintenance projects with estimated costs.",
      fileSize: "3.5 MB",
      fileType: "PDF",
      restricted: true,
      downloadUrl: "#",
    },
    {
      id: 7,
      title: "Strata Committee Meeting Minutes - July 2023",
      category: "Minutes",
      date: "2023-07-25",
      description: "Minutes from the Strata Committee meeting held on July 20, 2023.",
      fileSize: "680 KB",
      fileType: "PDF",
      restricted: false,
      downloadUrl: "#",
    },
    {
      id: 8,
      title: "Building Evacuation Plan",
      category: "Safety",
      date: "2022-05-18",
      description: "Emergency evacuation procedures and floor plans for all levels of the building.",
      fileSize: "1.8 MB",
      fileType: "PDF",
      restricted: false,
      downloadUrl: "#",
    },
    {
      id: 9,
      title: "Strata Roll - Current",
      category: "Administrative",
      date: "2023-07-01",
      description: "Current strata roll listing all lot owners and their contact information.",
      fileSize: "950 KB",
      fileType: "PDF",
      restricted: true,
      downloadUrl: "#",
    },
    {
      id: 10,
      title: "Building Defect Assessment Report",
      category: "Maintenance",
      date: "2022-09-12",
      description: "Comprehensive assessment of building defects conducted by independent engineers.",
      fileSize: "4.2 MB",
      fileType: "PDF",
      restricted: true,
      downloadUrl: "#",
    },
    {
      id: 11,
      title: "Strata Management Agency Agreement",
      category: "Legal",
      date: "2022-02-01",
      description: "Current agreement with the strata management agency outlining services and fees.",
      fileSize: "1.1 MB",
      fileType: "PDF",
      restricted: true,
      downloadUrl: "#",
    },
    {
      id: 12,
      title: "Levy Notice - Q3 2023",
      category: "Financial",
      date: "2023-07-01",
      description: "Levy notice for the third quarter of 2023 with payment details.",
      fileSize: "520 KB",
      fileType: "PDF",
      restricted: false,
      downloadUrl: "#",
    },
  ]

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString("en-AU", options)
  }

  const filterDocuments = () => {
    return documents.filter((document) => {
      const matchesSearch =
        document.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        document.description.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesCategory = selectedCategory ? document.category === selectedCategory : true

      return matchesSearch && matchesCategory
    })
  }

  const filteredDocuments = filterDocuments()

  const categories = [...new Set(documents.map((d) => d.category))]

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">
          <span className="gradient-heading">Documents & Records</span>
        </h1>
        <p className="text-xl text-muted-foreground">Access important strata documents, reports, and records</p>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search documents..."
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
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="all">All Documents</TabsTrigger>
            <TabsTrigger value="public">Public Only</TabsTrigger>
            <TabsTrigger value="restricted">Restricted Only</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDocuments.length > 0 ? (
                filteredDocuments.map((document) => (
                  <Card key={document.id} className="document-card flex flex-col h-full">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                          {document.restricted ? (
                            <FileLock2 className="h-5 w-5 text-primary" />
                          ) : (
                            <FileIcon className="h-5 w-5 text-primary" />
                          )}
                        </div>
                        <Badge variant="outline" className="flex items-center">
                          {document.category}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg">{document.title}</CardTitle>
                      <CardDescription className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {formatDate(document.date)}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-sm text-muted-foreground">{document.description}</p>
                      <div className="flex items-center mt-4 text-xs text-muted-foreground">
                        <FileText className="h-3 w-3 mr-1" />
                        <span>
                          {document.fileType} • {document.fileSize}
                        </span>
                      </div>
                    </CardContent>
                    <CardFooter className="pt-0">
                      <Button
                        variant={document.restricted ? "outline" : "default"}
                        size="sm"
                        className={`w-full ${!document.restricted ? "bg-primary hover:bg-primary/90" : ""}`}
                        disabled={document.restricted}
                      >
                        {document.restricted ? (
                          <span className="flex items-center">
                            <Lock className="h-4 w-4 mr-2" />
                            Restricted Access
                          </span>
                        ) : (
                          <span className="flex items-center">
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </span>
                        )}
                      </Button>
                    </CardFooter>
                  </Card>
                ))
              ) : (
                <div className="col-span-3 text-center py-12">
                  <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium">No documents found</h3>
                  <p className="text-muted-foreground">Try adjusting your search or filters</p>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="public" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDocuments.filter((d) => !d.restricted).length > 0 ? (
                filteredDocuments
                  .filter((d) => !d.restricted)
                  .map((document) => (
                    <Card key={document.id} className="document-card flex flex-col h-full">
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                            <FileIcon className="h-5 w-5 text-primary" />
                          </div>
                          <Badge variant="outline" className="flex items-center">
                            {document.category}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg">{document.title}</CardTitle>
                        <CardDescription className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {formatDate(document.date)}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <p className="text-sm text-muted-foreground">{document.description}</p>
                        <div className="flex items-center mt-4 text-xs text-muted-foreground">
                          <FileText className="h-3 w-3 mr-1" />
                          <span>
                            {document.fileType} • {document.fileSize}
                          </span>
                        </div>
                      </CardContent>
                      <CardFooter className="pt-0">
                        <Button variant="default" size="sm" className="w-full bg-primary hover:bg-primary/90">
                          <span className="flex items-center">
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </span>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))
              ) : (
                <div className="col-span-3 text-center py-12">
                  <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium">No public documents found</h3>
                  <p className="text-muted-foreground">Try adjusting your search or filters</p>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="restricted" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDocuments.filter((d) => d.restricted).length > 0 ? (
                filteredDocuments
                  .filter((d) => d.restricted)
                  .map((document) => (
                    <Card key={document.id} className="document-card flex flex-col h-full">
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                            <FileLock2 className="h-5 w-5 text-primary" />
                          </div>
                          <Badge variant="outline" className="flex items-center">
                            {document.category}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg">{document.title}</CardTitle>
                        <CardDescription className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {formatDate(document.date)}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <p className="text-sm text-muted-foreground">{document.description}</p>
                        <div className="flex items-center mt-4 text-xs text-muted-foreground">
                          <FileText className="h-3 w-3 mr-1" />
                          <span>
                            {document.fileType} • {document.fileSize}
                          </span>
                        </div>
                      </CardContent>
                      <CardFooter className="pt-0">
                        <Button variant="outline" size="sm" className="w-full" disabled>
                          <span className="flex items-center">
                            <Lock className="h-4 w-4 mr-2" />
                            Restricted Access
                          </span>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))
              ) : (
                <div className="col-span-3 text-center py-12">
                  <FileLock2 className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium">No restricted documents found</h3>
                  <p className="text-muted-foreground">Try adjusting your search or filters</p>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-12 p-6 bg-accent rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Document Access Information</h3>
          <p className="mb-4">Documents are categorized as either public or restricted:</p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start">
              <FileIcon className="h-5 w-5 text-primary mr-2 mt-0.5" />
              <span>
                <strong>Public documents</strong> are accessible to all owners and residents.
              </span>
            </li>
            <li className="flex items-start">
              <FileLock2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
              <span>
                <strong>Restricted documents</strong> contain sensitive information and are only available to committee
                members or upon specific request.
              </span>
            </li>
          </ul>
          <p className="text-sm text-muted-foreground">
            To request access to restricted documents, please contact the Secretary or submit a request through the
            Contact page.
          </p>
        </div>
      </div>
    </div>
  )
}

