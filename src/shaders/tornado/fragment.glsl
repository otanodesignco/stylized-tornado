uniform float uTime;
uniform vec3 uColor;
uniform float uTwirl;
uniform vec2 uRadialShear;
uniform vec2 uTwirlOffset;
uniform vec2 uRadialOffset;
uniform vec2 uTwirlCenter;
uniform vec2 uRadialCenter;
uniform float uNoisePower;
uniform float uAlphaThreshold;

in vec2 vUv;

#include ../util/clip.glsl
#include ../uv/twirl.glsl
#include ../uv/radialShear.glsl
#include ../noise/noiseSimple.glsl
#include ../util/remap.glsl

void main()
{

    vec2 uv = vUv;
    float time = uTime;

    vec2 twirlOffset = vec2( time * uTwirlOffset.x, time * uTwirlOffset.y );
    vec2 radialOffset = vec2( time * uRadialOffset.x, time * uRadialOffset.y );

    vec2 uvRadial = radialShear( uv, uRadialCenter, uRadialShear, radialOffset );
    vec2 uvTwirl = twirl( uv, uTwirlCenter, uTwirl, twirlOffset );

    float noiseRadial = noiseSimple( uvRadial, 20.0 );
    float noiseTwirl = noiseSimple( uvTwirl, 20.0 );

    float noise = noiseRadial * noiseTwirl;

    noise = pow( noise, uNoisePower );

    float dissolve = remap( noise, 0.0, 1.0, 1.0, 0.0 );

    vec3 colorFinal = uColor;
    colorFinal *= noise;

    clip( noise, uAlphaThreshold, 0 );

    gl_FragColor = vec4( colorFinal, dissolve );
    #include <tonemapping_fragment>
    #include <colorspace_fragment>

}