interface ChatProps {
  params: {
    id: string
  }
}

export default function Chat({ params }: ChatProps) {
  return <main>Chat: {params.id}</main>
}
