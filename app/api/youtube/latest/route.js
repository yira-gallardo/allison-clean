import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const channelHandle = searchParams.get("channelHandle");

  const apiKey = process.env.YOUTUBE_API_KEY;

  if (!channelHandle) {
    return NextResponse.json(
      { error: "Channel handle is required" },
      { status: 400 }
    );
  }

  if (!apiKey) {
    return NextResponse.json(
      { error: "YouTube API key is not configured" },
      { status: 500 }
    );
  }

  try {
    let channelData;

    // If it's a channel ID (starts with UC), use it directly
    if (channelHandle.startsWith("UC")) {
      const channelResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${channelHandle}&key=${apiKey}`
      );

      if (!channelResponse.ok) {
        const errorData = await channelResponse.json();
        console.error("YouTube API channel error:", errorData);
        throw new Error(
          `Failed to fetch channel data: ${
            errorData.error?.message || channelResponse.statusText
          }`
        );
      }

      channelData = await channelResponse.json();
    } else {
      // For handles like @allison, use forHandle parameter
      const handle = channelHandle.startsWith("@")
        ? channelHandle.substring(1)
        : channelHandle;

      const channelResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&forHandle=${encodeURIComponent(
          handle
        )}&key=${apiKey}`
      );

      if (!channelResponse.ok) {
        const errorData = await channelResponse.json();
        console.error("YouTube API forHandle error:", errorData);
        throw new Error(
          `Failed to fetch channel by handle: ${
            errorData.error?.message || channelResponse.statusText
          }`
        );
      }

      channelData = await channelResponse.json();
    }

    if (!channelData.items || channelData.items.length === 0) {
      throw new Error("Channel not found");
    }

    const uploadsPlaylistId =
      channelData.items[0].contentDetails.relatedPlaylists.uploads;

    // Get the latest video from the uploads playlist
    const videosResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=1&order=date&key=${apiKey}`
    );

    if (!videosResponse.ok) {
      const errorData = await videosResponse.json();
      console.error("YouTube API videos error:", errorData);
      throw new Error(
        `Failed to fetch videos: ${
          errorData.error?.message || videosResponse.statusText
        }`
      );
    }

    const videosData = await videosResponse.json();

    if (!videosData.items || videosData.items.length === 0) {
      throw new Error("No videos found");
    }

    return NextResponse.json(videosData.items[0]);
  } catch (error) {
    console.error("YouTube API error:", error);
    return NextResponse.json(
      { error: error.message, details: error.toString() },
      { status: 500 }
    );
  }
}
