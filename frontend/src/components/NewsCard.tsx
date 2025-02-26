import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';

export default function NewsCard({
    title, 
    text,
    datetime,
    author,
} : {
    title: string
    text: string
    datetime?: string
    author?: string
}) {
    return (
        <Card className="bg-primary">
            <CardHeader>{title}</CardHeader> 
            <CardContent>{text}</CardContent>
            <CardFooter className="flex justify-end">
                <CardContent>
                    <p className="text-sm font-medium leading-none">{author}, {datetime}</p>
                </CardContent>
            </CardFooter>
        </Card>
    )
}
