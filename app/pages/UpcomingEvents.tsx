export default function UpcomingEvents() {
  return (
    <>
      <div className="relative bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://s3-alpha-sig.figma.com/img/8b21/9b06/851bcd341105927c6584351f74e073de?Expires=1694995200&Signature=j3lCOOpK2b5r6jQ7CE3VyM2637AyMmW-hcDUT4vl4smaFKVQ30ETBrVmtqQWdvndyHSCycd58T-H0JRbBBW4q0pKDlR8aqRBO69TzcOArdZ~u0HH4-660QTuIg2Mtcsrrqt3ADIzWGNXUqJV51LYxcJFDFVchDoMpxndHj9abbAMSbxmvSUx-Vw~HNqhfqo9TPBdbpjHUkv6kyWPmaqgG6NArHdzUhxduThAgN7OJWgJ5HHfKVaKodxYYe--gM-FWAe2e8XWQVt76QFAp3MpYMz58O3eLpjLjoWbU6Un3wBy72yRT274xrKxKGCXgxIAMte0HxpTilhV7hq8oeGM~Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4")',
            opacity: "0.2",
          }}
        ></div>
        <div className="h-[100vh] flex bg-black text-white  items-center justify-center">
          <div className="max-w-screen-lg space-y-14 mx-auto p-4">
            <div className="underline my-7 text-center text-4xl text-red-600">
              Campus Tycoon
            </div>
            <div className="text-lg text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea rem,
              possimus iusto voluptate similique eum saepe aliquam eligendi
              blanditiis quis, optio corporis labore esse molestias accusantium
              quod adipisci sunt? Velit delectus iste necessitatibus omnis ipsam
              sed praesentium ea! Voluptate, quidem?
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
