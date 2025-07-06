export function getTextAlign(textAlign = "left") {
  let textAlignMap = {
    left: "text-left",
    right: "text-right",
    center: "text-center",
  };
  return `${textAlignMap[textAlign] || ""}`;
}

export function getFontSizeForHeading(level) {
  let fontSizeMap = {
    6: "text-xl",
    5: "text-2xl",
    4: "text-3xl",
    3: "text-4xl",
    2: "text-5xl",
    1: "text-6xl",
  };

  return `${fontSizeMap[level] || ""}`;
}
