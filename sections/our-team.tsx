import AnimatedContent from "@/components/animated-content";
import SectionTitle from "@/components/section-title";
import { team } from "@/data/team";
import { UsersIcon } from "lucide-react";

export default function OurTeamSection() {
    const bios: Record<string, string> = {
        "Mai": "Former software engineer turned founder. Built HeyMint from zero to acquisition by Alchemy — 1M+ users, $3.4M raised, Stanford StartX. At Gusto, she built a no-code tool that compressed landing page delivery from a month to a few days. Same pattern, applied now to entire roles: find what repeats, build the system, free up the humans for work that actually needs them.",
        "Ben": "Thiel Fellow. Harvard dropout. Co-founded Stream, raising $20M from Pantera Capital. Then worked as a backend and full-stack engineer before becoming COO — which means he's seen the same problem from both sides: operators buried in repeatable work that should have been automated months ago.",
        "Stacy": "Stacy began her career in Customer Success and quickly rose through the ranks to become CS Manager, then expanded her scope to social media and marketing. Her talent and work ethic propelled her to Head of Marketing at a Silicon Valley startup, where she drove growth and brand presence across multiple channels.",
    };

    return (
        <section id="team" className="border-b border-[#edf9f8] px-4 md:px-16 lg:px-24 xl:px-32">
            <div className="pt-20 pb-32 flex flex-col items-center max-w-7xl mx-auto justify-center border-x border-[#edf9f8]">
                <SectionTitle
                    icon={UsersIcon}
                    title="We've been on the inside"
                    subtitle="We learned the hard way what should be automated vs. staffed. Now we apply that playbook for other companies."
                />
                <div className="flex flex-wrap items-start justify-center gap-12 md:gap-16 mt-24">
                    {team.map((member, index) => (
                        <AnimatedContent delay={index * 0.15} key={index} className="flex flex-col max-w-xs">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-52 h-64 object-cover rounded-lg"
                            />
                            <h3 className="text-lg font-medium mt-4">{member.name}</h3>
                            <div className="flex items-center gap-2 mt-2">
                                {member.x && (
                                    <a href={member.x} target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:text-purple-600 transition-colors">
                                        <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
                                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                        </svg>
                                    </a>
                                )}
                                {member.linkedin && (
                                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition-opacity">
                                        <img src="/assets/linkedin.png" alt="LinkedIn" width={18} height={18} />
                                    </a>
                                )}
                            </div>
                            <p className="text-purple-500 text-sm font-medium">{member.role}</p>
                            {bios[member.name] && (
                                <p className="text-zinc-500 text-sm mt-3 leading-6">
                                    {bios[member.name]}
                                </p>
                            )}
                        </AnimatedContent>
                    ))}
                </div>
            </div>
        </section>
    );
}
