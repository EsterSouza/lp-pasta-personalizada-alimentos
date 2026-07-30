import type { ComponentType } from "react"
import { notFound } from "next/navigation"
import { VARIANT_IDS } from "@/experiment.config"
import VariantA from "./variants/a"
import VariantB from "./variants/b"

export function generateStaticParams() {
  return VARIANT_IDS.map((variant) => ({ variant }))
}

const REGISTRY: Record<string, ComponentType> = { a: VariantA, b: VariantB }

export default async function VariantPage({
  params,
}: {
  params: Promise<{ variant: string }>
}) {
  const { variant } = await params
  const Comp = REGISTRY[variant]
  if (!Comp) notFound()
  return <Comp />
}
