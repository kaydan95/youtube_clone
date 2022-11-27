import React from "react";
import ChannelThumbnail from "./ChannelThumbnail";

function ChannelInfo({ id, name }) {
  return (
    <div className="flex my-4 mb-8 items-center">
      {id && <ChannelThumbnail id={id} alt={name} />}
      <p className="text-lg font-medium ml-2">{name}</p>
    </div>
  );
}

export default ChannelInfo;
