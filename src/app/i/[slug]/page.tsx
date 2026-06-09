import { notFound } from "next/navigation";
import { IterationNav } from "@/components/iteration-nav";
import { PrototypeShell } from "@/components/prototype-shell";
import { getIteration, getIterationSlugs } from "@/iterations/registry";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getIterationSlugs().map((slug) => ({ slug }));
}

export default async function IterationPage({ params }: PageProps) {
  const { slug } = await params;
  const iteration = getIteration(slug);

  if (!iteration) {
    notFound();
  }

  const { Panel } = iteration;

  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <IterationNav />
      <div className="min-h-0 flex-1">
        <PrototypeShell panel={<Panel />} />
      </div>
    </div>
  );
}
