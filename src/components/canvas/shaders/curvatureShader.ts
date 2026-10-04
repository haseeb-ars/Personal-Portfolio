export const CurvatureShader = {
  uniforms: {
    uTexture: { value: null },
    uScrollVelocity: { value: 0 },
    uHover: { value: 0 },
    uTime: { value: 0 },
    uResolution: { value: [1, 1] },
  },
  vertexShader: `
    uniform float uScrollVelocity;
    uniform float uHover;
    varying vec2 vUv;
    varying float vWave;

    void main() {
      vUv = uv;
      vec3 pos = position;

      // Bend plane geometry based on Y position and scroll velocity
      float distanceToCenter = length(pos.xy);
      float bend = sin(pos.y * 2.0) * uScrollVelocity * 0.003;
      pos.z += bend;
      pos.x += bend * 0.2;

      vWave = bend;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D uTexture;
    uniform float uHover;
    uniform float uTime;
    varying vec2 vUv;
    varying float vWave;

    void main() {
      vec2 uv = vUv;

      // Liquid ripple displacement on hover
      if (uHover > 0.01) {
        float wave = sin(uv.y * 10.0 + uTime * 3.0) * 0.015 * uHover;
        uv.x += wave;
        uv.y += wave;
      }

      // RGB split effect during scroll or hover
      float shift = (vWave * 0.5 + uHover * 0.02);
      vec4 r = texture2D(uTexture, uv + vec2(shift, 0.0));
      vec4 g = texture2D(uTexture, uv);
      vec4 b = texture2D(uTexture, uv - vec2(shift, 0.0));

      vec4 color = vec4(r.r, g.g, b.b, 1.0);

      // Subtle vignette overlay
      float dist = length(uv - vec2(0.5));
      color.rgb *= (1.0 - dist * 0.3);

      gl_FragColor = color;
    }
  `,
};
