"use client";

import { EffectComposer } from "@react-three/postprocessing";
import { AerialPerspective, Atmosphere } from "@takram/three-atmosphere/r3f";
import { Clouds } from "@takram/three-clouds/r3f";

const CloudsScene = () => (
  <Atmosphere>
    <EffectComposer enableNormalPass>
      <Clouds qualityPreset="high" coverage={0.4} />
      <AerialPerspective sky sunLight skyLight />
    </EffectComposer>
  </Atmosphere>
);

export default CloudsScene;
