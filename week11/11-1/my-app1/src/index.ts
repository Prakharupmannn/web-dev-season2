
export interface Env {

}
 
export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		return new Response('Hello, World!');
		
		// console.log(request.body);
		// console.log(request.headers);
		// if(request.method === "GET") {
		// 	return Response.json({
		// 		message: "you sent a get request"
		// 	})
		// } else {
		// 	return Response.json({
		// 		message: "You did not sent a get request"
		// 	});
		// }
	},
} 
