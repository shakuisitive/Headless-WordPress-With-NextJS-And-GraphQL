import Link from "next/link";

function ButtonLink({ destination, label }) {
  return (
    <Link
      href={destination}
      className="bg-pink-500 hover:bg-pink-700 inline-block my-2 px-4 py-2 uppercase rounded-md cursor-pointer text-white font-bold"
    >
      {label}
    </Link>
  );
}

export { ButtonLink };
