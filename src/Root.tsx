import { Composition } from "remotion";
import { Template } from "./Template";
import {
  HttpVsPubSub,
  TOTAL_VIDEO_FRAMES as HTTP_VS_PUBSUB_FRAMES,
} from "./HttpVsPubSub";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* 1. Original Master Template */}
      <Composition
        id="Template"
        component={Template}
        durationInFrames={300} // Exactly 10.0 seconds @ 30fps
        fps={30}
        width={1080}
        height={1920}
      />

      {/* 2. Proyek Baru: HTTP vs Pub/Sub (Cara Aplikasi Berkomunikasi) */}
      <Composition
        id="HttpVsPubSub"
        component={HttpVsPubSub}
        durationInFrames={HTTP_VS_PUBSUB_FRAMES} // Exactly 44.0 seconds @ 30fps (1320 frames)
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};
