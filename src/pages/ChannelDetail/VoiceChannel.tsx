import { UserContext } from "@/Contexts/UserContext"
import { useContext } from "react"

export function VoiceChannel() {
  const context = useContext(UserContext)!

  return <>
    voice-{context.userState.selectedChannelName}
  </>
}