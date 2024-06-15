export default function Level({
  level,
}: {
  level: number
}) {
  return (
    <div className="CountDate flex justify-center gap-8 max-sm:gap-6 items-center w-full mt-4">
      <div className={`flex flex-col item-center justify-center ${level > 0 ? "opacity-100" : "opacity-50"}`}>
        <img src="image/fire1.png" alt="" width={25} height={25} />
        <p className="text-md text-white">L1</p>
      </div>
      <div className={`flex flex-col item-center justify-center ${level > 1 ? "opacity-100" : "opacity-50"}`}>
        <img src="image/fire2.png" alt="" width={25} height={25} />
        <p className="text-md text-white">L2</p>
      </div>
      <div className={`flex flex-col item-center justify-center ${level > 2 ? "opacity-100" : "opacity-50"}`}>
        <img src="image/fire3.png" alt="" width={25} height={25} />
        <p className="text-md text-white">L3</p>
      </div>
      <div className={`flex flex-col item-center justify-center ${level > 3 ? "opacity-100" : "opacity-50"}`}>
        <img src="image/fire4.png" alt="" width={25} height={25} />
        <p className="text-md text-white">L4</p>
      </div>
      <div className={`flex flex-col item-center justify-center ${level > 4 ? "opacity-100" : "opacity-50"}`}>
        <img src="image/fire5.png" alt="" width={25} height={25} />
        <p className="text-md text-white">L5</p>
      </div>
      <div className={`flex flex-col item-center justify-center ${level > 4 ? "opacity-100" : "opacity-50"}`}>
        {level <= 4 ? (
          <img src="/image/icon/lock.svg" alt="lock" className="w-6 h-6 mt-1" />
        ) : (
          <img
            src="/image/icon/unlock.svg"
            alt="unlock"
            className="w-6 h-6 mt-1"
          />
        )}

        <p className="text-md text-white">2X</p>
      </div>
    </div>
  );
}
