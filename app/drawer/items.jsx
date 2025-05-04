import AddCircleIcon from "@mui/icons-material/AddCircle"
import HomeIcon from "@mui/icons-material/Home"
import ListIcon from "@mui/icons-material/List"

const items = [
    {
        "label": "Головна",
        "href": "/",
        "icon": <HomeIcon />,
    },
    {
        "label": "Усі пости",
        "href": "/posts",
        "icon": <ListIcon />,
    },
    {
        "label": "Створити пост",
        "href": "/posts/create",
        "icon": <AddCircleIcon />,
    },
]

export default items
