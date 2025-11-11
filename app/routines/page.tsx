/* eslint-disable @next/next/no-img-element */
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Daily Routine in WWII Britain',
  description: 'Discover daily life during WWII in Britain: air raids, bomb shelters, blackouts, and wartime activities that shaped The Girls of Slender Means.',
  keywords: ['WWII daily life', 'British home front', 'air raids', 'bomb shelters', 'Battle of Britain', 'wartime routine', 'WWII Britain'],
}

export default function Routines() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Daily Routine
      </h1>
      
      <div className="md:flex md:gap-6 mb-8">
        <div className="md:w-2/3">
          <div className="mb-8 space-y-4">
            <p>
	        The total war of the Second World War represented an absolute destruction of common parlance for the British people. Early policies such as blackout, where people were expected to minimize their use of light to confuse enemy air crafts, and evacuation, where a fear of civilian casualties in bombing caused women and children to be moved en masse away from potential targets in larger cities and towards more rural parts of the country, proved unpopular until the imminent threat of invasion became more apparent. In 1940 France fell to German occupation and the British stood alone in the fight against Fascism. Over the next several years, Germans would bomb London and other large population centers killing over 43,000 civilians. Over 200,000 houses were destroyed by bombing. The Channel Islands came under German occupation and there was constant threat of invasion of the homeland, resulting in the Battle of Britain, where the British fought off German air bombardments in brutal dogfights for the duration of the war. Young men were expected to join the Home Guard to protect their home against the imminent German invasion, and people of all ages, creeds, and sexes were left for long periods of time in bomb shelters during the frequent air raids. The war united all of the various classes of Britain together, and this general feeling provoked the ultimate founding of the welfare state in the United Kingdom, with the Beveridge Report proving exceedingly popular with the people, promoting a stronger social safety net to reduce “want, disease, ignorance, squalor, and idleness” amongst all people, and a reward for the sacrifices the nation had made during the war. 
        </p>
        
        <p>
	        During the war people found fun through local music, knitting, reading, and other available hobbies. People would play cards and other parlour games in bomb shelters to pass the time; these games included things as silly as passing matchboxes around with nothing but the nose. While alcohol was not rationed, many types were not eagerly available and thus what could be drunk was based on supply, but the pubs remained open and remained a pastime for the British people during the war. 
        </p>
        
        <p>
	        The girls of slender means would have grown up in this environment, being still young at the end of the long war, and their sense of society was drastically influenced by the wartime conditions. Notice how the women hold on to notions of higher class life despite its impossibility, and how the May of Teck club acts almost as a society, with members from all sorts of backgrounds and in all sorts of positions in life, despite the shared squalor of its inhabitants. As the war shattered certain notions of hope and beauty, notice how characters react to it; several characters repeat mottos frequently, and act very predictably, as if holding onto something from before the war which has broken down. Pay attention to how vanity persists in crisis, and how the characters pretend all to be well despite the war as the truth of the matter is slowly revealed in explosive demonstration. Much of the safety and decency of their little society is an illusion. 
        </p>
          </div>
        </div>
        
        <div className="md:w-1/3 flex-shrink-0">
          <img 
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F2a%2F0e%2F21%2F2a0e2144dc410f09b03f8c6752ee4c2e.jpg&f=1&nofb=1&ipt=ec584fff971215b88effed3c9ea42a6f6fddca16c48ccb5afff7cdcc1bd57985"
            alt="WWII British Life"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>

      <div className="mb-8">
        <h2 className="mb-4 text-xl font-semibold">Further Reading</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <a 
              href="https://www.iwm.org.uk/history" 
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Imperial War Museums - History
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
