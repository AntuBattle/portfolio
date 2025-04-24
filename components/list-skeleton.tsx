import { Skeleton } from "./ui/skeleton";

function ListSkeleton(){

    return(
        <div className="space-y-8">
        {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex flex-col space-y-3">
            <Skeleton className="h-6 w-1/3" />
            <Skeleton className="h-4 w-1/4" />
            <Skeleton className="h-24 w-full" />
            </div>
        ))}
        </div>
    )
}

export default ListSkeleton