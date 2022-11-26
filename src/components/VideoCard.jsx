import React from "react";
import { format } from "timeago.js";
import { useNavigate } from "react-router-dom";
import ChannelThumbnail from "./ChannelThumbnail";

function VideoCard({ video, type }) {
  const { title, channelTitle, thumbnails, publishedAt, channelId } =
    video.snippet;
  const img = thumbnails.medium.url;
  const isList = type === "list";

  const navigate = useNavigate();

  const goDetail = () => {
    navigate(`/videos/watch/${video.id}`, { state: { video } });
  };

  return (
    <li
      className={
        isList
          ? "flex rounded-lg mb-4 cursor-pointer"
          : "ml-3 rounded-lg h-72 cursor-pointer"
      }
      onClick={goDetail}
    >
      <img
        className={isList ? "w-48 rounded-lg " : "w-full rounded-lg"}
        src={img}
        alt={title}
      />
      <div className="flex h-24 pt-3 pl-1">
        {isList ? <></> : <ChannelThumbnail id={channelId} />}
        <div className="ml-3 flex flex-col">
          <div>
            <p
              className={
                isList
                  ? "text-sm font-semibold mb-1 line-clamp-2"
                  : "font-semibold mb-1 line-clamp-2"
              }
            >
              {title}
            </p>
          </div>
          <div className="h-fit">
            <p className="text-xs opacity-80">{channelTitle}</p>
            <p className="text-xs opacity-80">{format(publishedAt)}</p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default VideoCard;
