import React from "react";
import { useYoutubeApi } from "../context/YoutubeApiContext";
import { useQuery } from "@tanstack/react-query";
import VideoCard from "./VideoCard";

function RelatedVideos({ id }) {
  const { api } = useYoutubeApi();
  const {
    error,
    isLoading,
    data: videos,
  } = useQuery(["related", id], () => api.getRelatedVideo(id), {
    staleTime: 1000 * 60 * 5,
  });
  return (
    <>
      {isLoading && <p>Loading</p>}
      {error && <p>wrong..</p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} type="list" />
          ))}
        </ul>
      )}
    </>
  );
}

export default RelatedVideos;
