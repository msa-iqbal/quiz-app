import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import useVideoList from "../hooks/useVideoList";
import classes from "../styles/Videos.module.css";
import Video from "./Video";

export default function Videos() {
  const [page, setPage] = useState(1);
  const { loading, error, videos, hasMore } = useVideoList(page);

  const fetchMoreVideos = () => {
    if (!loading && hasMore) {
      setPage((prevPage) => prevPage + 1); // Increment page to fetch more data
    }
  };

  return (
    <div>
      {videos.length > 0 && (
        <InfiniteScroll
          dataLength={videos.length}
          next={fetchMoreVideos}
          hasMore={hasMore}
          loader={<div>Loading more videos...</div>}
          className={classes.videos}
        >
          {videos.map((video, index) =>
            video.noq > 0 ? (
              <Link
                to={{
                  pathname: `/quiz/${video.youtubeID}`,
                }}
                state={{ videoTitle: video.title }} // Pass videoTitle in state
                key={`${video.youtubeID}-${index}`}
              >
                <Video
                  title={video.title}
                  id={video.youtubeID}
                  noq={video.noq}
                />
              </Link>
            ) : (
              <Video
                title={video.title}
                id={video.youtubeID}
                noq={video.noq}
                key={`${video.youtubeID}-${index}`}
              />
            )
          )}
        </InfiniteScroll>
      )}
      {!loading && videos.length === 0 && !hasMore && (
        <div>No videos found!</div> // Only show when no videos exist at all
      )}
      {error && <div>An error occurred while fetching videos!</div>}
    </div>
  );
}
