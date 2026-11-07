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
import {
  StorageServer,
  TOTAL_VIDEO_FRAMES as STORAGE_SERVER_FRAMES,
} from "./StorageServer";
import {
  FrontendVsBackend,
  TOTAL_VIDEO_FRAMES as FE_VS_BE_FRAMES,
} from "./FrontendVsBackend";
import {
  ProgrammerAI,
  TOTAL_VIDEO_FRAMES as PROGRAMMER_AI_FRAMES,
} from "./ProgrammerAI";
import {
  SampahDigital,
  TOTAL_VIDEO_FRAMES as SAMPAH_DIGITAL_FRAMES,
} from "./SampahDigital";
import {
  RabbitMQDistribution,
  TOTAL_VIDEO_FRAMES as RABBITMQ_FRAMES,
} from "./RabbitMQDistribution";
import {
  CiCdPipeline,
  TOTAL_VIDEO_FRAMES as CICD_FRAMES,
} from "./CiCdPipeline";
import {
  CiCdMultiProduct,
  TOTAL_VIDEO_FRAMES as CICD_MULTI_PRODUCT_FRAMES,
} from "./CiCdMultiProduct";
import {
  ProductIntroduction,
  TOTAL_VIDEO_FRAMES as PRODUCT_INTRO_FRAMES,
} from "./ProductIntroduction";
import {
  PlanningAI,
  TOTAL_VIDEO_FRAMES as PLANNING_AI_FRAMES,
} from "./PlanningAI";
import {
  Template2,
  TOTAL_VIDEO_FRAMES as TEMPLATE2_FRAMES,
} from "./Template2";
import {
  HttpVsHttps,
  TOTAL_VIDEO_FRAMES as HTTP_VS_HTTPS_FRAMES,
} from "./HttpVsHttps";

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

      {/* 5. Proyek: HTTP Status Code (Naskah 4) */}
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

      {/* 6. Proyek Baru: Storage Server (Naskah 5) */}
      <Composition
        id="StorageServer"
        component={StorageServer}
        durationInFrames={STORAGE_SERVER_FRAMES} // Scenes 1 - 6 (Full Video, Lines 1 - 22): 1680 frames (56.0s @ 30fps)
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          enableVoiceover: true,
          enableSfx: true,
          sfxVolume: 1.0,
        }}
      />

      {/* 7. Proyek Baru: Frontend vs Backend (Naskah 6) */}
      <Composition
        id="FrontendVsBackend"
        component={FrontendVsBackend}
        durationInFrames={FE_VS_BE_FRAMES} // Full Video (Lines 1 - 20): 1260 frames (42.0s @ 30fps)
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          enableVoiceover: true,
          enableSfx: true,
          sfxVolume: 1.0,
        }}
      />

      {/* 8. Proyek Baru: Programmer di Era AI (Naskah 7) */}
      <Composition
        id="ProgrammerAI"
        component={ProgrammerAI}
        durationInFrames={PROGRAMMER_AI_FRAMES} // Full Video (Lines 1 - 17): 1720 frames (57.3s @ 30fps)
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          enableVoiceover: true,
          enableSfx: true,
          sfxVolume: 1.0,
        }}
      />

      {/* 9. Proyek Baru: Sampah Digital (Naskah 8) */}
      <Composition
        id="SampahDigital"
        component={SampahDigital}
        durationInFrames={SAMPAH_DIGITAL_FRAMES} // Full Video (Lines 1 - 24): 1720 frames (57.3s @ 30fps)
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          enableVoiceover: true,
          enableSfx: true,
          sfxVolume: 1.0,
        }}
      />

      {/* 10. Proyek Baru: RabbitMQ File Distribution (Naskah 9) */}
      <Composition
        id="RabbitMQDistribution"
        component={RabbitMQDistribution}
        durationInFrames={RABBITMQ_FRAMES} // Full Video (Lines 1 - 18): 1430 frames (47.5s @ 30fps)
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          enableVoiceover: true,
          enableSfx: true,
          sfxVolume: 1.0,
        }}
      />

      {/* 11. Proyek Baru: CI/CD Pipeline (Naskah 10) */}
      <Composition
        id="CiCdPipeline"
        component={CiCdPipeline}
        durationInFrames={CICD_FRAMES} // Full Video (Lines 1 - 16): 1450 frames (48.33s @ 30fps)
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          enableVoiceover: true,
          enableSfx: true,
          sfxVolume: 1.0,
        }}
      />

      {/* 12. Proyek Baru: CI/CD Multi-Product Global Distribution (Naskah 11) */}
      <Composition
        id="CiCdMultiProduct"
        component={CiCdMultiProduct}
        durationInFrames={CICD_MULTI_PRODUCT_FRAMES} // Full Video (Lines 1 - 16): 1440 frames (48.0s @ 30fps)
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          enableVoiceover: true,
          enableSfx: true,
          sfxVolume: 1.0,
        }}
      />

      {/* 13. Proyek Baru: Product Introduction & Architecture (Naskah 12) */}
      <Composition
        id="ProductIntroduction"
        component={ProductIntroduction}
        durationInFrames={PRODUCT_INTRO_FRAMES} // Full Video: 1710 frames (57.0s @ 30fps)
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          enableVoiceover: true,
          enableSfx: true,
          sfxVolume: 1.0,
        }}
      />

      {/* 14. Proyek Baru: Planning AI - Workflow & Arsitektur Developer (Naskah 13) */}
      <Composition
        id="PlanningAI"
        component={PlanningAI}
        durationInFrames={PLANNING_AI_FRAMES} // Full Video: 1600 frames (53.33s @ 30fps)
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          enableVoiceover: true,
          enableSfx: true,
          sfxVolume: 1.0,
        }}
      />

      {/* 15. Template 2: Glassmorphism Motion Graphics Template */}
      <Composition
        id="Template2"
        component={Template2}
        durationInFrames={TEMPLATE2_FRAMES} // Full Video: 1600 frames (53.33s @ 30fps)
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          enableVoiceover: true,
          enableSfx: true,
          sfxVolume: 1.0,
        }}
      />

      {/* 16. Proyek Baru: HTTP vs HTTPS (Naskah 14) */}
      <Composition
        id="HttpVsHttps"
        component={HttpVsHttps}
        durationInFrames={HTTP_VS_HTTPS_FRAMES} // Full Video: 1375 frames (45.83s @ 30fps)
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
