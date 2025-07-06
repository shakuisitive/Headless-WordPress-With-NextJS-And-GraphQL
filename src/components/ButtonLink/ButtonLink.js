import Link from "next/link";

function ButtonLink({ destination, label }) {
  return (
    <Link href={destination} className="btn">
      {label}
    </Link>
  );
}

export { ButtonLink };
