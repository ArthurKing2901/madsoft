import React from 'react'
import { Box, Button, Grid } from '@mui/material'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { useAppDispatch } from '../store/configStore'
import { setUser } from '../store/reducers/userReducer'
import { FormInput } from '../components/FormInput'

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

const schema = yup
  .object()
  .shape({
    name: yup.string().required('Это поле обязательно для заполнения'),
    surname: yup.string().required('Это поле обязательно для заполнения'),
    email: yup.string().required('Это поле обязательно для заполнения'),
  })
  .required()

export const AuthForm = () => {
  const methods = useForm<FormDataType>({
    defaultValues,
    resolver: yupResolver(schema),
  })
  const { handleSubmit } = methods
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleStartTest = (formData: FormDataType) => {
    dispatch(setUser(formData))

    navigate('/questions')
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
            <FormInput name="name" label="Введите Имя" />

            <FormInput name="surname" label="Введите Фамилию" />

            <FormInput name="email" label="Введите Почту" />

            <Button variant="contained" onClick={handleSubmit(handleStartTest)}>
              Начать тест
            </Button>
          </FormProvider>
        </Box>
      </Grid>
    </Grid>
  )
}
