import {
  SparklesIcon,
  ClockIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "AI-Powered",
    description: "Smart suggestions tailored to your career path.",
    icon: SparklesIcon,
    color: "from-purple-500 to-indigo-500",
  },
  {
    name: "No Sign-Up",
    description: "Instant access. No account or email required.",
    icon: CheckBadgeIcon,
    color: "from-green-400 to-teal-400",
  },
  {
    name: "Fast Output",
    description: "Generate a beautiful resume in under 2 minutes.",
    icon: ClockIcon,
    color: "from-orange-400 to-pink-500",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-white py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
          Your Resume. Elevated with AI.
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Everything you need to land your dream job — built instantly and
          beautifully with no barriers.
        </p>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`rounded-xl bg-gradient-to-br ${feature.color} p-6 shadow-xl text-white hover:scale-105 transform transition`}
            >
              <feature.icon className="h-10 w-10 mb-4" />
              <h3 className="text-xl font-semibold">{feature.name}</h3>
              <p className="mt-2 text-sm text-white/90">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
