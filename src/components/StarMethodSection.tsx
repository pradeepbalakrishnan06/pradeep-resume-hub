import { useState } from "react";
import {
	Activity,
	ArrowLeft,
	ArrowRight,
	BriefcaseBusiness,
	CheckCircle2,
	LifeBuoy,
	LucideIcon,
	Rocket,
	ShieldCheck,
	Sparkles,
	Target,
	Workflow,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type StarItem = {
	situation: string;
	task: string;
	action: string;
	result: string;
	impact: string;
};

type ImpactTab = {
	id: string;
	label: string;
	mobileLabel: string;
	icon: LucideIcon;
	accent: string;
	softAccent: string;
	items: StarItem[];
};

const tabs: ImpactTab[] = [
	{
		id: "product_management",
		label: "Product Management",
		mobileLabel: "Product",
		icon: Target,
		accent: "text-[#3F6F7D]",
		softAccent: "bg-[#D3E4FD]/70",
		items: [
			{
				situation:
					"Manual, fragmented release processes led to delays and operational risks.",
				task: "Deliver a unified Release Orchestration platform for Dev and Ops teams.",
				action:
					"Defined product vision, led roadmap execution, and aligned cross-functional teams.",
				result:
					"Launched platform adopted enterprise-wide; cut manual effort by 60% and improved release consistency.",
				impact: "60% less manual effort",
			},
			{
				situation: "Lack of release visibility caused frequent rollbacks and planning issues.",
				task: "Embed analytics and predictive insights into the orchestration tool.",
				action: "Prioritized reporting features and integrated data from the SDLC.",
				result:
					"Improved release predictability by 40% and reduced incidents by 30%.",
				impact: "40% better predictability",
			},
			{
				situation:
					"Monitoring and BI tools were siloed, limiting end-to-end release insights.",
				task: "Integrate Splunk, AppDynamics, and Tableau into the orchestration platform.",
				action:
					"Led architecture and execution of real-time data flows and toolchain integration.",
				result:
					"Enabled unified release health view; reduced mean-time-to-insight by 25%.",
				impact: "25% faster insight",
			},
		],
	},
	{
		id: "operations",
		label: "Operations Management",
		mobileLabel: "Ops",
		icon: Workflow,
		accent: "text-resume-terracotta",
		softAccent: "bg-[#F3D7CF]/70",
		items: [
			{
				situation:
					"Streamlined change management approvals to boost operational speed without increasing risks.",
				task: "Reduce approval cycle times while maintaining change integrity.",
				action:
					"Re-engineered approval workflows and introduced early conflict detection mechanisms.",
				result:
					"Achieved a 20% faster change cycle and 15% reduction in change-related incidents.",
				impact: "20% faster change cycles",
			},
			{
				situation: "Lack of visibility into operational SLA adherence.",
				task: "Improve proactive risk tracking for ongoing operations.",
				action:
					"Designed and implemented SLA compliance dashboards to monitor service levels in real time.",
				result:
					"Improved SLA compliance tracking by 12%, enabling earlier interventions.",
				impact: "12% better SLA tracking",
			},
			{
				situation:
					"Reactive incident response causing delays in operational decision-making.",
				task: "Enhance proactive operational issue resolution.",
				action: "Introduced weekly operations health reviews to anticipate risks.",
				result:
					"Decreased unplanned incident escalations by 18% over 9 months.",
				impact: "18% fewer escalations",
			},
		],
	},
	{
		id: "service",
		label: "Service Delivery",
		mobileLabel: "Service",
		icon: LifeBuoy,
		accent: "text-[#5F7D68]",
		softAccent: "bg-resume-pale-green/80",
		items: [
			{
				situation: "Fragmented incident management slowing down resolution.",
				task: "Improve MTTR while ensuring escalation visibility.",
				action:
					"Deployed ServiceNow real-time incident dashboards across L2/L3 support.",
				result:
					"Reduced MTTR by 18% and improved transparency for critical incidents.",
				impact: "18% lower MTTR",
			},
			{
				situation:
					"Stakeholder dissatisfaction with service communication during outages.",
				task: "Improve stakeholder engagement during major incidents.",
				action:
					"Redesigned escalation workflows, including proactive stakeholder updates at key stages.",
				result:
					"Increased stakeholder satisfaction scores by 12% over 6 months.",
				impact: "12% satisfaction lift",
			},
			{
				situation: "Gaps in daily operational visibility causing delayed interventions.",
				task: "Enable faster service recovery through real-time reviews.",
				action:
					"Instituted daily standups focusing on incident metrics and action tracking.",
				result: "Reduced major outage incidents by 10%.",
				impact: "10% fewer major outages",
			},
		],
	},
	{
		id: "support",
		label: "Application Support",
		mobileLabel: "Support",
		icon: ShieldCheck,
		accent: "text-[#7B5A9E]",
		softAccent: "bg-[#E9DFF5]/80",
		items: [
			{
				situation: "Application transition delays causing business disruption.",
				task: "Improve transition success rate and timeline adherence.",
				action:
					"Led transitions using structured KT plans and HCL's ASSeT(TM) framework.",
				result:
					"Achieved 98% adherence to transition timelines and 25% higher success rates.",
				impact: "98% timeline adherence",
			},
			{
				situation: "Lack of standardized application support documentation.",
				task: "Create operational readiness across incoming applications.",
				action:
					"Built standardized Knowledge Transfer playbooks across service streams.",
				result: "Reduced post-transition escalations by 22%.",
				impact: "22% fewer escalations",
			},
			{
				situation:
					"Ad hoc application monitoring post-transition causing service gaps.",
				task: "Enable proactive post-transition application support.",
				action:
					"Implemented application performance baselining post-handover.",
				result: "Reduced incident volumes for new applications by 15%.",
				impact: "15% fewer incidents",
			},
		],
	},
	{
		id: "devops",
		label: "DevOps & Transformation",
		mobileLabel: "DevOps",
		icon: Rocket,
		accent: "text-[#A56435]",
		softAccent: "bg-[#F5E1CE]/80",
		items: [
			{
				situation: "Low DevOps adoption delaying automation and modernization.",
				task: "Accelerate DevOps culture adoption across support and service teams.",
				action:
					"Created DevOps maturity assessments and customized onboarding workshops.",
				result: "Increased DevOps tool adoption across teams by 35%.",
				impact: "35% adoption growth",
			},
			{
				situation: "Frequent deployment errors impacting service uptime.",
				task: "Reduce human error in software delivery.",
				action:
					"Drove hands-on automation workshops focused on CI/CD pipelines and monitoring-as-code.",
				result: "Reduced deployment error rates by 22% across critical services.",
				impact: "22% fewer deployment errors",
			},
			{
				situation: "Inconsistent transformation practices across departments.",
				task: "Standardize transformation programs without sacrificing local agility.",
				action:
					"Designed a lightweight transformation framework aligned with operational risk practices.",
				result:
					"Improved transformation success rates by 28% while maintaining local flexibility.",
				impact: "28% better success rate",
			},
		],
	},
];

const starSteps = [
	{ key: "situation", label: "Situation", icon: Activity },
	{ key: "task", label: "Task", icon: Target },
	{ key: "action", label: "Action", icon: Sparkles },
	{ key: "result", label: "Result", icon: CheckCircle2 },
] as const;

const StarMethodSection = () => {
	const [currentTab, setCurrentTab] = useState(0);
	const [currentItem, setCurrentItem] = useState(0);
	const activeTab = tabs[currentTab];
	const activeItem = activeTab.items[currentItem];

	const setDomain = (index: number) => {
		setCurrentTab(index);
		setCurrentItem(0);
	};

	const handleNext = () => {
		if (currentItem < activeTab.items.length - 1) {
			setCurrentItem((prev) => prev + 1);
			return;
		}

		setCurrentTab((prev) => (prev + 1) % tabs.length);
		setCurrentItem(0);
	};

	const handlePrev = () => {
		if (currentItem > 0) {
			setCurrentItem((prev) => prev - 1);
			return;
		}

		const nextTab = (currentTab - 1 + tabs.length) % tabs.length;
		setCurrentTab(nextTab);
		setCurrentItem(tabs[nextTab].items.length - 1);
	};

	return (
		<section
			id="star"
			className="relative overflow-hidden bg-[linear-gradient(135deg,#ffffff_0%,#f8fbff_42%,#f5f7ef_100%)] py-16 md:py-24"
		>
			<div className="absolute inset-0 opacity-[0.22] [background-image:linear-gradient(rgba(64,62,67,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(64,62,67,0.08)_1px,transparent_1px)] [background-size:68px_68px]" />
			<div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-resume-blue/60 blur-3xl" />
			<div className="absolute -right-20 bottom-20 h-80 w-80 rounded-full bg-resume-pale-green/70 blur-3xl" />

			<div className="container relative mx-auto px-4">
				<div className="mb-10 flex flex-col gap-4 md:mb-12 md:flex-row md:items-end md:justify-between">
					<div>
						<div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/70 px-4 py-2 text-sm font-semibold text-resume-dark-gray shadow-sm backdrop-blur-md">
							<BriefcaseBusiness size={16} className="text-resume-terracotta" />
							Measurable leadership outcomes
						</div>
						<h2 className="max-w-3xl text-3xl font-bold leading-tight text-resume-dark-gray md:text-5xl">
							Achievements & Impact
						</h2>
						<p className="mt-4 max-w-3xl text-base leading-7 text-resume-medium-gray md:text-lg">
							Key outcomes across product, operations, service delivery,
							application support, and transformation, structured through the STAR method.
						</p>
					</div>

					<div className="flex items-center gap-3">
						<Button
							variant="outline"
							size="icon"
							onClick={handlePrev}
							className="h-11 w-11 rounded-md border-white/80 bg-white/70 text-resume-dark-gray shadow-sm backdrop-blur-md hover:bg-white"
							aria-label="Previous achievement"
						>
							<ArrowLeft className="h-4 w-4" />
						</Button>
						<Button
							variant="outline"
							size="icon"
							onClick={handleNext}
							className="h-11 w-11 rounded-md border-white/80 bg-resume-dark-gray text-white shadow-sm hover:bg-black"
							aria-label="Next achievement"
						>
							<ArrowRight className="h-4 w-4" />
						</Button>
					</div>
				</div>

				<div className="grid gap-5 lg:grid-cols-[17rem_1fr_1.1fr]">
					<nav className="flex gap-3 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
						{tabs.map((tab, index) => {
							const Icon = tab.icon;
							const isActive = currentTab === index;

							return (
								<button
									key={tab.id}
									onClick={() => setDomain(index)}
									className={`flex min-w-[11rem] items-center gap-3 rounded-lg border p-3 text-left shadow-sm transition-all duration-300 lg:min-w-0 ${
										isActive
											? "border-resume-dark-gray/15 bg-white text-resume-dark-gray shadow-md"
											: "border-white/70 bg-white/55 text-resume-medium-gray hover:bg-white/80"
									}`}
								>
									<span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-md ${tab.softAccent} ${tab.accent}`}>
										<Icon size={19} strokeWidth={1.8} />
									</span>
									<span>
										<span className="block text-sm font-bold md:hidden">{tab.mobileLabel}</span>
										<span className="hidden text-sm font-bold md:block">{tab.label}</span>
										<span className="mt-1 block text-xs text-resume-medium-gray">
											{tab.items.length} impact stories
										</span>
									</span>
								</button>
							);
						})}
					</nav>

					<div className="space-y-3">
						{activeTab.items.map((item, index) => {
							const isActive = currentItem === index;

							return (
								<button
									key={`${activeTab.id}-${index}`}
									onClick={() => setCurrentItem(index)}
									className={`w-full rounded-lg border p-4 text-left shadow-sm transition-all duration-300 ${
										isActive
											? "border-resume-terracotta/30 bg-white shadow-lg shadow-slate-900/10"
											: "border-white/70 bg-white/60 hover:-translate-y-0.5 hover:bg-white"
									}`}
								>
									<div className="mb-3 flex items-center justify-between gap-4">
										<span className={`rounded-full px-3 py-1 text-xs font-bold ${activeTab.softAccent} ${activeTab.accent}`}>
											{item.impact}
										</span>
										<span className="text-xs font-semibold text-resume-medium-gray">
											{String(index + 1).padStart(2, "0")}
										</span>
									</div>
									<p className="text-sm font-semibold leading-6 text-resume-dark-gray">
										{item.situation}
									</p>
								</button>
							);
						})}

						<div className="flex items-center justify-center gap-2 pt-2">
							{activeTab.items.map((_, index) => (
								<button
									key={index}
									className={`h-2 rounded-full transition-all duration-300 ${
										currentItem === index
											? "w-8 bg-resume-terracotta"
											: "w-2 bg-resume-light-gray"
									}`}
									onClick={() => setCurrentItem(index)}
									aria-label={`View achievement ${index + 1}`}
								/>
							))}
						</div>
					</div>

					<Card className="overflow-hidden rounded-lg border border-white/80 bg-white/72 shadow-2xl shadow-slate-900/10 backdrop-blur-xl">
						<CardContent className="p-0">
							<div className={`border-b border-white/80 ${activeTab.softAccent} p-5`}>
								<div className="mb-4 flex items-start justify-between gap-4">
									<div>
										<p className="text-xs font-bold uppercase tracking-[0.2em] text-resume-medium-gray">
											{activeTab.label}
										</p>
										<h3 className="mt-2 text-2xl font-bold leading-tight text-resume-dark-gray">
											{activeItem.impact}
										</h3>
									</div>
									<div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white/75 ${activeTab.accent} shadow-sm`}>
										<activeTab.icon size={24} strokeWidth={1.8} />
									</div>
								</div>
								<div className="h-2 overflow-hidden rounded-full bg-white/70">
									<div
										className="h-full rounded-full bg-resume-terracotta transition-all duration-500"
										style={{
											width: `${((currentItem + 1) / activeTab.items.length) * 100}%`,
										}}
									/>
								</div>
							</div>

							<div className="space-y-4 p-5 md:p-6">
								{starSteps.map(({ key, label, icon: Icon }) => (
									<div key={key} className="grid gap-3 rounded-md border border-slate-200/80 bg-white/70 p-4 md:grid-cols-[8.5rem_1fr]">
										<div className="flex items-center gap-2">
											<span className={`flex h-9 w-9 items-center justify-center rounded-md ${activeTab.softAccent} ${activeTab.accent}`}>
												<Icon size={17} strokeWidth={1.9} />
											</span>
											<span className="font-bold text-resume-dark-gray">{label}</span>
										</div>
										<p className="text-sm leading-6 text-resume-dark-gray md:text-base">
											{activeItem[key]}
										</p>
									</div>
								))}
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
};

export default StarMethodSection;
