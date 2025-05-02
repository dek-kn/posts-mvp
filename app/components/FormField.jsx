import { TextField } from "@mui/material"

const FormField = ({ label, isMultiline, value, onChange }) => {
    return (
        <TextField
            fullWidth
            multiline={isMultiline}
            rows={isMultiline ? 4 : 0}
            label={label}
            value={value}
            onChange={e => onChange(e)}
        />
    )
}

export default FormField
