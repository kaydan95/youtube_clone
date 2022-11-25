import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import VideoCard from "../components/VideoCard";
import { useYoutubeApi } from "../context/YoutubeApiContext";

function Videos() {
  const { keyword } = useParams();
  const { api } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos", keyword], () => api.getSearchResult(keyword), {
    staleTime: 1000 * 60 * 1,
  });

  return (
    <div className="w-full overflow-y-scroll h-[700px]">
      {isLoading && <p>Loading</p>}
      {error && <p>wrong..</p>}
      {videos && (
        <ul className="w-full pl-1 pt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 gap-y-4">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default Videos;
