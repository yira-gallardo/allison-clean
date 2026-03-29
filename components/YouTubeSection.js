import DynamicVideo from "./DynamicVideo";

export default function YouTubeSection() {
  // YouTube channel handle
  const channelHandle = "@allison";

  return <DynamicVideo channelHandle={channelHandle} />;
}
