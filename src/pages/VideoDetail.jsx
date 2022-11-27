import React from "react";
import { useLocation } from "react-router-dom";
import ChannelInfo from "../components/ChannelInfo";
import RelatedVideos from "../components/RelatedVideos";

function VideoDetail() {
  const {
    state: { video },
  } = useLocation();

  const { title, channelId, channelTitle, description } = video.snippet;

  return (
    <section className="mt-4 w-full overflow-y-scroll h-[700px] flex flex-col lg:flex-row pl-4">
      <article className="basis-4/6">
        <iframe
          id="player"
          type="text/html"
          width="100%"
          height="540"
          src={`http://www.youtube-nocookie.com/embed/${video.id}`}
          frameBorder="0"
          title={title}
        />
        <div className="pt-4">
          <h2 className="text-xl font-bold">{title}</h2>
          <ChannelInfo id={channelId} name={channelTitle} />
          <pre className="whitespace-pre-wrap text-sm">{description}</pre>
        </div>
      </article>
      <section className="basis-2/6 pl-4 pt-4">
        <RelatedVideos id={video.id} />
      </section>
    </section>
  );
}

export default VideoDetail;
