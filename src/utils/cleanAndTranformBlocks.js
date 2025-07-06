import { v4 as uuid } from "uuid";

export function cleanAndTranformBlocks(blocksJSON) {
  let blocks = JSON.parse(JSON.stringify(blocksJSON));

  let assignIds = (b) => {
    b.forEach((block) => {
      block.id = uuid();

      if (block.innerBlock?.length) {
        assignIds(block.innerBlock);
      }
    });
  };

  assignIds(blocks);

  return blocks;
}
