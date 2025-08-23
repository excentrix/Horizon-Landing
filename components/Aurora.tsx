'use client';

import React, { useRef, useEffect } from 'react';
import { Program, Mesh, Vec2, Vec3, Vec4, Mat4 } from 'ogl';

interface AuroraProps {
    colorStops?: string[];
    blend?: number;
    amplitude?: number;
    speed?: number;
    className?: string;
}

const Aurora: React.FC<AuroraProps> = ({
    colorStops = ['#3A29FF', '#FF94B4', '#FF3232'],
    blend = 0.5,
    amplitude = 1.0,
    speed = 0.5,
    className = '',
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const programRef = useRef<Program | null>(null);
    const meshRef = useRef<Mesh | null>(null);
    const timeRef = useRef<number>(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
        if (!gl) return;

        // Vertex shader
        const vertexShader = `
      attribute vec2 position;
      varying vec2 vUv;
      
      void main() {
        vUv = position * 0.5 + 0.5;
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

        // Fragment shader
        const fragmentShader = `
      precision highp float;
      
      varying vec2 vUv;
      uniform float time;
      uniform float blend;
      uniform float amplitude;
      
      vec3 color1 = vec3(0.23, 0.16, 1.0); // #3A29FF
      vec3 color2 = vec3(1.0, 0.58, 0.71); // #FF94B4
      vec3 color3 = vec3(1.0, 0.20, 0.20); // #FF3232
      
      void main() {
        vec2 uv = vUv;
        
        // Create flowing aurora effect
        float flow1 = sin(uv.x * 10.0 + time * 0.5) * 0.5 + 0.5;
        float flow2 = sin(uv.x * 8.0 + time * 0.3) * 0.5 + 0.5;
        float flow3 = sin(uv.x * 12.0 + time * 0.7) * 0.5 + 0.5;
        
        // Add amplitude variation
        flow1 *= sin(time * 0.2) * amplitude + 1.0;
        flow2 *= sin(time * 0.15) * amplitude + 1.0;
        flow3 *= sin(time * 0.25) * amplitude + 1.0;
        
        // Blend colors based on flow values
        vec3 color = mix(color1, color2, flow1 * blend);
        color = mix(color, color3, flow2 * blend);
        color = mix(color, color1, flow3 * blend);
        
        // Add some transparency for overlay effect
        float alpha = 0.8;
        
        gl_FragColor = vec4(color, alpha);
      }
    `;

        try {
            const program = new Program(gl, {
                vertex: vertexShader,
                fragment: fragmentShader,
                uniforms: {
                    time: { value: 0 },
                    blend: { value: blend },
                    amplitude: { value: amplitude },
                },
            });

            programRef.current = program;

            // Create mesh
            const geometry = new Mesh(gl, {
                geometry: {
                    position: { size: 2, data: new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]) },
                    index: { data: new Uint16Array([0, 1, 2, 2, 1, 3]) },
                },
                program,
            });

            meshRef.current = geometry;

            // Animation loop
            const animate = () => {
                timeRef.current += speed * 0.01;

                if (programRef.current) {
                    programRef.current.uniforms.time.value = timeRef.current;
                }

                if (meshRef.current) {
                    meshRef.current.program.bind();
                    meshRef.current.draw();
                }

                requestAnimationFrame(animate);
            };

            animate();

            return () => {
                if (meshRef.current) {
                    meshRef.current.remove();
                }
                if (programRef.current) {
                    programRef.current.remove();
                }
            };
        } catch (error) {
            console.error('Error creating Aurora effect:', error);
        }
    }, [colorStops, blend, amplitude, speed]);

    return (
        <div className={`absolute inset-0 overflow-hidden ${className}`} data-oid="g8ztwrv">
            <canvas
                ref={canvasRef}
                className="w-full h-full"
                style={{ display: 'block' }}
                data-oid="6em5kw6"
            />
        </div>
    );
};

export default Aurora;
