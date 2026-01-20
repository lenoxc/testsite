export default async function handler(req, res) {
  const client_id = process.env.GITHUB_CLIENT_ID;
  // Redirects the user to GitHub's login page
  const url = `https://github.com/login/oauth/authorize?client_id=${client_id}&scope=repo&allow_signup=true`;
  res.redirect(url);
}