"use client"


export default function DynamicPage({params:{abc}}:{params:{abc:string}}) {
  console.log(abc)
  return (
    <main className="flex justify-center items-center flex-col p-24">
      <h1 className="text-[36px] mb-6">Dynamic Page</h1>
      <h1 className="text-[36px] mb-6">{abc}</h1>
    </main>
  );
}
