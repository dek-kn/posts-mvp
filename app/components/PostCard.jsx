import Link from "next/link"
import { Avatar, Card, CardActions, CardContent, CardHeader, IconButton, Typography } from "@mui/material"

import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import DeleteIcon from "@mui/icons-material/Delete"

export default function PostCard({ id, title, subtitle, text }) {
    const avatarLetter =
        typeof(title) === "string" && title.length > 0
        ? title[0] : ""

    return (
        <Card>
            <CardHeader
                avatar={<Avatar>{avatarLetter}</Avatar>}
                action={<IconButton><DeleteIcon color="error" /></IconButton>}
                title={title}
                subheader={subtitle}
            />
            <CardContent>
                <Typography>{text}</Typography>
            </CardContent>
            <CardActions>
                <IconButton component={Link} href={`/posts/${id}`}>
                    <ArrowForwardIcon />
                </IconButton>
            </CardActions>
        </Card>
    )
}
