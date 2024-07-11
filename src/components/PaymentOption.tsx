import React from 'react'
import { FormControlLabel, Radio, Box, Typography } from '@mui/material'
import { CheckCircle, RadioButtonUnchecked } from '@mui/icons-material'
import theme from '../theme'
import Info from './Text/Info'
import Description from './Text/Description'
import BoldText from './Text/BoldText'

interface PaymentOptionProps {
  option: {
    value: string
    label: string
    description?: string
    total?: string
    obs?: string
  }
  selected: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const PaymentOption: React.FC<PaymentOptionProps> = ({
  option,
  selected,
  onChange,
}) => {
  const { total, value, obs, label, description } = option
  return (
    <FormControlLabel
      sx={{
        ':first-child': {
          borderRadius: '8px 8px 0 0',
        },
        ':last-child': {
          borderRadius: '0 0 8px 8px',
        },
        ':last-child:first-child': {
          borderRadius: '8px',
        },

        margin: 0,
        padding: 1,
        border: selected
          ? `2px solid ${theme.palette.primary.main}`
          : `2px solid ${theme.palette.text.secondary}`,

        width: 1,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
      }}
      value={value}
      control={
        <Radio
          checked={selected}
          onChange={onChange}
          checkedIcon={<CheckCircle />}
          icon={<RadioButtonUnchecked />}
        />
      }
      labelPlacement="start"
      label={
        <Box>
          <Typography variant="subtitle1">
            <BoldText text={label} />
          </Typography>
          <Description description={description} total={total} />
          {obs && <Info info={obs} />}
        </Box>
      }
    />
  )
}

export default PaymentOption
