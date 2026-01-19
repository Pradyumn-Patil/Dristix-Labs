# Physics-Based Logo Animation Design

## Overview

A Matter.js physics simulation where the Dristix logo's outer square rotates continuously while the inner blue cube tumbles realistically inside, responding to gravity.

## Requirements

- Outer black square rotates continuously (slow rotation)
- Inner blue cube tumbles, slides, and falls realistically due to gravity
- Browser slider control to adjust rotation speed in real-time
- Standalone HTML file, no build step needed

## Technical Approach

### Physics Engine: Matter.js

- Loaded via CDN (~80KB)
- Handles gravity, collisions, friction automatically
- Renders to HTML canvas

### Simulation Setup

- **Container:** 4 static wall bodies forming a square, rotated together around center point
- **Cube:** Dynamic body with moderate friction, low restitution (minimal bounce)
- **Gravity:** Constant world-down direction; as walls rotate, cube falls toward whichever wall is "bottom"

### Controls

- HTML range slider (0 to 0.02 radians/frame)
- Default: ~0.005 radians/frame (1 rotation per ~20 seconds)
- Updates in real-time

## File Structure

Single file: `logo-animation-physics.html`

```
logo-animation-physics.html
├── Styles (centering, canvas shadow, slider)
├── Canvas element (Matter.js render target)
├── Slider input + label
└── Script
    ├── Matter.js setup (Engine, Render, Bodies)
    ├── 4 wall bodies + 1 dynamic cube
    ├── Animation loop (rotate walls, update physics)
    └── Slider event listener
```

## Visual Specifications

- Container: 200x200px (scaled from 40x40 for visibility)
- Cube: ~50x50px (proportional)
- Canvas: 300x300px (room for rotation)
- Colors: Black stroke (#1a1a1a) for walls, #3caceb for cube
