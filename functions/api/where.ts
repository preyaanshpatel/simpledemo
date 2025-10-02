export const onRequest: PagesFunction = async ({ request, cf }) => {
  const data = {
    ip: request.headers.get('cf-connecting-ip'),
    country: cf?.country,
    city: cf?.city,
    colo: cf?.colo,
    tlsVersion: cf?.tlsVersion,
    asn: cf?.asn,
    userAgent: request.headers.get('user-agent')
  };

  return new Response(JSON.stringify(data, null, 2), {
    headers: { 'content-type': 'application/json' }
  });
};