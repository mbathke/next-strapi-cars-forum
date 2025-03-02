import { Card, CardHeader, CardContent, CardFooter } from '@/ui/components/card'
import Image from 'next/image'

export function NewsCard({
    title, 
    text,
    datetime,
    author,
    image,
} : {
    title: string
    text: string
    datetime?: string
    author?: string
    image?: string
}) {
    return (
        <Card className="bg-primary">
            <CardHeader>{title}</CardHeader> 
            <CardContent className="flex">
                <div>{text}</div>
                {image && (
                    <Image src="/happy.png" alt={`Image of ${title}`} width={400} height={400} />
                )}
            </CardContent>
            <CardFooter className="flex justify-end">
                <CardContent>
                    <small className="text-sm font-medium leading-none">{author}, {datetime}</small>
                </CardContent>
            </CardFooter>
        </Card>
    )
}


