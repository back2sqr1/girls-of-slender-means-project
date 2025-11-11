/* eslint-disable @next/next/no-img-element */
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Muriel Spark - Author Biography',
  description: 'Explore Muriel Spark\'s life, her conversion to Catholicism, WWII propaganda work, and how her experiences shaped The Girls of Slender Means.',
  keywords: ['Muriel Spark', 'British author', 'Catholic literature', 'WWII propaganda', 'Scottish writers', 'Girls of Slender Means author'],
}

export default function Author() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Muriel Spark
      </h1>
      
      <div className="md:flex md:gap-6 mb-8">
        <div className="md:w-2/3">
          <div className="mb-8 space-y-4">
            <p>
          	Christopher Scalia notes how Muriel Spark’s novels are often rather autobiographical, and suggests that this is particularly evident in the Girls of Slender Means due to the flash-forwards and flashback nature of the novel. She was born in Edinburgh to her father, an Engineer from a family of Russian Jews, and mother, an Englishwoman and Christian. When she was 19, she married an abusive alcoholic who quickly moved to Zimbabwe. She had a son, but abandoned him to return to England during the Second World War. By the end of the war she worked for the Foreign Office writing anti-Nazi propaganda. It has been suggested that her novels were greatly influenced by her time telling these truthful-lies, and that she continued on what she had learned there as she began to write post-war fiction. She began, after the war, to write short stories, one of which earned an award and quickly garnering attention. She found herself in another abusive relationship with a man, and was taking unhealthy amounts of appetite suppressants. She had paranoid hallucinations during this time which would inspire her novels. After recovering from this paranoia, she converted to Catholicism. She said that her conversion allowed her “to see life as a whole rather than as a series of disconnected happenings”; this disconnected series of happenings clearly relating to the disconnected nature of some of her stories. Her conversion and interest in John Henry Newman would inspire much of her fiction, which often included a catholic convert. Spark saw her novels as poetic, and loved poetry, inspiring the random bits of poetry scattered throughout the novel. She was especially interested in the Scottish ballad, and their sudden, rapid descents into violence. 
        </p>
        
        <p>
	        Notice as you read the nearly psychedelic, disjoint nature of the story, and the explicitly Catholic elements; there is, in fact, one major character of the novel who is a Catholic convert. Notice how human sexuality is explored, and think about how this relates to Spark's own experiences. Also notice the poetic nature of the story and its repetitious use of language. And last, watch out for a poetic descent into violence in the climax. 
        </p>
          </div>
        </div>
        
        <div className="md:w-1/3 flex-shrink-0">
          <img 
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fflashbak.com%2Fwp-content%2Fuploads%2F2018%2F02%2FMuriel-Spark-books.jpg&f=1&nofb=1&ipt=1a06b995ce88cd26f4c373494a7b082cbc5c32e31904ef5e5e23247beb6a4945"
            alt="Muriel Spark"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>

      <div className="mb-8">
        <h2 className="mb-4 text-xl font-semibold">Further Reading</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <a 
              href="https://www.aei.org/articles/muriel-spark/" 
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              AEI - Muriel Spark Article
            </a>
          </li>
          <li>
            <a 
              href="https://etheses.dur.ac.uk/14920/" 
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Durham E-Theses - Muriel Spark Study
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
