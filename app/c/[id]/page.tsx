interface ChatProps {
  params: {
    id: string
  }
}

export default function ChatDetail({ params }: ChatProps) {
  return <main>Chat: {params.id}</main>
}
