import { theme } from "../../../theme";
import { CallToActionButton } from "../CallToActionButton";
import { Cover } from "../Cover";
import { Heading } from "../Heading";
import { Paragraph } from "../Paragraph/";

function BlockRenderer({ blocks }) {
  return blocks.map((block, ind) => {
    switch (block.name) {
      case "acf/ctabutton": {
        return (
          <CallToActionButton
            key={block.id}
            buttonLabel={block.attributes.data.label}
            buttonDestination={block.attributes.data.destination || "/"}
            align={block.attributes.data.align}
          />
        );
      }
      case "core/paragraph": {
        let textColor = block.attributes.style?.elements.link.color.text;
        return (
          <Paragraph
            key={block.id}
            textAlign={block.attributes.textAlign}
            content={block.attributes.content}
            textColor={theme[textColor] || textColor}
          />
        );
      }
      case "core/cover": {
        return (
          <Cover key={block.id} background={block.attributes.url}>
            <BlockRenderer blocks={block.innerBlocks} />
          </Cover>
        );
      }
      case "core/heading": {
        return (
          <Heading
            key={block.id}
            textAlign={block.attributes.textAlign}
            level={block.attributes.level}
            content={block.attributes.content}
          >
            core Heading
          </Heading>
        );
      }
      default: {
        console.log("Unknown", block);
        return null;
      }
    }
  });
}

export { BlockRenderer };
