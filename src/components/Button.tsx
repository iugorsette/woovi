import Button from '@mui/material/Button'

interface ButtonProps {
  text: string
  icon?: string
  full?: boolean
}
export default function BasicButton({ text, icon, full = false }: ButtonProps) {
  return (
    <Button
      sx={{
        width: full ? '100%' : 'auto',
      }}
      color="info"
      variant="contained"
      endIcon={icon && <img src={icon} alt="Pix" style={{ width: '20px' }} />}
    >
      {text}
    </Button>
  )
}
