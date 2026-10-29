import { Composition } from "remotion";
import { Template } from "./Template";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* 4. Composition: Infinite Camera Template (Reusable Apple-Style Rig) */}
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
