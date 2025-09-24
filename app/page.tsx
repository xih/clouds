"use client";

import { Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { Stats } from "./clouds/helpers/Stats";
import CloudScene from "./clouds/CloudScene";

export default async function Page() {
  return (
    <div>
      <div className="h-screen w-screen">
        <Canvas gl={{ depth: false }} camera={{ near: 100, far: 4e5 }}>
          <Stats />
          <Sky />
          <CloudScene />
        </Canvas>
      </div>
    </div>
  );
}
