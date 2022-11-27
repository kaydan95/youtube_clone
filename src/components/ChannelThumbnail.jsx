import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useYoutubeApi } from "../context/YoutubeApiContext";

function ChannelThumbnail({ id }) {
  const { api } = useYoutubeApi();
  const { data: url } = useQuery(
    ["channel", id],
    () => api.getChannelThumbnail(id),
    { staleTime: 1000 * 60 * 5 }
  );

  return (
    <>
      {url && (
        <img
          src={url}
          alt="thumbnailImg"
          className="w-9 h-9 rounded-full mt-1"
        />
      )}
    </>
  );
}

export default ChannelThumbnail;
