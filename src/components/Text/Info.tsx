import './Info.css'
import { Typography } from '@mui/material'
import theme from '../../theme'
import BoldText from './BoldText'

interface PropsInfo {
  info: string
}

export default function Info({ info }: PropsInfo) {
  return (
    <div className="info">
      <Typography
        sx={{
          color: theme.palette.common.white,
          fontSize: theme.typography.subtitle2.fontSize,
        }}
      >
        <BoldText text={info} />
      </Typography>
      <div className="square"></div>
    </div>
  )
}
