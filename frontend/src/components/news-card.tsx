import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'
import Image from 'next/image'

import happy from '@/app/happy.png'

export default function NewsCard({
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
                    <Image src={happy} alt={`Image of ${title}`} width={400} height={400} />
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
