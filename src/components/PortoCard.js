export default function PortoCard({src,title,desc}){
    const descs = desc.substring(0,150);
    return(
    <>
      <div className="rounded-lg md:w-8/12 w-9/12 mx-auto md:my-10 sm:my-6 my-3">
        <img src={src} className="rounded-lg w-full px-1 mx-auto md:my-10 sm:my-6 my-3"/>
        <h1 className="md:text-2xl px-2 font-bold sm:text-base text-xs">{title}</h1>
        <p className="md:text-lg px-2 sm:text-sm font-semibold text-[8px] md:my-5 sm:my-3 my-1">{desc?.length>=150?`${descs}...`:desc}</p>
      </div>
    </>
    )
}