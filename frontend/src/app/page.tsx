import Link from 'next/link';

type CountryBriefInfo = { countryCode: string; name: string };

export default async function Home() {
  const data = await fetch(process.env.API_BASE_URL!);
  const { countries } = (await data.json()) as {
    countries: CountryBriefInfo[];
  };

  return (
    <section>
      <h1 className="text-2xl font-bold">Available countries</h1>
      <ul className="flex flex-wrap gap-4 pt-8">
        {countries.map((country) => (
          <li key={country.countryCode}>
            <Link href={`/${country.countryCode}`}>{country.name}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
