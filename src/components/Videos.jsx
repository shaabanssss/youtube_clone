import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from "./index.js";
const Videos = ({ videos }) => {
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((item, index) => (
        <Box key={index}>
          {item.id.videoId && <VideoCard videos={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
