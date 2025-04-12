import createClient from "@/lib/supabase/server"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"

export const revalidate = 60 // Revalidate this page every 60 seconds

export default async function AnnouncementsPage() {
  const supabase = await createClient()

  // Fetch announcements from the database
  const { data: announcements, error } = await supabase
    .from("announcements")
    .select("*")
    .order("published_at", { ascending: false })

  if (error) {
    console.error("Error fetching announcements:", error)
  }

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString("en-AU", options)
  }

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

      <div className="max-w-4xl mx-auto space-y-6">
        {error && (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium">Error loading announcements</h3>
            <p className="text-muted-foreground">Please try again later</p>
          </div>
        )}

        {announcements && announcements.length > 0 ? (
          announcements.map((announcement) => (
            <Card
              key={announcement.id}
              className={`overflow-hidden transition-all duration-300 ${announcement.is_important ? "border-l-4 border-l-primary" : ""}`}
            >
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">{announcement.title}</CardTitle>
                    <CardDescription className="flex items-center mt-1">
                      <Calendar className="h-4 w-4 mr-1" />
                      {formatDate(announcement.published_at)}
                    </CardDescription>
                  </div>
                  <div className="flex items-center space-x-2">
                    {announcement.is_important && (
                      <Badge variant="default" className="bg-primary hover:bg-primary">
                        Important
                      </Badge>
                    )}
                    <Badge variant="outline" className="flex items-center">
                      {announcement.category}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p>{announcement.summary}</p>
                <div className="mt-4 whitespace-pre-line text-muted-foreground">{announcement.content}</div>
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium">No announcements found</h3>
            <p className="text-muted-foreground">Check back later for updates</p>
          </div>
        )}
      </div>
    </div>
  )
}
