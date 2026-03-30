# Deployment Instructions

This project is fully ready for deployment to GitHub and subsequently to Netlify.

### 1. Pushing to GitHub
First, create a repository on GitHub. Then run these commands in your local project terminal:
```bash
git init
git add .
git commit -m "Initial commit with 3D portfolio upgrades"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```

### 2. Deploying to Netlify
Netlify deployment is seamless:
1. Log in to your [Netlify](https://app.netlify.com/) account.
2. Click **Add new site** -> **Import an existing project**.
3. Select **GitHub** and authorize if necessary.
4. Choose the repository you just pushed.
5. The build settings should automatically be detected:
   - **Base directory**: (leave empty)
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click **Deploy Site**.

### Reminder
Don't forget to push your actual `resume.pdf` file to the `public/` directory before deploying, or update the file through GitHub directly so the Resume download link works correctly in production.
