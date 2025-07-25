import React from "react";
import { getFontSizeForHeading, getTextAlign } from "@/utils/fonts";

function Heading({ textAlign, content, level = 2 }) {
  // const tag = React.createElement(`h${level}`, {
  //   dangerouslySetInnerHTML: { __html: content },
  //   className: `font-heading max-w-5xl mx-auto my-5 ${getFontSizeForHeading(
  //     level
  //   )} ${getTextAlign(textAlign)}`,
  // });
  // return tag;

  let Tag = `h${level}`;
  return (
    <Tag
      className={`font-heading max-w-5xl mx-auto my-5 ${getFontSizeForHeading(
        level
      )} ${getTextAlign(textAlign)}`}
    >
      {content}
    </Tag>
  );
}

export { Heading };
