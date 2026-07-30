import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { experiment } from "./experiment.config";

function pickVariant(): string {
  if (experiment.champion) return experiment.champion;

  const total = experiment.variants.reduce((sum, v) => sum + v.weight, 0);
  let rand = Math.random() * total;

  for (const v of experiment.variants) {
    rand -= v.weight;
    if (rand <= 0) return v.id;
  }

  return experiment.variants[0].id;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname !== "/") return NextResponse.next();

  const validIds = experiment.variants.map((v) => v.id);
  let variant = request.cookies.get(experiment.cookie)?.value;

  if (!variant || !validIds.includes(variant)) {
    variant = pickVariant();
  }

  const rewriteUrl = request.nextUrl.clone();
  rewriteUrl.pathname = `/${variant}`;

  const response = NextResponse.rewrite(rewriteUrl);

  if (request.cookies.get(experiment.cookie)?.value !== variant) {
    response.cookies.set(experiment.cookie, variant, {
      maxAge: experiment.maxAge,
      path: "/",
    });
  }

  return response;
}

export const config = {
  matcher: ["/"],
};
