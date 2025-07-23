/**
 * Welcome to Cloudflare Workers!
 *
 * This is a basic worker script for Natuvital React application
 */

export default {
  async fetch(request: Request, env: any, ctx: any): Promise<Response> {
    // Get the URL from the request
    const url = new URL(request.url);
    
    // Serve static assets from the dist directory
    try {
      // This will serve the static assets from your dist directory
      // The actual implementation will be handled by Cloudflare's built-in functionality
      return env.ASSETS.fetch(request);
    } catch (e) {
      // If there's an error or the file doesn't exist, return a 404
      return new Response('Not found', { status: 404 });
    }
  },
}; 