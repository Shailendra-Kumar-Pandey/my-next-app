

const ServicePage = () => {
  const profiles = [
    {
      name: "Olivia Rhye",
      role: "Product Designer",
      initials: "OR",
      colors: "bg-violet-100 text-violet-700",
      description: "Creates thoughtful, user-friendly experiences from idea to launch.",
    },
    {
      name: "Phoenix Baker",
      role: "Frontend Developer",
      initials: "PB",
      colors: "bg-sky-100 text-sky-700",
      description: "Builds accessible interfaces and brings product designs to life.",
    },
    {
      name: "Lana Steiner",
      role: "Project Manager",
      initials: "LS",
      colors: "bg-rose-100 text-rose-700",
      description: "Keeps teams aligned and projects moving smoothly from start to finish.",
    },
    {
      name: "Demi Wilkinson",
      role: "Marketing Lead",
      initials: "DW",
      colors: "bg-amber-100 text-amber-700",
      description: "Connects great products with the people who will love them.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16 sm:px-10">
      <section className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
            Meet the team
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            The people behind our service
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            A passionate team working together to make every experience better.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {profiles.map((profile) => (
            <article
              key={profile.name}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/70"
            >
              <div className="flex items-center gap-4">
                <div
                  aria-hidden="true"
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-lg font-bold ${profile.colors}`}
                >
                  {profile.initials}
                </div>
                <div>
                  <h2 className="font-semibold text-slate-900">{profile.name}</h2>
                  <p className="mt-1 text-sm font-medium text-indigo-600">{profile.role}</p>
                </div>
              </div>
              <p className="mt-5 min-h-16 text-sm leading-6 text-slate-600">
                {profile.description}
              </p>
              <a
                className="mt-5 inline-flex text-sm font-semibold text-slate-700 transition group-hover:text-indigo-600"
                href={`mailto:${profile.name.toLowerCase().replace(" ", ".")}@example.com`}
              >
                Contact <span className="ml-1" aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ServicePage;