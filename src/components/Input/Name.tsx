import { TextField } from '@mui/material'

export default function NameInput({
  label = 'Nome completo',
  placeholder = 'Como no cartão',
  size = 'big',
}) {
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const charCode = event.which ? event.which : event.keyCode
    if (
      (charCode < 65 || charCode > 90) &&
      (charCode < 97 || charCode > 122) &&
      charCode !== 32
    ) {
      event.preventDefault()
    }
  }

  return (
    <TextField
      sx={{
        width: size === 'small' ? '50%' : '100%',
      }}
      label={label}
      variant="outlined"
      fullWidth
      placeholder={placeholder}
      onKeyPress={handleKeyPress}
    />
  )
}
