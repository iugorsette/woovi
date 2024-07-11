import { MenuItem, TextField } from '@mui/material'

export default function InstallmentsInput({
  options = [
    '1x de R$ 15.300,00',
    '2x de R$ 7.800,00   - Total: R$ 15.600,00',
    '3x de R$ 5.300,00   - Total: R$ 15.900,00',
    '4x de R$ 4.000,00   - Total: R$ 16.000,00',
    '5x de R$ 3.340,00   - Total: R$ 16.700,00',
    '6x de R$ 2.800,00   - Total: R$ 16.800,00',
  ],
}) {
  return (
    <TextField
      label="Parcelas"
      variant="outlined"
      fullWidth
      select
      defaultValue={options[0]}
    >
      {options.map((option, index) => (
        <MenuItem key={index} value={option}>
          {option}
        </MenuItem>
      ))}
    </TextField>
  )
}
