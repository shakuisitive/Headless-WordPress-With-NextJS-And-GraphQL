import { theme } from "../../../theme";
import { Cover } from "../Cover";
import { Heading } from "../Heading";
import { Paragraph } from "../Paragraph/";

function BlockRenderer({ blocks }) {
  return blocks.map((block, ind) => {
    switch (block.name) {
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
      default:
        return null;
    }
  });
}

export { BlockRenderer };
