# Video Background Options for CodeFlex Solutions

## Current Live Video Sources

Your website now has 3 high-quality live video backgrounds with automatic fallback:

### 1. **Primary Video** - Modern Office Setup
- Professional office environment with technology
- URL: `https://cdn.pixabay.com/video/2020/05/17/39507-421603823_large.mp4`

### 2. **Fallback Video 1** - Tech/Coding Theme
- Computer screens and coding environment
- URL: `https://cdn.pixabay.com/video/2022/02/01/106548-672573025_large.mp4`

### 3. **Fallback Video 2** - Office Workspace
- Clean modern workspace
- URL: `https://cdn.pixabay.com/video/2019/08/25/26299-356858831_large.mp4`

## How to Add Your Own Video

### Option 1: Use Your Own Video File

1. Place your video in `client/public/videos/office-background.mp4`
2. Update `client/src/pages/Home.js`:

```javascript
<video autoPlay loop muted playsInline className="background-video">
  <source src="/videos/office-background.mp4" type="video/mp4" />
</video>
```

### Option 2: Use YouTube or Vimeo

For YouTube videos, use a service like:
- https://www.youtube.com/watch?v=YOUR_VIDEO_ID
- Convert to downloadable MP4 using online tools

### Recommended Video Specs

- **Format**: MP4 (H.264)
- **Resolution**: 1920x1080 (Full HD) or 4K
- **Duration**: 30-60 seconds (loops seamlessly)
- **File Size**: Keep under 50MB for fast loading
- **Content**: Office, tech workspace, coding, servers, modern office

## Additional Free Video Sources

1. **Pexels Videos**: https://www.pexels.com/videos/
   - Search: "office", "technology", "coding", "workspace"

2. **Pixabay Videos**: https://pixabay.com/videos/
   - High quality, free to use

3. **Coverr**: https://coverr.co/
   - Beautiful free stock video footage

## Video Settings Explained

The video background has these properties:
- `autoPlay` - Starts automatically
- `loop` - Repeats continuously
- `muted` - No sound (required for autoplay)
- `playsInline` - Plays inline on mobile devices
- `filter: brightness(0.4)` - Dims video so text is readable
- Gradient overlay for better text contrast

## Customize Video Brightness

Edit `client/src/pages/Home.css` to adjust video visibility:

```css
.background-video {
  filter: brightness(0.5);  /* 0.1 = very dark, 1.0 = full brightness */
}
```
