import type {Side} from "three";
import {RawShaderMaterial, FrontSide} from "three";
import {ColorUtils} from "../../utils/ColorUtils";

export class WaveMaterial extends RawShaderMaterial {
	private static readonly _vertexShader: string = `precision highp float;
precision highp int;

attribute vec3 position;
attribute vec3 normal;
attribute vec2 uv;

uniform mat4 modelMatrix;
uniform mat4 viewMatrix;
uniform mat4 projectionMatrix;
uniform float time;

varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;

void main()
{
	vUv = uv;

	vec3 finalPos = vec3(position);

	finalPos.z = 0.2 * sin(finalPos.x + finalPos.y + time);

	vNormal = normalize(mat3(modelMatrix) * normal); // world space normal
	vec4 worldPos = modelMatrix * vec4(finalPos, 1.0);
	vPosition = worldPos.xyz;

	gl_Position = projectionMatrix * viewMatrix * worldPos;
}`;

	private static readonly _fragmentShader: string = `precision highp float;
precision highp int;

varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;

uniform vec3 color;
uniform vec3 lightPosition;
uniform vec3 viewPosition;

void main()
{
	// normalize normal
	vec3 N = normalize(vNormal);

	// direction to light
	vec3 L = normalize(lightPosition - vPosition);

	// Lambert diffuse
	float lambertian = max(dot(N, L), 0.0);

	// Specular
	vec3 V = normalize(viewPosition - vPosition);
	vec3 R = reflect(-L, N);
	float specAngle = max(dot(R, V), 0.0);
	float specular = pow(specAngle, 16.0);

	// final color
	vec3 finalColor = color * lambertian + vec3(1.0) * specular * 0.5;

	gl_FragColor = vec4(finalColor, 1.0);
}`;

	constructor(color: number, side: Side = FrontSide) {
		super({
			uniforms: {
				color: {value: ColorUtils.hex2Array(color).slice(0, 3)},
				time: {value: 0},
			},
			side,
			vertexShader: WaveMaterial._vertexShader,
			fragmentShader: WaveMaterial._fragmentShader,
		});
	}

	private getArrayFromColor(color: number) {
		return ColorUtils.hex2Array(color).slice(0, 3);
	}

	public setColor(color: number) {
		this.uniforms.color.value = this.getArrayFromColor(color);
	}

	public setTime(time: number) {
		this.uniforms.time.value = time;
	}
}
