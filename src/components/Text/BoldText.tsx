export default function BoldText({ text }: { text: string }) {
  const regex = /\*(.*?)\*/g
  const parts = text.split(regex)

  return parts.map((part: string, index: number) =>
    index % 2 === 1 ? <b key={index}>{part}</b> : part
  )
}
