import { ResearchSidebar } from "@/components/ResearchSidebar";
import { ProfilePhoto } from "@/components/ProfilePhoto";
import { Section, SectionTitle } from "@/components/Section";
import { ResearchTopicCard } from "@/components/ResearchTopicCard";
import { ProjectCard } from "@/components/ProjectCard";
import { IdeasTopicCard } from "@/components/IdeasTopicCard";

import llmInteractionImg from "@/assets/research-llm-interaction.jpg";
import llmPsychologyImg from "@/assets/research-llm-psychology.jpg";
import ideasImg from "@/assets/ideas-in-progress.jpg";
import profilePhoto from "@/assets/profile-photo.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ResearchSidebar />

      {/* Main content */}
      <main className="lg:ml-64">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          {/* Hero / About Section */}
          <Section id="about" className="pt-24 md:pt-32">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
              <ProfilePhoto src={profilePhoto} alt="Wenqing (Cecilia) Zhang" />
              <div className="flex-1 text-center md:text-left">
                <h1 className="heading-display text-foreground">
                  Wenqing (Cecilia) Zhang
                </h1>
                <p className="text-lg text-accent font-medium mt-2">
                  Exploring Human-Centered AI for Social Good
                </p>
                <p className="text-muted-foreground mt-1">
                  MSc in Computer Science, Western University, Canada
                </p>
                <p className="text-body text-muted-foreground mt-6 leading-relaxed">
                  I study the intersection of <strong className="text-foreground">large language models</strong> and{" "}
                  <strong className="text-foreground">human cognition</strong>—how AI systems shape our beliefs and behavior, and how they can augment human research. My work bridges HCI, LLM, and psychology.
                </p>
                <div className="flex flex-wrap gap-3 mt-6 justify-center md:justify-start">
                  <span className="tag tag-primary">Human-Centered AI</span>
                  <span className="tag tag-primary">HCI</span>
                  <span className="tag tag-primary">Computational Social Science</span>
                </div>
              </div>
            </div>
          </Section>

          {/* Research Philosophy Section */}
          <Section id="philosophy">
            <SectionTitle subtitle="How I think about research">
              Research Philosophy
            </SectionTitle>
            <div className="prose prose-lg max-w-none">
              <div className="bg-card rounded-xl p-8 shadow-soft">
                <blockquote className="border-l-4 border-accent pl-6 italic text-lg text-foreground/90 font-heading">
                  "What is the meaning of life? That was all- a simple question; one that tended to close in on one with years, the great revelation had never come. The great revelation perhaps never did come. Instead, there were little daily miracles, illuminations, matches struck unexpectedly in the dark; here was one." ― Virginia Woolf
                </blockquote>
                <div className="mt-6 space-y-4 text-body text-muted-foreground">
                  <p>
                    My research is driven by a fundamental question: <strong className="text-foreground">How do AI systems—particularly LLMs—shape human thought?</strong>{" "}
                    Rather than viewing AI as a tool to be optimized, I see it as a <em>cognitive environment</em> that 
                    fundamentally alters how we process information, form beliefs, and make decisions.
                  </p>
                  <p>
                    I approach this through two complementary lenses: studying the <strong className="text-foreground">epistemic effects</strong>{" "}
                    of human-LLM interaction (filter bubbles, belief revision, persuasion), and exploring how LLMs can{" "}
                    <strong className="text-foreground">augment human research</strong> in psychology and social science.
                  </p>
                  <p>
                    As an early-stage researcher, I'm particularly interested in asking questions that challenge 
                    conventional assumptions—even if the answers remain elusive.
                  </p>
                </div>
              </div>
            </div>
          </Section>

          {/* Research Section */}
          <Section id="research">
            <SectionTitle subtitle="Current and past research work organized by theme">
              Research Directions
            </SectionTitle>

            <div className="grid md:grid-cols-2 gap-6 items-start">
              {/* LLM & Filter Bubble Direction */}
              <ResearchTopicCard
                id="llm-filter-bubble"
                title="Human-LLM Interaction & Filter Bubbles"
                subtitle="How conversational AI shapes beliefs and information access"
                image={llmInteractionImg}
                projects={[
                  {
                    title: "LLM's Impact on Human Belief Revision",
                    status: "ongoing",
                    description:
                      "Conducting experiments to examine whether LLMs function as a new form of filter bubble by selectively filtering information and reinforcing users' existing beliefs.",
                    details:
                      "Designed experiments comparing belief revision effects across different reasoning styles, prompting strategies, and frontier LLMs. Developed an online platform where participants engage in argumentative dialogues with LLMs on controversial topics.",
                  },
                  {
                    title: "LLM Robustness to Misinformation",
                    status: "starting",
                    description:
                      "Evaluating how large language models respond to and potentially propagate misinformation during multi-turn conversations.",
                  },
                  {
                    title: "Generative Filter Bubbles: A Theoretical Framework",
                    status: "completed",
                    description:
                      "A conceptual paper arguing why LLMs serve as a new form of filter bubble, coining the term 'generative filter bubble' to describe AI-mediated information filtering.",
                    publication: "Paper in preparation",
                  },
                ]}
              />

              {/* LLM in Human Research Direction */}
              <ResearchTopicCard
                id="llm-psychology"
                title="LLM in Human Research"
                subtitle="Leveraging AI to augment psychological and social science methods"
                image={llmPsychologyImg}
                projects={[
                  {
                    title: "LLM-Driven Psychological Scale Generation",
                    status: "completed",
                    description:
                      "Developed a prompting-based framework using LLMs to generate psychological scale items tailored to diverse target populations and scenarios, reducing the need for extensive expert involvement.",
                    details:
                      "Pioneered a novel LLM-based evaluation metric and utilized BLEU scores to assess item diversity. Designed an intuitive interface for user interaction with the framework.",
                    publication: "Co-first author paper accepted at ICASSP 2026",
                  },
                  {
                    title: "LLM vs Human Response Distributions",
                    status: "starting",
                    description:
                      "Comparing the statistical distributions of LLM-generated and human-generated responses in classic psychological research paradigms to understand where synthetic data can (and cannot) substitute for human data.",
                  },
                ]}
              />

              {/* Ideas in Progress */}
              <IdeasTopicCard
                id="ideas-card"
                title="Nascent Research Ideas"
                subtitle="These are early-stage ideas I'm actively exploring"
                image={ideasImg}
                ideas={[
                  {
                    title: "Evaluating LLM Robustness to Misinformation",
                    description:
                      "Investigating how LLMs respond to and propagate misinformation across multiple interaction turns. Are they resilient to false claims, or do they amplify them?",
                    lookingFor: ["Experimental Design", "NLP Expertise", "Data Collection"],
                  },
                  {
                    title: "Comparing LLM vs Human Response Distributions",
                    description:
                      "A methodological study comparing the statistical distributions of LLM-generated responses with human-generated data in classic psychological research paradigms.",
                    lookingFor: ["Psychology Background", "Statistical Methods", "Human Subjects Research"],
                  },
                ]}
              />
            </div>
          </Section>

          {/* Past Projects Section */}
          <Section id="projects">
            <SectionTitle subtitle="Technical projects demonstrating skills applicable to research">
              Past Projects
            </SectionTitle>

            <div className="grid md:grid-cols-2 gap-6">
              <ProjectCard
                title="Credit Risk Model Stability"
                description="Developed machine learning models to assess credit risk by predicting loan default probabilities. Led data processing and feature engineering, training an ensemble model comprising LightGBM, XGBoost, CatBoost, and neural networks."
                tags={["Machine Learning", "Python", "Feature Engineering", "Ensemble Methods"]}
                achievement="Silver Medal · 92nd/3,856 teams"
              />
              <ProjectCard
                title="AI-Powered Job Search Platform"
                description="Built an LLM-driven platform providing job information and interview preparation based on user inputs. Managed web-scraped data preprocessing and constructed a job information knowledge base using NLP tools."
                tags={["LLM", "NLP", "Full-Stack", "Knowledge Base"]}
                githubUrl="https://github.com/Cecilia-zwq"
              />
            </div>

            <div className="mt-12 p-6 bg-secondary/50 rounded-lg">
              <h3 className="font-heading text-lg font-medium text-foreground mb-2">
                Technical Skills
              </h3>
              <p className="text-body-sm text-muted-foreground">
                These projects reflect my proficiency in <strong>Python</strong>, <strong>machine learning frameworks</strong>{" "}
                (PyTorch, scikit-learn, XGBoost), <strong>NLP/LLM tools</strong> (Transformers, prompting), 
                and <strong>full-stack development</strong> (Vue, Node, SpringBoot)—skills I actively apply in my research work.
              </p>
            </div>
          </Section>

          {/* Footer */}
          <footer className="py-12 border-t border-border mt-12">
            <div className="text-center text-sm text-muted-foreground">
              <p>
                Interested in collaborating or discussing research?{" "}
                <a
                  href="mailto:wenqingzhang1122@gmail.com"
                  className="text-accent hover:underline"
                >
                  Get in touch
                </a>
              </p>
              <p className="mt-2">
                © {new Date().getFullYear()} Wenqing Zhang · Research Trajectory
              </p>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default Index;
