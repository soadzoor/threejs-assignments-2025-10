export interface IRGBObject {
	r: number;
	g: number;
	b: number;
	a?: number;
}

export class ColorUtils {
	public static hex2Array(hex: string | number, opacity: number = 1): [number, number, number, number] {
		const {r, g, b, a} = ColorUtils.hex2rgb(hex, opacity, "RGBObject") as IRGBObject;

		return [r / 255, g / 255, b / 255, a ?? 0];
	}

	/**
	 * https://stackoverflow.com/questions/12943774/hex-to-rgb-converter
	 * @param color
	 */
	public static hex2rgb(color: string | number, opacity: number = 1, returnType: "string" | "RGBObject" = "string"): string | IRGBObject {
		let r: string | number;
		let g: string | number;
		let b: string | number;

		if (typeof color === "string") {
			if (color.charAt(0) === "#") {
				color = color.substring(1);
			}
			if (color.length === 3) {
				color =
					color.substring(0, 1) +
					color.substring(0, 1) +
					color.substring(1, 2) +
					color.substring(1, 2) +
					color.substring(2, 3) +
					color.substring(2, 3);
			}
			r = color.charAt(0) + color.charAt(1);
			g = color.charAt(2) + color.charAt(3);
			b = color.charAt(4) + color.charAt(5);
			r = parseInt(r, 16);
			g = parseInt(g, 16);
			b = parseInt(b, 16);
		} else {
			r = (color >> 16) & 255;
			g = (color >> 8) & 255;
			b = color & 255;
		}

		if (returnType === "RGBObject") {
			return {
				r: r,
				g: g,
				b: b,
				a: opacity,
			};
		} else {
			return opacity === 1 ? `rgb(${r}, ${g}, ${b})` : `rgba(${r}, ${g}, ${b}, ${opacity})`;
		}
	}

	public static getRandomColor(): number {
		return Math.round(Math.random() * 0xffffff);
	}
}
