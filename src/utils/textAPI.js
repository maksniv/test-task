export async function getDescription() {
  try {
    const request = await fetch(`https://baconipsum.com/api/?type=lucky`);
    const response = await request.json();
    return response[0];
  } catch (error) {
    console.log(error);
  }
}
