import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ShieldCheck,
  MessageCircle,
  Zap,
  Ghost,
  Heart,
  Share2,
} from "lucide-react";

const features = [
  {
    icon: <ShieldCheck className="h-6 w-6 text-indigo-500" />,
    title: "Anonymous & Safe",
    description:
      "Your identity is cryptographically secure. Speak freely, listen honestly, and stay safe.",
    bg: "bg-indigo-500/10",
  },
  {
    icon: <MessageCircle className="h-6 w-6 text-rose-500" />,
    title: "Engaging Feedback",
    description:
      "Receive meaningful confessions and compliments that actually matter to you.",
    bg: "bg-rose-500/10",
  },
  {
    icon: <Share2 className="h-6 w-6 text-amber-500" />,
    title: "Universal Link",
    description:
      "One bio link for Instagram, Twitter, Snapchat, and Threads. easy to share.",
    bg: "bg-amber-500/10",
  },
];

const steps = [
  {
    title: "Claim your link",
    description: "Sign up in seconds. No credit card required.",
    icon: <Zap className="h-5 w-5" />,
  },
  {
    title: "Paste in Bio",
    description: "Add your unique link to your Instagram or X profile.",
    icon: <Share2 className="h-5 w-5" />,
  },
  {
    title: "Get Answers",
    description: "Watch your inbox fill up with honest thoughts.",
    icon: <MessageCircle className="h-5 w-5" />,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 overflow-x-hidden">
      <div className="fixed inset-0 -z-10 h-full w-full bg-white dark:bg-slate-950 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]" />
        <div className="absolute right-0 top-0 -z-10 h-[310px] w-[310px] rounded-full bg-indigo-400 opacity-20 blur-[100px]" />
      </div>

      {/* HERO SECTION */}
      <section className="container mx-auto px-6 pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 space-y-8 text-center lg:text-left relative z-10">
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl xl:text-7xl leading-[1.1]">
              Let your friends <br /> be honest, <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-fuchsia-700 via-fuchsia-500 to-fuchsia-300 animate-gradient-x">
                Anonymously.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Create your unique link, share it on your socials, and receive
              authentic feedback, confessions, and compliments without revealing
              identities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button
                asChild
                size="lg"
                className="h-12 px-8 rounded-full text-base font-semibold shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
              >
                <Link href="/signup">
                  Get Your Link
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 px-8 rounded-full text-base border-2 bg-background/50 backdrop-blur-sm hover:bg-accent/50"
              >
                <Link href="/dashboard">View Demo</Link>
              </Button>
            </div>
          </div>

          {/* Hero Visual (Phone Mockup) */}
          <div className="lg:w-1/2 relative mt-12 lg:mt-0 flex justify-center">
            <div className="relative z-10 w-[300px] sm:w-[340px]">
              {/* Phone Bezel */}
              <div className="relative rounded-[2.5rem] border-8 border-slate-900 dark:border-slate-800 bg-slate-900 dark:bg-slate-800 shadow-2xl overflow-hidden aspect-9/19">
                {/* Screen Content */}
                <div className="absolute inset-0 bg-linear-to-br from-violet-500/20 to-fuchsia-500/20 bg-background">
                  {/* Status Bar Mockup */}
                  <div className="h-6 w-full bg-transparent flex justify-between px-6 items-center pt-2">
                    <div className="text-[10px] font-bold">9:41</div>
                    <div className="flex gap-1">
                      <div className="h-2 w-2 rounded-full bg-current opacity-20"></div>
                      <div className="h-2 w-2 rounded-full bg-current opacity-20"></div>
                    </div>
                  </div>

                  {/* Messages Container */}
                  <div className="p-5 space-y-4 mt-8">
                    <div className="text-center mb-8">
                      <div className="h-16 w-16 mx-auto bg-linear-to-tr from-indigo-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg mb-3">
                        <Ghost className="text-white h-8 w-8" />
                      </div>
                      <h3 className="font-bold text-lg">@username</h3>
                      <p className="text-xs text-muted-foreground">
                        Send me anonymous messages!
                      </p>
                    </div>

                    {/* Message Card 1 */}
                    <div className="group relative bg-white dark:bg-slate-900/80 p-4 rounded-2xl shadow-sm border border-border/50 backdrop-blur-md transition-all hover:scale-[1.02] cursor-pointer">
                      <div className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full font-bold shadow-sm">
                        NEW
                      </div>
                      <p className="font-medium text-sm leading-relaxed">
                        &quot;I&apos;ve always admired how kind you are to
                        everyone. Just wanted you to know!&quot;
                      </p>
                      <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
                        <span>Anonymous</span>
                        <span>2m ago</span>
                      </div>
                    </div>

                    {/* Message Card 2 */}
                    <div className="bg-white dark:bg-slate-900/80 p-4 rounded-2xl shadow-sm border border-border/50 backdrop-blur-md opacity-90 scale-95 origin-bottom">
                      <p className="font-medium text-sm leading-relaxed">
                        &quot;Where did you get that jacket you wore yesterday?
                        👀&quot;
                      </p>
                      <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
                        <span>Anonymous</span>
                        <span>15m ago</span>
                      </div>
                    </div>

                    {/* Input Mockup */}
                    <div className="absolute bottom-6 left-4 right-4">
                      <div className="h-12 bg-muted/50 rounded-full flex items-center px-4 text-sm text-muted-foreground border border-border/50">
                        Type a message...
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute top-20 -right-12 p-3 bg-white dark:bg-slate-800 rounded-2xl shadow-xl animate-bounce animation-duration-[3s]">
                <Heart className="text-rose-500 fill-rose-500 h-6 w-6" />
              </div>
              <div className="absolute bottom-32 -left-8 p-3 bg-white dark:bg-slate-800 rounded-2xl shadow-xl animate-bounce animation-duration-[4s] [animation-delay:1s]">
                <Zap className="text-amber-400 fill-amber-400 h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-slate-50/50 dark:bg-slate-900/20 -z-10" />
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Why Creators Love Us
            </h2>
            <p className="text-muted-foreground text-lg">
              We built the safest place on the internet for honest
              conversations.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature, i) => (
              <div
                key={i}
                className="group relative rounded-3xl border border-border/50 bg-background/60 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-primary/20"
              >
                <div
                  className={`w-12 h-12 rounded-2xl ${feature.bg} flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-300`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKFLOW SECTION */}
      <section className="container mx-auto px-6 py-24">
        <div className="rounded-[2.5rem] bg-slate-900 dark:bg-slate-950 overflow-hidden relative text-white shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
          <div className="absolute -top-[200px] -right-[200px] w-[500px] h-[500px] bg-primary/30 blur-[120px] rounded-full pointer-events-none"></div>

          <div className="relative z-10 p-10 md:p-20">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-16">
              <div className="max-w-lg">
                <span className="text-indigo-400 font-semibold tracking-wider uppercase text-sm">
                  Workflow
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2">
                  Get started in 3 steps
                </h2>
              </div>
              <Button variant="secondary" className="rounded-full px-6">
                Read Documentation
              </Button>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className="relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition duration-300"
                >
                  <div className="text-4xl font-bold text-white/50 absolute top-4 right-6 font-mono">
                    0{index + 1}
                  </div>
                  <div className="h-10 w-10 rounded-full bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-4 shadow-lg shadow-indigo-500/20">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-white/60 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="container mx-auto px-6 pb-24 pt-10">
        <div className="flex flex-col items-center text-center space-y-8">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl max-w-3xl">
            Ready to receive your first <br />
            <span className="text-primary underline decoration-wavy decoration-primary/30 underline-offset-8">
              honest message?
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl">
            Join influencers, students, and creators who use our platform daily.
          </p>
          <Link
            href={"/signup"}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Button
              size="lg"
              className="h-14 px-8 text-lg rounded-full shadow-xl shadow-primary/20"
            >
              Create My Account
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
