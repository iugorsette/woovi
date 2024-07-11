import { Typography } from '@mui/material'
import theme from '../theme'

export default function Footer() {
  return (
    <Typography
      sx={{
        marginTop: '1rem',
        color: theme.palette.grey[900],
        display: 'flex',
        alignItems: 'inherit',
        justifyContent: 'center',
        gap: '0.5rem',
      }}
      variant="caption"
      display="block"
      align="center"
    >
      <img height={14} src="./safe.svg" alt="" /> Pagamento 100% seguro via:{' '}
      <img height={14} src="./footer_logo.svg" alt="" />
    </Typography>
  )
}
