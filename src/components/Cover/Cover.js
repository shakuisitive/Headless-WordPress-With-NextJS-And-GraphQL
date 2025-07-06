import Image from "next/image";

function Cover({ children, background }) {
  return (
    <div className="text-white h-screen bg-slate-800 min-h-[400px] flex items-center justify-center">
      <Image
        fill
        alt="cover photo"
        src={background}
        className="mix-blend-soft-light object-cover"
      />
      <div className="max-w-5xl z-10">{children}</div>
    </div>
  );
}

export { Cover };
