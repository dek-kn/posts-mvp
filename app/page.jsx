import Link from "next/link"
import { Box, Paper, Typography, Stack, Button } from "@mui/material"

import AddCircleIcon from "@mui/icons-material/AddCircle"
import ListIcon from "@mui/icons-material/List"

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.default",
        p: 2,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 4,
          maxWidth: 700,
          borderRadius: 4,
          textAlign: "center",
          background: "linear-gradient(135deg, #e3f2fd, #f3e5f5)",
        }}
      >
        <Typography variant="h3" fontWeight={400} gutterBottom>
          Ласкаво просимо до DOiT MVP
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          Ми працюємо над MVP освітньої платформи. Приєднуйтесь до команди!
        </Typography>

        <Stack direction="row" spacing={2} justifyContent="center" mt={3}>
          <Button variant="contained" startIcon={<ListIcon />} component={Link} href="/posts">
            Переглянути пости
          </Button>
          <Button variant="outlined" startIcon={<AddCircleIcon />} component={Link} href="/posts/create">
            Додати пост
          </Button>
        </Stack>
      </Paper>
    </Box>
  )
}
