import { Card } from '@/components/ui/card';

export default function NewsCard({
    title, 
    description,
} : {
    title: string
    description: string
}) {
    return (
        <Card className="bg-secondary">
           <h1>{title}</h1> 
           <p>{description}</p>
        </Card>
    )
}
