// src/components/Snow.jsx
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSnowPreset } from "tsparticles-preset-snow";

export default function Snow() {
  const particlesInit = useCallback(async engine => {
    await loadSnowPreset(engine);
  }, []);

  return (
    <Particles
      init={particlesInit}
      options={{
        preset: "snow",
        background: {
          color: "" // fondo transparente
        }
      }}
    />
  );
}
