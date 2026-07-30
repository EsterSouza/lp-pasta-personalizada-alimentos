import { redirect } from "next/navigation"
import { experiment } from "@/experiment.config"

export default function Home() {
  redirect(`/${experiment.champion}`)
}
