import { Composition } from "remotion";
import { Template } from "./Template";
import {
  HttpVsPubSub,
  TOTAL_VIDEO_FRAMES as HTTP_VS_PUBSUB_FRAMES,
} from "./HttpVsPubSub";
import {
  AtasanDikitDikitAI,
  TOTAL_VIDEO_FRAMES as ATASAN_AI_FRAMES,
} from "./AtasanDikitDikitAI";
import {
  RestApi,
  TOTAL_VIDEO_FRAMES as REST_API_FRAMES,
} from "./RestApi";
import {
  HttpStatusCode,
  TOTAL_VIDEO_FRAMES as HTTP_STATUS_CODE_FRAMES,
} from "./HttpStatusCode";

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

      {/* 2. Proyek: HTTP vs Pub/Sub (Cara Aplikasi Berkomunikasi) */}
      <Composition
        id="HttpVsPubSub"
        component={HttpVsPubSub}
        durationInFrames={HTTP_VS_PUBSUB_FRAMES} // Exactly 44.0 seconds @ 30fps (1320 frames)
        fps={30}
        width={1080}
        height={1920}
      />

      {/* 3. Proyek: Atasan Dikit-Dikit Pake AI (Naskah 2) */}
      <Composition
        id="AtasanDikitDikitAI"
        component={AtasanDikitDikitAI}
        durationInFrames={ATASAN_AI_FRAMES} // Exactly 43.32 seconds @ 30fps (1300 frames)
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          enableSfx: true,
          enableVoiceover: false,
          sfxVolume: 1.0,
        }}
      />

      {/* 4. Proyek: REST API (Naskah 3) */}
      <Composition
        id="RestApi"
        component={RestApi}
        durationInFrames={REST_API_FRAMES} // Exactly 46.0 seconds @ 30fps (1380 frames)
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          enableVoiceover: true,
          enableSfx: true,
          sfxVolume: 1.0,
        }}
      />

      {/* 5. Proyek Baru: HTTP Status Code (Naskah 4) */}
      <Composition
        id="HttpStatusCode"
        component={HttpStatusCode}
        durationInFrames={HTTP_STATUS_CODE_FRAMES} // Scenes 1 - 6 (Full Video): 1620 frames (54.0s @ 30fps)
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          enableVoiceover: true,
          enableSfx: true,
          sfxVolume: 1.0,
        }}
      />
    </>
  );
};
