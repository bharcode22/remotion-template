import { Composition } from "remotion";
import { Template } from "./Template";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* Composition: Hybrid Kinetic Journey Template (Varied Transitions: Dengan Garis & Tanpa Garis) */}
      <Composition
        id="Template"
        component={Template}
        durationInFrames={300} // Exactly 10.0 seconds @ 30fps
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};
