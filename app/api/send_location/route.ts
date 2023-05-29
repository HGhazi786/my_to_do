
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  if (typeof window !== "undefined" && "geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude, speed } = position.coords;
        const locationData = { latitude, longitude, speed };
        return NextResponse.json(locationData);
      },
      (error) => {
        console.log("Error getting location:", error);
      }
    );
  }
}
