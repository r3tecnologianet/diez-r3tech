/**
 * This code was generated by Diez version 10.6.0.
 * Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { Color, DropShadow, File, Font, GradientStop, Image, LinearGradient, Point2D, Typograph } from "@diez/prefabs";

const fromFigmaColors = {
    teal50: Color.rgba(77, 197, 208, 1),
    teal40: Color.rgba(119, 221, 231, 1),
    teal501: Color.rgba(127, 237, 248, 1),
    teal60: Color.rgba(141, 245, 255, 1),
    purp30: Color.rgba(138, 108, 244, 1),
    purp40: Color.rgba(151, 122, 254, 1),
    purp50: Color.rgba(166, 141, 255, 1),
    purp60: Color.rgba(183, 163, 255, 1)
};

const fromFigmaGradients = {
    grad1: new LinearGradient({ stops: [GradientStop.make(0, Color.rgba(141, 245, 255, 1)), GradientStop.make(1, Color.rgba(183, 162, 255, 1))], start: Point2D.make(0.865941961194631, 0.131944384027248), end: Point2D.make(0.105072476657214, 0.937499990588448) })
};

const fromFigmaShadows = {
    shad20: new DropShadow({ offset: Point2D.make(0, 1), radius: 4, color: Color.rgba(0, 0, 0, 0.25) }),
    shad50: new DropShadow({ offset: Point2D.make(0, 3), radius: 9, color: Color.rgba(0, 0, 0, 0.25999999046325684) }),
    shad90: new DropShadow({ offset: Point2D.make(0, 7), radius: 19, color: Color.rgba(0, 0, 0, 0.33000001311302185) })
};

const fromFigmaTypography = {
    heading1: new Typograph({ letterSpacing: 0, fontSize: 18, lineHeight: 21.09375, color: Color.rgba(0, 0, 0, 1), font: new Font({ name: "Poppins-Bold" }) }),
    body: new Typograph({ letterSpacing: 0, fontSize: 12, lineHeight: 14.0625, color: Color.rgba(0, 0, 0, 1), font: new Font({ name: "Poppins-Regular" }) })
};

export const fromFigmaImagesFiles = {
    iconFastFoodHotDog: new File({ src: "assets/FromFigma.figma.contents/images/IconFastFoodHotDog.png" }),
    iconFastFoodHotDog2x: new File({ src: "assets/FromFigma.figma.contents/images/IconFastFoodHotDog@2x.png" }),
    iconFastFoodHotDog3x: new File({ src: "assets/FromFigma.figma.contents/images/IconFastFoodHotDog@3x.png" }),
    iconFastFoodHotDog4x: new File({ src: "assets/FromFigma.figma.contents/images/IconFastFoodHotDog@4x.png" }),
    iconBinocular: new File({ src: "assets/FromFigma.figma.contents/images/IconBinocular.png" }),
    iconBinocular2x: new File({ src: "assets/FromFigma.figma.contents/images/IconBinocular@2x.png" }),
    iconBinocular3x: new File({ src: "assets/FromFigma.figma.contents/images/IconBinocular@3x.png" }),
    iconBinocular4x: new File({ src: "assets/FromFigma.figma.contents/images/IconBinocular@4x.png" }),
    iconMegaphone: new File({ src: "assets/FromFigma.figma.contents/images/IconMegaphone.png" }),
    iconMegaphone2x: new File({ src: "assets/FromFigma.figma.contents/images/IconMegaphone@2x.png" }),
    iconMegaphone3x: new File({ src: "assets/FromFigma.figma.contents/images/IconMegaphone@3x.png" }),
    iconMegaphone4x: new File({ src: "assets/FromFigma.figma.contents/images/IconMegaphone@4x.png" })
};

/**
 * This is provided for backward compatibility, please use `fromFigmaImagesFiles` instead.
 * @deprecated
 */
export const fromFigmaComponentsFiles = fromFigmaImagesFiles;

export const fromFigmaImages = {
    iconFastFoodHotDog: Image.responsive("assets/FromFigma.figma.contents/images/IconFastFoodHotDog.png", 24, 24),
    iconBinocular: Image.responsive("assets/FromFigma.figma.contents/images/IconBinocular.png", 24, 24),
    iconMegaphone: Image.responsive("assets/FromFigma.figma.contents/images/IconMegaphone.png", 24, 24)
};

/**
 * This is provided for backward compatibility, please use `fromFigmaImages` instead.
 * @deprecated
 */
export const fromFigmaComponents = fromFigmaImages;

export const fromFigmaTokens = {
    colors: fromFigmaColors,
    gradients: fromFigmaGradients,
    shadows: fromFigmaShadows,
    typography: fromFigmaTypography
};
