import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Explore Muriel Spark\'s The Girls of Slender Means through WWII historical context, wartime rationing, daily routines, and literary analysis.',
  keywords: ['Girls of Slender Means', 'Muriel Spark', 'WWII literature', 'British literature', 'war themes', 'literary analysis'],
}

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Themes of War in Muriel Spark's Girls of Slender Means
      </h1>
      <p className="mb-4">
        Exploring Muriel Spark's The Girls of Slender Means through a historical lens, this site connects readers and historians to the novel's wartime textures—rationing, evacuation, and the shadow of air raids—tracing how World War II shapes character, setting, and moral ambiguity.
      </p>
    </section>
  )
}
