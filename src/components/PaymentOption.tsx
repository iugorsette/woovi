import React from 'react';
import { Paper, FormControlLabel, Radio, Box, Typography } from '@mui/material';
import { CheckCircle, RadioButtonUnchecked } from '@mui/icons-material';
import theme from '../theme';

interface PaymentOptionProps {
  value: string;
  label: string;
  description: string;
  selected: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const PaymentOption: React.FC<PaymentOptionProps> = ({ value, label, description, selected, onChange }) => {
  return (
    <Paper variant="outlined" sx={{ margin: 1, padding: 1 }}>
      <FormControlLabel
        value={value}
        control={<Radio checked={selected} onChange={onChange} checkedIcon={<CheckCircle />} icon={<RadioButtonUnchecked />} />}
        label={
          <Box>
            <Typography variant="subtitle1">{label}</Typography>
            <Typography variant="body2" sx={{ color: theme.palette.primary.main }}>
              {description}
            </Typography>
          </Box>
        }
      />
    </Paper>
  );
};

export default PaymentOption;
