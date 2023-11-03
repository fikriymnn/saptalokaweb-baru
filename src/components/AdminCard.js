import Link from 'next/link'

export default function AdminCard({ image = "", title = "not found", id = "" }) {
    const titl = title.slice(0, 50)
    return (
        <div class="md:m-5 md:w-80 w-48 h-48 md:h-auto mb-2 mx-2 text-center items-center rounded-lg md:mt-0 sm:mt-0 mt-8">
            <Link href={`/admin/blog/${id}`} className="m-auto items-center text-center">
                <img class="m-auto rounded-lg w-48 h-28 md:w-[400px] md:h-[240px]" src={image} alt="" />
            </Link>
            <div class="md:p-4 p-3 text-center">
                <Link href={`/admin/blog/${id}`}>
                    <p class="text-sm md:text-2xl font-bold tracking-tight text-blue-600 hover:text-blue-800">{titl}</p>
                </Link>
            </div>
        </div>
    )
}