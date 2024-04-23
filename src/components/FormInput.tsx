import { TextField } from '@mui/material'
import React from 'react'
import { useController } from 'react-hook-form'

type FormInputProps = {
  name: string
  label: string
}

export const FormInput = ({ name, label }: FormInputProps) => {
  const {
    field: { ref, ...restFild },
    fieldState: { error },
  } = useController({ name })

  return (
    <TextField
      {...restFild}
      variant="outlined"
      inputRef={ref}
      required
      error={Boolean(error)}
      helperText={error?.message}
      label={label}
    />
  )
}
