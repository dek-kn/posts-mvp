import { Button } from "@mui/material"

import SaveIcon from "@mui/icons-material/Save"

const SaveButton = ({ onClick }) =>
    <Button variant="contained" onClick={onClick} endIcon={<SaveIcon/>}>
        Зберегти
    </Button>

export default SaveButton
