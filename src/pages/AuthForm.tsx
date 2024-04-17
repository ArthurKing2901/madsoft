import { Box, Button, FormControlLabel, Grid, TextField } from '@mui/material'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'

type FormDataType = {
  name: string
  surname: string
  email: string
}

const defaultValues = {
  name: '',
  surname: '',
  email: '',
}

export const AuthForm = () => {
  const methods = useForm<FormDataType>({ defaultValues })
  const { register, handleSubmit } = methods

  const handleStartTest = (formData: FormDataType) => {
    console.log(formData)
  }

  return (
    <Grid container>
      <Grid item xs={12}>
        <Box
          display={'flex'}
          flexDirection={'column'}
          gap={2}
          alignItems={'center'}
        >
          <FormProvider {...methods}>
            <TextField
              variant="outlined"
              {...register('name', { required: true })}
              required
              label="Введите Имя"
            />

            <TextField
              variant="outlined"
              {...register('surname', { required: true })}
              required
              label="Введите Фамилию"
            />

            <TextField
              variant="outlined"
              {...register('email', { required: true })}
              required
              label="Введите Почту"
            />
            <Button variant="contained" onClick={handleSubmit(handleStartTest)}>
              Начать тест
            </Button>
          </FormProvider>
        </Box>
      </Grid>
    </Grid>
  )
}
