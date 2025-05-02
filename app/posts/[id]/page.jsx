import Link from "next/link"
import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, Stack, Typography } from "@mui/material"

import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import DeleteIcon from "@mui/icons-material/Delete"

async function getPost(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

    return await response.json()
}

export default async function Post({ params: { id } }) {
    const post = await getPost(id)

    const avatarLetter = post.title.length > 0 ? post.title[0] : ""

    return (
        <Box sx={{ p: 3 }}>
            <Card>
                <CardHeader
                    avatar={<Avatar>{avatarLetter}</Avatar>}
                    title={post.title}
                    subheader={`User ${post.userId}`}
                />
                <CardContent>
                    <Typography>{post.body}</Typography>
                </CardContent>
                <CardActions>
                    <Stack direction="row" spacing={1}>
                        <Button variant="contained" color="error" startIcon={<DeleteIcon />}>
                            Видалити
                        </Button>
                        <Button variant="outlined" startIcon={<ArrowBackIcon />} component={Link} href="/posts">
                            До списку
                        </Button>
                    </Stack>
                </CardActions>
            </Card>
        </Box>
    )
}
