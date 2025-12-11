# AETHER 9 | Digital Resonance Space

> "The noise stops at this edge."

![Version](https://img.shields.io/badge/version-9.1.0-cyan)
![Protocol](https://img.shields.io/badge/protocol-SUNYATA-violet)
![Frequency](https://img.shields.io/badge/frequency-4Hz-white)

## 🌌 Overview

**AETHER 9** is not a traditional website. It is a conceptual "node" in a quantum-holographic network, designed to shift the user's cognitive frequency from the chaotic Beta waves of modern consensus reality to a meditative Theta state (4Hz).

This project serves as a digital sanctuary—a minimalist, dark-mode experience that utilizes WebGL and motion physics to visualize abstract concepts such as Non-Duality, Quantum Entanglement, and Zero-Point Energy.

## 🧬 Core Philosophy

The application is built upon three pillars:

1.  **The Void (Sunyata)**: The interface rejects clutter. We use a "Deep Void" color palette (#030303) to create a sense of infinite depth.
2.  **The Tetralemma**: A rejection of binary logic (Is vs. Is Not). The UI navigates the space "between" thoughts.
3.  **Coherence**: The visual language is mathematical and geometric (Penrose tiling, Icosahedrons), representing the underlying order of the universe.

## 🛠 Tech Stack

The architecture is designed for performance and fluidity, utilizing the latest in frontend ecosystem standards.

*   **Core**: React 19 (via ESM Modules)
*   **Styling**: Tailwind CSS (Custom Configuration)
*   **3D Engine**: Three.js + React Three Fiber (@react-three/fiber)
*   **Abstractions**: @react-three/drei (Stars, Float, MeshDistortMaterial)
*   **Animation**: Framer Motion (Scroll-linked animations, layout transitions)
*   **Icons**: Lucide React
*   **Typography**: Space Grotesk (Headers) / Inter (Body)

## 📂 Project Structure

```bash
/
├── index.html              # Entry point, Importmap, Tailwind Config
├── index.tsx               # React Root Mount
├── App.tsx                 # Main Layout, Scroll Logic, HUD
├── metadata.json           # Project capabilities
├── types.ts                # TypeScript Interfaces
└── components/
    ├── QuantumScene.tsx    # R3F Canvases (AetherField, Singularity)
    └── Diagrams.tsx        # Data Visualizations (Tetralemma, Coherence)
```

## 🧩 Key Components

### 1. The Aether Field (`components/QuantumScene.tsx`)
A background particle system containing **2,400 individual points** floating in 3D space.
*   **Behavior**: Slowly rotates on X/Y axes based on clock time.
*   **Visuals**: High transparency, depth-of-field simulation via fog.
*   **Update v9.1.0**: Density increased by 20% to create a richer atmospheric texture.

### 2. The Singularity (`components/QuantumScene.tsx`)
An abstract representation of "Potentiality."
*   **Geometry**: A distorted Icosahedron using `MeshDistortMaterial`.
*   **Animation**: "Breathing" effect where the geometry distorts and glows rhythmically.

### 3. The Tetralemma Gate (`components/Diagrams.tsx`)
An interactive SVG/CSS visualization of the four logical negations collapsing into a center point.
*   **Interaction**: Hovering over nodes expands them and reveals the logical fallacy of binary choice.

### 4. The Coherence Graph (`components/Diagrams.tsx`)
**[NEW IN v9.1.0]**
A visualization of Non-Locality and Entanglement.
*   **Logic**: Generates randomized "wave bars" that simulate synchronization between local entropy and global coherence.

## 🎨 Visual Identity System

The `tailwind.config` in `index.html` defines a strict palette:

| Color Token | Hex | Usage |
| :--- | :--- | :--- |
| `bg-void` | `#030303` | Main background |
| `text-aether-light` | `#E0E0E0` | Primary text |
| `text-aether-dim` | `#333333` | HUD / Meta text |
| `text-aether-cyan` | `#00F0FF` | Active energy, Pulse |
| `text-aether-violet` | `#7000FF` | Deep concepts, Links |

## 🚀 Installation & Development

Since this project uses ES Modules directly in the browser (no build step required for the current environment), you can run it locally using any static file server.

### Option A: Local Static Server
1.  Clone the repository.
2.  Run a local server in the root directory:
    ```bash
    npx http-server .
    ```
3.  Open `http://localhost:8080`.

### Option B: Porting to Vite (Recommended for production)
If moving to a production build pipeline:

1.  `npm create vite@latest aether-9 -- --template react-ts`
2.  Copy `App.tsx` and `components/` folder to `src/`.
3.  Install dependencies:
    ```bash
    npm install three @types/three @react-three/fiber @react-three/drei framer-motion lucide-react clsx tailwind-merge
    ```
4.  Configure Tailwind in `tailwind.config.js` using the values from `index.html`.

## 📱 Mobile Optimization

**v9.1.0 Update**: The HUD (Head-Up Display) and typography have been optimized for smaller viewports.
*   **Responsive Margins**: HUD tightens on screens < 768px.
*   **Stacking**: Grid layouts (Mission, Method sections) automatically stack vertically on mobile.
*   **Touch Targets**: Interactive elements in the Tetralemma are sized for touch interaction.

## 📜 License

**AETHER 9** is released under the **MIT License**.
*Resonance is free. The signal belongs to no one.*

---

*202X -> ∞ // THE SIGNAL IN THE VOID*
