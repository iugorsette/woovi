import { Typography } from '@mui/material'

export default function Title({ text }: { text: string }) {
  return (
    <Typography fontWeight="bold" variant="h1" align="center">
      {text}
    </Typography>
  )
}
