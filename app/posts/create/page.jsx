"use client"

import { useState } from "react"
import { Box, Button, Paper, Step, Stepper, StepLabel, Snackbar, Dialog,
    DialogTitle, DialogContent, DialogActions, Typography } from "@mui/material"

import NextButton from "@/app/components/NextButton"
import SaveButton from "@/app/components/SaveButton"
import FormField from "@/app/components/FormField"

const steps = ["Заголовок", "Тіло", "Попередній перегляд"]

async function addPost({ title, body, userId }) {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({ title, body, userId }),
    })
}

export default function Page() {
    const handleBack = () => {
        if (!isFirstStep) {
            setCurrentPageIndex(currentPageIndex - 1)
        }
    }

    const handleNext = () => {
        if (!isLastStep) {
            setCurrentPageIndex(currentPageIndex + 1)
        }
    }

    const handleSave = () => {
        addPost({
            title: form.title,
            body: form.body,
            userId: 1,
        })

        setSnackbarOpen(true)
    }

    const handleFormChange = (inputName, newValue) => {
        setForm({
            ...form,
            [inputName]: newValue,
        })
    }

    const [currentPageIndex, setCurrentPageIndex] = useState(0)
    const [form, setForm] = useState({ title: "", body: "" })
    const [isSnackbarOpen, setSnackbarOpen] = useState(false)

    const isFirstStep = (currentPageIndex === 0)
    const isLastStep = (currentPageIndex === steps.length - 1)

    const isPreviewDialogOpen = isLastStep

    const textField = (currentPageIndex === 0)
        ? <FormField
            label="Заголовок"
            isMultiline={false}
            value={form.title}
            onChange={e => handleFormChange("title", e.target.value)}
        />
        : (currentPageIndex === 1)
        ? <FormField
            label="Тіло"
            isMultiline={true}
            value={form.body}
            onChange={e => handleFormChange("body", e.target.value)}
        />
        : null

    return (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 8 }}>
            <Paper sx={{ p: 4, width: 500, boxShadow: 4 }}>
                <Stepper activeStep={currentPageIndex} alternativeLabel>
                    {
                        steps.map((label, index) =>
                            <Step key={index}>
                                <StepLabel>
                                    {label}
                                </StepLabel>
                            </Step>
                        )
                    }
                </Stepper>
                {textField}
                <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
                    <Button disabled={isFirstStep} onClick={handleBack}>
                        Назад
                    </Button>
                    {
                        isLastStep
                            ? <SaveButton onClick={handleSave} />
                            : <NextButton onClick={handleNext} />
                    }
                </Box>
                <Dialog open={isPreviewDialogOpen} onClose={handleBack} fullWidth>
                    <DialogTitle>Попередній перегляд</DialogTitle>
                    <DialogContent dividers>
                        <Typography variant="h6">{form.title}</Typography>
                        <Typography>{form.body}</Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleBack}>
                            Редагувати
                        </Button>
                        <Button variant="contained" onClick={handleSave}>
                            Підтвердити
                        </Button>
                    </DialogActions>
                </Dialog>
                <Snackbar
                    open={isSnackbarOpen}
                    autoHideDuration={5000}
                    onClose={() => setSnackbarOpen(false)}
                    message="Пост успішно створено!"
                />
            </Paper>
        </Box>
    )
}
