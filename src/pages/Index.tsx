import { Helmet } from "react-helmet-async";
import PageLayout from "@/components/PageLayout";
import firstScreen from "@/assets/firstScreen.png";
import secondScreen from "@/assets/secondScreen.png";
import thirdScreen from "@/assets/thirdScreen.png";
import fourthScreen from "@/assets/fourthScreen.png";
import playersScreenBg from "@/assets/playersScreenBg.png";
import { Users, Eye, MessageCircle, Vote, Smartphone, Gamepad2, Zap } from "lucide-react";

const steps = [
  { icon: Users, label: "Add 2–4 players", desc: "Gather your friends" },
  { icon: Eye, label: "See your role", desc: "Each player secretly views their word" },
  { icon: MessageCircle, label: "Discuss & debate", desc: "Talk it out — but watch your words" },
  { icon: Vote, label: "Vote the impostor", desc: "Find them before time runs out" },
];

const stats = [
  { value: "1", label: "Game", icon: Gamepad2 },
  { value: "2–4", label: "Players", icon: Users },
  { value: "⚡", label: "React Native", icon: Zap },
];

const Index = () => (
  <>
    <Helmet>
      <title>Nocapps — Fun Mobile Games</title>
      <meta name="description" content="Nocapps builds fun mobile party games people actually want to play. Check out Impostor — a social deduction game for 2–4 players." />
      <meta property="og:title" content="Nocapps — Fun Mobile Games" />
      <meta property="og:description" content="We build games people actually want to play." />
      <link rel="canonical" href="https://nocapps.com" />
    </Helmet>

    <PageLayout>
      {/* Hero */}
      <section className="relative overflow-hidden py-24 md:py-36">
        <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(ellipse at 50% 0%, hsl(263 70% 58% / 0.4), transparent 70%)" }} />
        <div className="container relative z-10 text-center">
          <p className="text-sm font-heading font-semibold tracking-widest uppercase text-primary mb-4 animate-fade-in">Fun games, zero fluff.</p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold text-foreground leading-tight mb-6 animate-fade-up">
            We build games people<br />
            <span className="text-gradient">actually want to play.</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-md mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.15s" }}>
            Coming to App Store & Google Play
          </p>
          <img
            src={firstScreen}
            alt="Impostor game characters"
            className="mx-auto max-w-md md:max-w-lg w-full animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          />
        </div>
      </section>

      {/* Featured App Card */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="card-surface p-8 md:p-12 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary/20 text-primary mb-4">Party Game</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Impostor</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  A social deduction party game for 2–4 players. One secret word. One impostor. Can you find them before time runs out?
                </p>

                <h3 className="text-sm font-heading font-semibold uppercase tracking-wider text-muted-foreground mb-5">How to play</h3>
                <div className="grid grid-cols-2 gap-4">
                  {steps.map((s, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <div className="shrink-0 w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                        <s.icon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">{s.label}</p>
                        <p className="text-xs text-muted-foreground">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex gap-3 mt-8">
                  <button className="px-5 py-2.5 rounded-lg bg-secondary text-foreground text-sm font-medium flex items-center gap-2 hover:bg-muted transition-colors">
                    <Smartphone className="w-4 h-4" /> App Store
                  </button>
                  <button className="px-5 py-2.5 rounded-lg bg-secondary text-foreground text-sm font-medium flex items-center gap-2 hover:bg-muted transition-colors">
                    <Smartphone className="w-4 h-4" /> Google Play
                  </button>
                </div>
              </div>

              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 rounded-2xl opacity-30" style={{ background: "radial-gradient(circle, hsl(263 70% 58% / 0.3), transparent 70%)" }} />
                <img src={secondScreen} alt="Impostor gameplay — discussing" className="relative w-full max-w-sm animate-float" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots row */}
      <section className="py-12">
        <div className="container flex flex-wrap justify-center gap-6">
          {[thirdScreen, fourthScreen, playersScreenBg].map((img, i) => (
            <img key={i} src={img} alt={`Impostor screenshot ${i + 1}`} className="w-48 md:w-56 rounded-xl object-contain" />
          ))}
        </div>
      </section>

      {/* About */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Small studio.<br /><span className="text-gradient">Big fun.</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Nocapps is an indie mobile game studio laser-focused on party games that bring people together. We believe the best moments happen off-screen — our games just get the party started.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {stats.map((s, i) => (
                <div key={i} className="card-surface p-5 text-center">
                  <s.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-heading font-bold text-foreground">{s.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  </>
);

export default Index;
