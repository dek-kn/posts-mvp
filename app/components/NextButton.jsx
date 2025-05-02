import { Button } from "@mui/material"

import SaveIcon from "@mui/icons-material/Save"

const NextButton = ({ onClick }) =>
    <Button variant="contained" onClick={onClick} endIcon={<SaveIcon/>}>
        Далі
    </Button>

export default NextButton
