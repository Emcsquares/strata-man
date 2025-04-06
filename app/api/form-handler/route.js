import { NextResponse } from "next/server"

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const name = searchParams.get("name")
  const unit = searchParams.get("unit")
  const queryType = searchParams.get("queryType")
  const priority = searchParams.get("priority")

  console.log("GET Request received with data:", { name, unit, queryType, priority })

  // In a real application, you might process this data or store it

  // Return a response with the data
  return NextResponse.json({
    success: true,
    method: "GET",
    data: { name, unit, queryType, priority },
    message: "Form data received via GET request",
  })
}

export async function POST(request) {
  // Parse the request body
  const formData = await request.formData()

  const name = formData.get("name")
  const email = formData.get("email")
  const unit = formData.get("unit")
  const queryType = formData.get("queryType")
  const message = formData.get("message")
  const priority = formData.get("priority")
  const contactPreference = formData.get("contactPreference")
  const copyToEmail = formData.get("copyToEmail") === "true"
  const attachments = formData.get("attachments") === "true"

  console.log("POST Request received with data:", {
    name,
    email,
    unit,
    queryType,
    message,
    priority,
    contactPreference,
    copyToEmail,
    attachments,
  })

  // In a real application, you would validate the data and store it
  // For example, you might save it to a database or send an email

  // Demonstrate a redirect (uncomment to test)
  // return NextResponse.redirect(new URL('/forms?success=true', request.url));

  // Return a success response
  return NextResponse.json(
    {
      success: true,
      method: "POST",
      data: {
        name,
        email,
        unit,
        queryType,
        message,
        priority,
        contactPreference,
        copyToEmail,
        attachments,
      },
      message: "Form data received via POST request",
    },
    { status: 201 },
  ) // Using 201 Created status code
}

