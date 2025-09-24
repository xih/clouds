import { useFrame, useThree } from "@react-three/fiber";
import { useSpring } from "framer-motion";
import type { FolderSettings } from "leva/dist/declarations/src/types";
import { ToneMappingMode } from "postprocessing";
import { useEffect } from "react";

import { springOptions } from "./springOptions";
import { useControls } from "leva";

export interface useExposureControlValues {
  toneMappingMode: ToneMappingMode;
  exposure: number;
}

export function useToneMappingControls(
  { exposure: initialExposure = 1 }: Partial<useExposureControlValues> = {},
  folderSettings?: FolderSettings
): useExposureControlValues {
  const [values, set] = useControls(
    "tone mapping",
    () => ({
      toneMappingMode: {
        value: ToneMappingMode.AGX,
        options: {
          AgX: ToneMappingMode.AGX,
          Reinhard: ToneMappingMode.REINHARD,
          Cineon: ToneMappingMode.CINEON,
          "ACES Filmic": ToneMappingMode.ACES_FILMIC,
          Linear: ToneMappingMode.LINEAR,
        },
      },
      exposure: {
        value: initialExposure,
        min: 1,
        max: 100,
      },
    }),
    { collapsed: true, ...folderSettings }
  );

  const { exposure } = values;
  const springExposure = useSpring(exposure, springOptions);
  useEffect(() => {
    springExposure.set(exposure);
  }, [exposure, set, springExposure]);

  useFrame(({ gl }) => {
    gl.toneMappingExposure = springExposure.get();
  });

  const { invalidate } = useThree();
  useEffect(() => {
    return springExposure.on("change", () => {
      invalidate();
    });
  }, [springExposure, invalidate]);

  return values;
}
