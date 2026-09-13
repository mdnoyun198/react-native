export async function GET(request: Request) {
  return Response.json({
    success: true,
    message: "Hey, how are you?",
  });
}