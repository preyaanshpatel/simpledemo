export const onRequest: PagesFunction<{ VIEWS: KVNamespace }> = async ({ request, env }) => {
  const url = new URL(request.url);
  const path = url.searchParams.get("path") || "/";
  
  const key = `views:${path}`;
  const current = Number((await env.VIEWS.get(key)) || 0) + 1;
  
  await env.VIEWS.put(key, String(current));
  
  return new Response(JSON.stringify({ path, views: current }, null, 2), {
    headers: { "content-type": "application/json" }
  });
};