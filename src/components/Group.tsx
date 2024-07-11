import { Box, Chip, RadioGroup } from '@mui/material'
import theme from '../theme'
import PaymentOption from './PaymentOption'
import { PaymentOptionData } from '../types/payment'

interface GroupProps {
  label: string
  selectedOption: string
  onOptionChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  pixOptions: PaymentOptionData[]
}
export default function Group({
  label,
  selectedOption,
  onOptionChange,
  pixOptions,
}: GroupProps) {
  return (
    <Box>
      <Chip
        label={label}
        size="small"
        sx={{
          fontWeight: 'bold',
          color: theme.palette.text.primary,
          position: 'relative',
          top: '12px',
          left: '20px',
          padding: 1,
          backgroundColor: theme.palette.text.secondary,
        }}
      />
      <RadioGroup
        aria-label="pix-parcelado-payment-method"
        name="pix-parcelado-payment-method"
        value={selectedOption}
        onChange={onOptionChange}
      >
        {pixOptions.map((option: PaymentOptionData) => (
          <PaymentOption
            option={option}
            key={option.value}
            selected={option.value === selectedOption}
            onChange={onOptionChange}
          />
        ))}
      </RadioGroup>
    </Box>
  )
}
