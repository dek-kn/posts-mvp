import { Box, Grid } from "@mui/material"

import PostCardSkeleton from "@/app/components/PostCardSkeleton"

const POST_COUNT = 20

export default function Loading() {
    return (
        <Box sx={{ p: 3 }}>
            <Grid container spacing={2}>
                {
                    Array(POST_COUNT).fill(0).map((_, index) =>
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <PostCardSkeleton />
                        </Grid>
                    )
                }
            </Grid>
        </Box>
    )
}
