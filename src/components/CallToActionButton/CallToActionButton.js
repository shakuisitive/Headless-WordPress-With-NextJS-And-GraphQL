import { ButtonLink } from "../ButtonLink";

function CallToActionButton({
  align = "left",
  buttonDestination,
  buttonLabel,
}) {
  let alignMap = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };
  return (
    <div className={alignMap[align]}>
      <ButtonLink destination={buttonDestination} label={buttonLabel} />
    </div>
  );
}

export { CallToActionButton };
