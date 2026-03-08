# 🚀 Hosting Your Portfolio on GitHub Pages

## Step 1 — Create a GitHub Repository

1. Go to [github.com](https://github.com) and log in as `ysmohith-07`
2. Click **New Repository**
3. Name it exactly: `ysmohith-07.github.io`
   > ⚠️ The repo name **must** match your GitHub username exactly for GitHub Pages to work
4. Set it to **Public**
5. Click **Create repository**

---

## Step 2 — Upload Your Portfolio File

### Option A — Via GitHub Web UI (easiest)
1. Open your new repo
2. Click **Add file → Upload files**
3. Drag and drop the `index.html` file
4. Scroll down, add a commit message like `"Initial portfolio commit"`
5. Click **Commit changes**

### Option B — Via Git (if you have Git installed)
```bash
git clone https://github.com/ysmohith-07/ysmohith-07.github.io
cd ysmohith-07.github.io
cp /path/to/index.html .
git add index.html
git commit -m "Initial portfolio commit"
git push origin main
```

---

## Step 3 — Enable GitHub Pages

1. Go to your repo → **Settings** tab
2. Scroll to **Pages** in the left sidebar
3. Under **Source**, select **Deploy from a branch**
4. Choose branch: `main`, folder: `/ (root)`
5. Click **Save**

---

## Step 4 — Your Site is Live! 🎉

After ~2 minutes, your portfolio will be live at:

```
https://ysmohith-07.github.io
```

---

## Adding Your Photo

Replace the placeholder in the About section:

1. Add your photo to the repo (e.g., `photo.jpg`)
2. In `index.html`, find the `about-image-placeholder` div and replace with:
```html
<img src="photo.jpg" alt="Sai Mohith" style="width:100%;height:100%;object-fit:cover;border-radius:2px;" />
```

---

## Updating Your Portfolio Later

Just edit `index.html` in the GitHub web editor or push new changes via Git — the site updates automatically within minutes.

---

## Custom Domain (Optional)

If you want `mohith.dev` or similar:
1. Buy a domain (Namecheap, Google Domains, etc.)
2. In repo Settings → Pages → Custom domain, enter your domain
3. Update DNS records as shown in GitHub's instructions
