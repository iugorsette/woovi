import { Box, Typography } from '@mui/material'
import theme from '../../theme'
import BoldText from './BoldText'

interface PropsInfo {
  info: string
}

export default function Info({ info }: PropsInfo) {
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.info.main,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'end',
        padding: '5px',
        borderRadius: '4px',
        height: '28px',
      }}
    >
      <Typography
        sx={{
          color: theme.palette.common.white,
          fontSize: theme.typography.subtitle2.fontSize,
        }}
      >
        <BoldText text={info} />
      </Typography>
      <Box
        sx={{
          backgroundColor: theme.palette.common.white,
          width: '18px',
          height: '18px',
          rotate: '45deg',
          position: 'relative',
          left: '14px',
          marginleft: '15px',
        }}
      ></Box>
    </Box>
  )
}
