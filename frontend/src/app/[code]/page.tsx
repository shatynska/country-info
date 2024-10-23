export default async function CountryPage({
  params,
}: {
  params: { code: string };
}) {
  return (
    <section>
      <h1 className="text-2xl font-bold">{params.code}</h1>
      <div className="pt-8">Sorry, this page is under construction</div>
    </section>
  );
}
