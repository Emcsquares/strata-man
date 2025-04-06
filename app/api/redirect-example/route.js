import { NextResponse } from "next/server"

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const redirectType = searchParams.get("type") || "temporary"

  // Get the base URL (protocol + host)
  const baseUrl = request.headers.get("host")
  const protocol = request.headers.get("x-forwarded-proto") || "http"
  const fullBaseUrl = `${protocol}://${baseUrl}`

  if (redirectType === "temporary") {
    // 302 Found - Temporary redirect
    return NextResponse.redirect(new URL("/forms?redirected=true", fullBaseUrl), 302)
  } else if (redirectType === "permanent") {
    // 301 Moved Permanently
    return NextResponse.redirect(new URL("/forms?redirected=true", fullBaseUrl), 301)
  } else if (redirectType === "see-other") {
    // 303 See Other - typically used after a POST operation
    return NextResponse.redirect(new URL("/forms?redirected=true", fullBaseUrl), 303)
  } else {
    // 307 Temporary Redirect - preserves the HTTP method
    return NextResponse.redirect(new URL("/forms?redirected=true", fullBaseUrl), 307)
  }
}

