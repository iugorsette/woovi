import { Typography } from '@mui/material'
import theme from '../../theme'
import BoldText from './BoldText'
interface PropsDescription {
  description?: string | undefined
  total?: string
}
export default function Description({ description, total }: PropsDescription) {
  const content = description ? description : total
  if (!content) return null

  return (
    <Typography
      sx={{
        color: description
          ? theme.palette.primary.main
          : theme.palette.grey[900],
        fontSize: theme.typography.subtitle2,
      }}
    >
      <BoldText text={content} />
    </Typography>
  )
}
