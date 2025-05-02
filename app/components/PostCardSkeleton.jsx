import { Avatar, Card, CardHeader, CardContent, Skeleton } from "@mui/material"

export default function PostCardSkeleton() {
    return (
        <Card>
            <CardHeader
                avatar={<Skeleton variant="circular"><Avatar/></Skeleton>}
                title={<Skeleton variant="text"></Skeleton>}
                subheader={<Skeleton variant="text"></Skeleton>}
            />
            <CardContent>
                <Skeleton variant="text" />
                <Skeleton variant="text" />
            </CardContent>
        </Card>
    )
}
