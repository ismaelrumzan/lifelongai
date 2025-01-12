"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Brain, Building2 } from "lucide-react";
import Image from "next/image";
import { VideoPlayer } from "@/components/video-player";
import { MobileMenu } from "@/components/mobile-menu";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white border-b shadow-sm z-50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="LifelongAI"
              width={140}
              height={32}
              className="h-8 w-auto"
            />
          </div>
          <nav className="hidden md:flex space-x-6">
            <a
              href="#challenge"
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector("#challenge");
                if (element) {
                  const headerOffset = 64;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition =
                    elementPosition + window.pageYOffset - headerOffset;

                  window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth",
                  });
                }
              }}
              className="hover:text-[#1E90FF]">
              Challenge
            </a>
            <a
              href="#solution"
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector("#solution");
                if (element) {
                  const headerOffset = 64;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition =
                    elementPosition + window.pageYOffset - headerOffset;

                  window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth",
                  });
                }
              }}
              className="hover:text-[#1E90FF]">
              Solution
            </a>
            <a
              href="#team"
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector("#team");
                if (element) {
                  const headerOffset = 64;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition =
                    elementPosition + window.pageYOffset - headerOffset;

                  window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth",
                  });
                }
              }}
              className="hover:text-[#1E90FF]">
              Team
            </a>
          </nav>
          <MobileMenu />
        </div>
      </header>

      <div className="pt-16">
        {/* Hero Section */}
        <section className="relative py-12 md:py-20 bg-gradient-to-b from-[#1E90FF]/5 to-background">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="text-center lg:text-left space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
                  Empower the most Vulnerable Refugees
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto lg:mx-0 mb-8">
                  Providing employment and training opportunities in the
                  Artificial Intelligence sector
                </p>
                <Button
                  size="lg"
                  className="rounded-full bg-[#1E90FF] hover:bg-[#1E90FF]/90 text-white"
                  onClick={() => {
                    const element = document.getElementById("challenge");
                    if (element) {
                      const headerOffset = 64;
                      const elementPosition =
                        element.getBoundingClientRect().top;
                      const offsetPosition =
                        elementPosition + window.pageYOffset - headerOffset;
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth",
                      });
                    }
                  }}>
                  Find Out More
                </Button>
              </div>
              <div className="w-full max-w-2xl mx-auto lg:mx-0 lg:max-w-none">
                <VideoPlayer />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-[#F8FAFC]">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Users className="h-12 w-12 mb-4 text-[#1E90FF]" />
                  <h3 className="text-2xl font-bold mb-2">1.3M</h3>
                  <p className="text-gray-600">Syrian Refugees in Jordan</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Brain className="h-12 w-12 mb-4 text-[#1E90FF]" />
                  <h3 className="text-2xl font-bold mb-2">AI Training</h3>
                  <p className="text-gray-600">
                    Professional Skills Development
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Building2 className="h-12 w-12 mb-4 text-[#1E90FF]" />
                  <h3 className="text-2xl font-bold mb-2">Employment</h3>
                  <p className="text-gray-600">Data Labeling Opportunities</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Challenge Section */}
        <section id="challenge" className="py-16">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              The Challenge
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-600 text-center">
                Jordan hosts 1.3 million Syrian Refugees, the majority of whom
                lack the sufficient professional skills to meet the market
                demands.
              </p>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section id="solution" className="py-16 bg-[#F8FAFC]">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Solution
            </h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Industry Need</h3>
                <p className="text-gray-600">
                  The AI industry needs thousands of people who can manually
                  perform specific annotation functions across billions of
                  images, in order to enhance the accuracy of AI solutions, e.g.
                  self-driving car technologies.
                </p>
              </div>
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Our Approach</h3>
                <p className="text-gray-600">
                  Lifelong AI provides training and employment for refugees in
                  Jordan to perform data labeling activities, focusing on the
                  most vulnerable refugees, especially women who lost their
                  husbands in the war and high school students who lost a parent
                  in the war.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-16">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
              {[
                {
                  name: "Mohammad Musa",
                  role: "Founder & Chairman of the Board",
                  description:
                    "Provides overall guidance and oversees international development. CEO of Deepen AI and former product manager at Google.",
                },
                {
                  name: "Mujahid Sarsur",
                  role: "Co-Founder & Managing Director",
                  description:
                    "Runs the operations in Jordan. Former Google employee managing the Middle East and Africa region for the Legal Removals team.",
                },
                {
                  name: "Tariq Jalili",
                  role: "Co-Founder & Director of Development",
                  description:
                    "Manages partnerships with twenty years of business Development experience with IBM, Symantec, and Commvault.",
                },
                {
                  name: "Ismael Rumzan",
                  role: "Co-Founder & Director of Technology and Training",
                  description:
                    "Oversees technology and training with twenty years of experience in educational technology in Canada and Jordan.",
                },
              ].map((member, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">{member.name}</h3>
                    <p className="text-sm text-[#1E90FF] mb-4">{member.role}</p>
                    <p className="text-sm text-gray-600">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-[#1E90FF] text-white">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Help Empower Refugees</h2>
              <p className="text-xl mb-8 opacity-90">
                Donate Now to Empower Refugees with Employment & Training
              </p>
              <Button
                size="lg"
                variant="secondary"
                className="rounded-full bg-white text-[#1E90FF] hover:bg-white/90">
                <Heart className="mr-2 h-4 w-4" />
                Contact Us to Donate
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-6 border-t">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-600">
            <p>Copyright @ 2020, Lifelong.AI</p>
            <p className="mt-2">
              (Lifelong AI unfortunately closed down during the 2020 Covid
              pandemic)
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
