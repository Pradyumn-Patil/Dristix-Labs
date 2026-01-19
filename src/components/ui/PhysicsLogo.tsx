"use client";

import { useEffect, useRef } from "react";
import Matter from "matter-js";

interface PhysicsLogoProps {
  size?: number;
  rotationSpeed?: number;
}

export default function PhysicsLogo({
  size = 256,
  rotationSpeed = 0.005
}: PhysicsLogoProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const engineRef = useRef<Matter.Engine | null>(null);
  const renderRef = useRef<Matter.Render | null>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const { Engine, Render, Bodies, Body, Composite } = Matter;

    // Configuration
    const canvasSize = size * 1.2; // Extra room for rotation
    const containerSize = size * 0.78;
    const wallThickness = size * 0.025;
    const cubeSize = size * 0.2;
    const centerX = canvasSize / 2;
    const centerY = canvasSize / 2;

    // Create engine
    const engine = Engine.create();
    engine.gravity.y = 1;
    engine.gravity.x = 0;
    engineRef.current = engine;

    // Create renderer
    const render = Render.create({
      canvas: canvasRef.current,
      engine: engine,
      options: {
        width: canvasSize,
        height: canvasSize,
        wireframes: false,
        background: "transparent",
        pixelRatio: window.devicePixelRatio || 1,
      },
    });
    renderRef.current = render;

    // Wall positions relative to center
    const halfContainer = containerSize / 2;
    const halfWall = wallThickness / 2;

    // Create walls (static bodies)
    const wallOptions = {
      isStatic: true,
      render: {
        fillStyle: "#1a1a1a",
      },
      friction: 0.8,
      restitution: 0.2,
    } as const;

    const topWall = Bodies.rectangle(
      centerX,
      centerY - halfContainer + halfWall,
      containerSize,
      wallThickness,
      wallOptions
    );
    const bottomWall = Bodies.rectangle(
      centerX,
      centerY + halfContainer - halfWall,
      containerSize,
      wallThickness,
      wallOptions
    );
    const leftWall = Bodies.rectangle(
      centerX - halfContainer + halfWall,
      centerY,
      wallThickness,
      containerSize,
      wallOptions
    );
    const rightWall = Bodies.rectangle(
      centerX + halfContainer - halfWall,
      centerY,
      wallThickness,
      containerSize,
      wallOptions
    );

    const walls = [topWall, bottomWall, leftWall, rightWall];

    // Create the blue cube
    const cube = Bodies.rectangle(centerX, centerY - 30, cubeSize, cubeSize, {
      render: {
        fillStyle: "#3caceb",
      },
      friction: 0.6,
      restitution: 0.3,
      frictionAir: 0.01,
    });

    // Add all bodies to the world
    Composite.add(engine.world, [...walls, cube]);

    // Function to rotate walls
    function rotateWalls(angle: number) {
      walls.forEach((wall) => {
        const dx = wall.position.x - centerX;
        const dy = wall.position.y - centerY;

        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        const newX = centerX + (dx * cos - dy * sin);
        const newY = centerY + (dx * sin + dy * cos);

        Body.setPosition(wall, { x: newX, y: newY });
        Body.setAngle(wall, wall.angle + angle);
      });
    }

    // Animation loop
    function animate() {
      rotateWalls(rotationSpeed);

      // Keep cube inside bounds (safety check)
      const dx = cube.position.x - centerX;
      const dy = cube.position.y - centerY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist > containerSize * 0.8) {
        Body.setPosition(cube, { x: centerX, y: centerY });
        Body.setVelocity(cube, { x: 0, y: 0 });
      }

      Engine.update(engine, 1000 / 60);
      animationRef.current = requestAnimationFrame(animate);
    }

    // Start
    Render.run(render);
    animate();

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      Render.stop(render);
      Engine.clear(engine);
      if (render.canvas) {
        render.canvas.remove();
      }
    };
  }, [size, rotationSpeed]);

  const canvasSize = size * 1.2;

  return (
    <canvas
      ref={canvasRef}
      width={canvasSize}
      height={canvasSize}
      style={{
        width: canvasSize,
        height: canvasSize,
      }}
    />
  );
}
