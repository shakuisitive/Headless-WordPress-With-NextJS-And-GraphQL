import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHouseUser } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
export let MainMenu = ({
  items,
  callToActionDestination,
  callToActionLabel,
}) => {
  return (
    <div className="bg-slate-800 text-white px-5 h-[64px] sticky top-0 z-20 flex">
      <div className="py-4 pl-5 flex text-pink-600">
        <FontAwesomeIcon icon={faHouseUser} />
        <FontAwesomeIcon icon={faHeart} />
      </div>
      <div className="flex flex-1 justify-end">
        {(items || []).map((item) => {
          return (
            <div
              key={item.id}
              className="hover:bg-slate-700 cursor-pointer relative group"
            >
              <div>
                <Link className="p-5 block" href={item.destination}>
                  {item.label}
                </Link>
              </div>
              {!!item.subMenuItems?.length && (
                <div className="group-hover:block hidden bg-slate-800 text-right absolute right-0 top-full -mt-3">
                  {item.subMenuItems.length &&
                    item.subMenuItems.map((subMenuItem) => (
                      <Link
                        className="block whitespace-nowrap p-5 hover:bg-slate-700"
                        href={subMenuItem.destination}
                        key={subMenuItem.id}
                      >
                        {subMenuItem.label}
                      </Link>
                    ))}
                </div>
              )}
            </div>
          );
        })}
        <div className="ml-3 my-auto">
          <Link
            href={callToActionDestination}
            className="bg-pink-500 bg:bg-pink-700 inline-block my-2 px-4 py-2 uppercase rounded-md cursor-pointer text-white font-bold"
          >
            {callToActionLabel}
          </Link>
        </div>
      </div>
    </div>
  );
};
