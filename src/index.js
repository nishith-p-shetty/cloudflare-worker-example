async function handleRequest(request) {
  const requestUrl = new URL(request.url);
  const params = new URL(request.url).searchParams;
  const html = "Hello World.....! From " + FNAME + " " + LNAME;
  if (params.has('name')) {
    return new Response(html + " To " + params.get('name'));
  }
  return new Response(html);
}

addEventListener('fetch', event => {
  return event.respondWith(handleRequest(event.request));
});
