import { UserContext } from "@/Contexts/UserContext"
import { useContext } from "react"

export function ChatChannel() {
  const context = useContext(UserContext)!

  return <>
    chat-{context.userState.selectedChannelName}
  </>
}