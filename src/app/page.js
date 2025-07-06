import { BlockRenderer } from "@/components/BlockRenderer/";
import { gql } from "@apollo/client";
import client from "@/client";
import { cleanAndTranformBlocks } from "@/utils/cleanAndTranformBlocks";
import { mapMainMenuItems } from "@/utils/mapMainMenuItems";
import { MainMenu } from "@/components/MainMenu";
async function Homepage() {
  let { data } = await client.query({
    query: gql`
      query PageQuery {
        nodeByUri(uri: "/") {
          ... on Page {
            id
            blocks(postTemplate: false)
          }
        }

        acfOptionsMainMenu {
          mainMenu {
            callToActionButton {
              label
              destination {
                ... on Page {
                  uri
                }
              }
            }
            menuItems {
              menuItem {
                destination {
                  ... on Page {
                    uri
                  }
                }
                label
              }
              items {
                destination {
                  ... on Page {
                    uri
                  }
                }
                label
              }
            }
          }
        }
      }
    `,
  });

  let mainMenuItems = mapMainMenuItems(
    data.acfOptionsMainMenu.mainMenu.menuItems
  );

  let callToAction = data.acfOptionsMainMenu.mainMenu.callToActionButton;
  return (
    <div>
      {/* <MainMenu
        items={mainMenuItems}
        callToActionLabel={callToAction.label}
        callToActionDestination={callToAction.destination.uri}
      /> */}
      <BlockRenderer blocks={cleanAndTranformBlocks(data.nodeByUri.blocks)} />
    </div>
  );
}

export default Homepage;
