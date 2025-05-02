import { Box, Grid } from "@mui/material"

import PostCard from "@/app/components/PostCard"

async function getPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")

    return await response.json()
}

export default async function Posts() {
    const posts = await getPosts()

    return (
        <Box sx={{ p: 3 }}>
            <Grid container spacing={2}>
                {
                    posts.map(({ userId, id, title, body }) =>
                        (
                            <Grid item xs={12} sm={6} md={4} key={id}>
                                <PostCard
                                    id={id}
                                    title={title}
                                    subtitle={`User ${userId}`}
                                    text={body}
                                />
                            </Grid>
                        )
                    )
                }
            </Grid>
        </Box>
    )
}
