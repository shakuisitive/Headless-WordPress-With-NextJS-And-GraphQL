import { getTextAlign } from "@/utils/fonts";
import { relativeToAbsoluteUrls } from "@/utils/relativeToAbsoluteUrls";

function Paragraph({ content, textAlign = "left", textColor }) {
  return (
    <p
      className={`max-w-5xl mx-auto my-0 ${getTextAlign(textAlign)}`}
      style={{ color: textColor }}
      dangerouslySetInnerHTML={{ __html: relativeToAbsoluteUrls(content) }}
    />
  );
}

export { Paragraph };
