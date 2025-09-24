"use client";

import { Box, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { EffectComposer, SMAA, ToneMapping } from "@react-three/postprocessing";
// import type { StoryFn } from "@storybook/react-vite";
import { Fragment, useRef, useState, type FC } from "react";

import { Sky } from "@react-three/drei";
import {
  AerialPerspective,
  Atmosphere,
  type AtmosphereApi,
} from "@takram/three-atmosphere/r3f";
import type { CloudsEffect } from "@takram/three-clouds";
import { Clouds } from "@takram/three-clouds/r3f";
import { radians } from "@takram/three-geospatial";
import { Dithering, LensFlare } from "@takram/three-geospatial-effects/r3f";
import { EastNorthUpFrame } from "@takram/three-geospatial/r3f";

import { Stats } from "./helpers/Stats";
import { useApplyLocation } from "./helpers/useApplyLocation";
import { useControls } from "leva";
import { useLocalDateControls } from "./helpers/useLocationDateControls";
// import { useLocalDateControls } from "../helpers/useLocalDateControls";
import { useLocationControls } from "./helpers/useLocationControl";
import { useToneMappingControls } from "./helpers/useToneMappingControls";
import { useCloudsControls } from "./helpers/useCloudControls";
import CloudScene from "./CloudScene";

const page = () => {
  return (
    <div className="h-screen w-screen">
      <Canvas gl={{ depth: false }} camera={{ near: 100, far: 4e5 }}>
        <Stats />
        <Sky />
        <CloudScene />
      </Canvas>
    </div>
  );
};

export default page;
