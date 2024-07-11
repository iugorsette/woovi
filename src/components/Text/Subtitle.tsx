import { Typography } from '@mui/material'

export default function Subtitle({ text }: { text: string }) {
  return (
    <Typography fontWeight="semi-bold" variant="h3" align="center">
      {text}
    </Typography>
  )
}
