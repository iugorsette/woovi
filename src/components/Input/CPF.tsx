import { useState } from 'react'
import { TextField } from '@mui/material'

export default function CPFInput({
  label = 'CPF',
  placeholder = 'Digite aqui',
}) {
  const [value, setValue] = useState('')
  const [error, setError] = useState('')
  const validateCPF = (value: string) => {
    if (value.length === 11) {
      if (
        value === '00000000000' ||
        value === '11111111111' ||
        value === '22222222222' ||
        value === '33333333333' ||
        value === '44444444444' ||
        value === '55555555555' ||
        value === '66666666666' ||
        value === '77777777777' ||
        value === '88888888888' ||
        value === '99999999999'
      ) {
        return 'CPF inválido'
      }
    }

    return ''
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value
    setValue(inputValue)
    const errorMsg = validateCPF(inputValue)
    setError(errorMsg)
  }

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const charCode = event.which ? event.which : event.keyCode
    if (charCode < 48 || charCode > 57) {
      event.preventDefault()
    }
  }

  return (
    <TextField
      sx={{
        width: '100%',
      }}
      label={label}
      variant="outlined"
      fullWidth
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      error={!!error}
      helperText={error}
      onKeyPress={handleKeyPress}
      inputProps={{
        maxLength: 11,
      }}
    />
  )
}
