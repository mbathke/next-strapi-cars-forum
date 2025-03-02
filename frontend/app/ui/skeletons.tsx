import { Card, CardHeader, CardContent, CardFooter } from '@/ui/components/card'

// Loading animation
const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent';

export function CardSkeleton() {
  return (
    <Card className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm bg-primary`}>
        <CardHeader>
          <div className="bg-gray-50 rounded-lg w-40 h-5" />
        </CardHeader> 
        <CardContent>
            <div className="bg-gray-50 rounded-lg w-100 h-20" />
        </CardContent>
        <CardFooter className="flex justify-end">
            <div className="bg-gray-50 rounded-lg w-40 h-5" />
        </CardFooter>
    </Card>
  )
}

export function CardsSkeleton() {
  return (
    <>
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </>
  )
}
