import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, ShieldCheck, MessageCircle } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck className="h-5 w-5 text-primary" />,
    title: "Anonymous & Safe",
    description:
      "Your identity stays private. Share honest thoughts without worry.",
  },
  {
    icon: <MessageCircle className="h-5 w-5 text-primary" />,
    title: "Engaging Messages",
    description:
      "Receive meaningful feedback, compliments, and confessions on autopilot.",
  },
  {
    icon: <Sparkles className="h-5 w-5 text-primary" />,
    title: "Share Your Link Anywhere",
    description:
      "Post your unique profile link on Instagram, X, Threads, and more.",
  },
];

const steps = [
  {
    title: "Create your account",
    description: "Sign up in seconds and personalize your public profile.",
    badge: "Step 01",
  },
  {
    title: "Share your unique link",
    description: "Post it on Instagram, X, Threads, or anywhere you hang out.",
    badge: "Step 02",
  },
  {
    title: "Collect honest messages",
    description: "New anonymous notes appear instantly in your dashboard.",
    badge: "Step 03",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-b from-background via-muted/30 to-background">
      <section className="container mx-auto px-6 pt-24 pb-16 text-center lg:text-left lg:flex lg:items-center lg:gap-12">
        <div className="lg:w-1/2 space-y-6">
          <p className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            <Sparkles className="h-4 w-4" />
            Share Anonymous Messages
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Let your friends speak their mind—
            <span className="text-primary">anonymously</span>.
          </h1>
          <p className="text-lg text-muted-foreground">
            NGL App helps you collect anonymous messages effortlessly. Create
            your unique link, share it anywhere, and get authentic feedback,
            confessions, and compliments.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="gap-2">
              <Link href="/signup">
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/dashboard">Go to Dashboard</Link>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            Join thousands already sharing their anonymous links daily.
          </p>
        </div>

        <div className="mt-10 lg:mt-0 lg:w-1/2">
          <div className="relative rounded-3xl border bg-card/70 shadow-2xl p-6 backdrop-blur-sm">
            <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary/10 via-transparent to-secondary/20" />
            <div className="relative grid gap-4">
              <div className="rounded-2xl border bg-background/80 p-4 shadow-md">
                <p className="text-sm text-muted-foreground">
                  Incoming message
                </p>
                <p className="text-xl font-semibold text-foreground mt-2">
                  “I’ve always admired how kind you are. Just wanted you to
                  know!”
                </p>
                <p className="text-xs text-muted-foreground mt-3">
                  Anonymous • 2 minutes ago
                </p>
              </div>
              <div className="rounded-2xl border bg-background/80 p-4 shadow-md">
                <p className="text-sm text-muted-foreground">
                  Incoming message
                </p>
                <p className="text-xl font-semibold text-foreground mt-2">
                  “Will you ever tell us who your crush is? 👀”
                </p>
                <p className="text-xs text-muted-foreground mt-3">
                  Anonymous • 15 minutes ago
                </p>
              </div>
              <div className="rounded-xl border bg-muted/40 p-4 text-sm text-muted-foreground">
                Share your link:{" "}
                <span className="font-mono text-primary">
                  yourapp.com/jessica/add
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 pb-24">
        <div className="rounded-3xl border bg-card/70 p-8 shadow-xl">
          <h2 className="text-3xl font-bold text-center mb-8">
            Why creators love NGL App
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border bg-background/70 p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6">
        <div className="rounded-3xl border bg-card/70 p-8 shadow-xl">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between mb-8">
            <div>
              <p className="text-sm text-primary font-semibold uppercase tracking-wide">
                Workflow
              </p>
              <h2 className="text-3xl font-bold">How it works</h2>
            </div>
            <p className="text-muted-foreground max-w-xl">
              Set up your anonymous inbox in three simple steps. Share, collect,
              and read every message in one clean dashboard.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.title}
                className="rounded-2xl border bg-background/70 p-6 shadow-sm hover:shadow-md transition flex flex-col gap-4"
              >
                <span className="text-xs font-semibold uppercase text-primary bg-primary/10 px-3 py-1 rounded-full w-fit">
                  {step.badge}
                </span>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 mt-10">
        <div className="rounded-3xl border bg-linear-to-br from-primary to-primary/80 p-12 shadow-2xl text-center space-y-6">
          <p className="text-sm font-semibold uppercase text-primary-foreground/80 tracking-wide">
            Ready in 60 seconds
          </p>
          <h2 className="text-4xl font-bold text-primary-foreground">
            Start collecting anonymous messages tonight
          </h2>
          <p className="text-primary-foreground/70 max-w-xl mx-auto text-base">
            Create your profile, copy your link, and share it anywhere. New
            messages land instantly in your dashboard.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Button
              asChild
              size="lg"
              className="gap-2 bg-background text-foreground hover:bg-background/90"
            >
              <Link href="/signup">
                Create my link
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link href="/signin">I already have an account</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
