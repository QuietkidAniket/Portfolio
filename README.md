# 🍎 macOS Portfolio Website

A fully functional macOS-style portfolio website with authentic desktop environment, window management, interactive terminal, and background music player. Built with Next.js, TypeScript, and Tailwind CSS.

![Portfolio Preview](https://via.placeholder.com/800x500/1a1a1a/ffffff?text=macOS+Portfolio+Preview)

## ✨ Features

### 🖥️ **Authentic macOS Desktop Experience**
- **Desktop Environment**: Complete with wallpaper, menu bar, dock, and desktop icons
- **Window Management**: Fully resizable and draggable windows with macOS-style controls
- **Menu Bar**: Live clock, system indicators, and user profile
- **Dock**: Animated app launcher with hover effects and running app indicators
- **Context Menu**: Right-click desktop for quick actions
- **Keyboard Shortcuts Guide**: Semi-transparent guide showing all available shortcuts
- **Mobile Support**: iOS-style interface for mobile devices with full-screen apps

### 🚀 **8 Functional Applications**
1. **📄 Resume** - Enhanced resume with skill cards and tech icons
2. **🏆 Achievements** - Timeline of accomplishments and awards
3. **📅 Calendar** - Event management system with multiple view modes
4. **💼 Experience** - Professional work history timeline
5. **🚀 Projects** - Detailed project showcase with tech stacks
6. **📁 Files** - Quick access to social profiles and important links
7. **⚡ Terminal** - Fully functional bash-like terminal with custom commands
8. **👤 About Me** - Personal information and system details
9. **📊 CP Stats** - Competitive programming statistics and achievements

### 🎵 **Background Music System**
- **Music Player**: Full-featured music player with play/pause, skip, and volume controls
- **Multiple Tracks**: Support for multiple background music files
- **Volume Control**: Adjustable volume with mute functionality
- **Track Information**: Display track titles and descriptions
- **Seek Control**: Jump to any part of the current track

### 🖥️ **Advanced Terminal Features**
- **Custom Commands**: 30+ portfolio-specific commands with proper error handling
- **Auto-completion**: Tab completion for all commands
- **Command History**: Navigate with arrow keys
- **Colored Output**: ANSI color support for beautiful formatting
- **Interactive Features**: Real-time system information
- **macOS Terminal Font**: Authentic SF Mono font styling
- **Enhanced Neofetch**: Custom ASCII art displaying "ANIKET" elegantly

### 🎮 **Interactive Features**
- **Keyboard Shortcuts**: 
  - `Cmd/Ctrl + W`: Close active window
  - `Cmd/Ctrl + M`: Minimize active window
  - `Cmd/Ctrl + Q`: Close all windows
  - `Cmd/Ctrl + H`: Minimize all windows
  - `Cmd/Ctrl + 1-8`: Quick launch apps
  - `Cmd/Ctrl + K`: Open Spotlight search
  - `Cmd/Ctrl + K`: Open Spotlight search
- **Window Snapping**: Drag windows to screen edges
- **Fullscreen Mode**: Double-click window header or use green button
- **Multi-window Support**: Open multiple instances of different apps
- **Fully Resizable Windows**: Drag window edges and corners to resize
- **Smooth Animations**: macOS-style transitions and hover effects
- **Mobile Support**: Full iOS-style interface for mobile devices
- **Mobile Responsive**: iOS-style interface for mobile devices

## 🛠️ **Tech Stack**

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **State Management**: React Hooks (useState, useCallback, useRef)
- **Fonts**: SF Pro Display and SF Mono for authentic macOS styling

## 🚀 **Getting Started**

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/yourusername/macos-portfolio.git
   cd macos-portfolio
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎵 **Adding Background Music**

### Setting up Audio Files

1. **Create audio directory**
   ```bash
   mkdir public/audio
   ```

2. **Add your audio files**
   Place your audio files in `public/audio/` with names like:
   - `audio1.mp3`
   - `audio2.mp3` 
   - `audio3.mp3`
   - etc.

3. **Update music configuration**
   Edit `data/music-config.json` to add your tracks:
   ```json
   {
     "audioFiles": [
       {
         "filename": "audio1.mp3",
         "title": "Your Song Title",
         "description": "Song description"
       }
     ],
     "defaultVolume": 0.3,
     "autoPlay": false
   }
   ```

### Music Configuration Format

The `data/music-config.json` file should follow this structure:

```json
{
  "audioFiles": [
    {
      "filename": "string - The actual filename in public/audio/",
      "title": "string - Display name for the track",
      "description": "string - Brief description of the track"
    }
  ],
  "defaultVolume": "number - Default volume (0.0 to 1.0)",
  "autoPlay": "boolean - Whether to auto-play on load"
}
```

### Changing the Number of Audio Files

To change the number of audio files (k):

1. Add/remove audio files from `public/audio/`
2. Update the `audioFiles` array in `data/music-config.json`
3. The system automatically detects the number of available tracks

### Supported Audio Formats

- MP3 (recommended)
- WAV
- OGG
- M4A

## 📅 **Calendar Events Configuration**

### Setting up Calendar Events

Edit `data/calendar-events.json` to add your events:

```json
{
  "events": [
    {
      "id": "unique-id",
      "title": "Event Title",
      "date": "YYYY-MM-DD",
      "startTime": "HH:MM",
      "endTime": "HH:MM", 
      "importance": "low|medium|high",
      "reachable": true|false,
      "location": "Event Location",
      "description": "Event description",
      "category": "work|competitive|deadline|personal"
    }
  ]
}
```

### Event Properties
- **id**: Unique identifier for the event
- **title**: Event name/title
- **date**: Event date in YYYY-MM-DD format
- **startTime/endTime**: Time in HH:MM format (24-hour)
- **importance**: Priority level (affects visual styling)
- **reachable**: Whether you can be contacted during this event
- **location**: Where the event takes place
- **description**: Additional details about the event
- **category**: Event type for categorization and icons
## 📝 **Customization Guide**

### 🔧 **Personal Information**

Edit `data/portfolio-data.ts` to customize your portfolio:

\`\`\`typescript
export const portfolioData: PortfolioData = {
  basics: {
    name: "Your Name",
    tagline: "Your Professional Title",
    location: "Your Location",
    email: "your.email@example.com",
    phone: "+1-234-567-8900",
    photo: "/path/to/your/photo.jpg"
  },
  // ... rest of your data
}
\`\`\`

### 🎨 **Changing Background & Images**

#### Desktop Wallpaper
Update the background in `components/desktop.tsx`:
\`\`\`typescript
style={{
  backgroundImage: \`url('/your-wallpaper.jpg')\`,
  backgroundSize: "cover",
  backgroundPosition: "center",
}}
\`\`\`

#### Profile Photo
1. Add your photo to `public/images/`
2. Update the photo path in `portfolio-data.ts`

#### App Icons
Customize dock icons in `components/dock.tsx`:
\`\`\`typescript
const dockApps = [
  { type: "resume", title: "Resume", icon: "📄", color: "bg-gradient-to-br from-blue-400 to-blue-600" },
  // Change icons and colors here
]
\`\`\`

### 🎵 **Music Player Features**

The music player includes:
- Play/Pause controls
- Previous/Next track navigation
- Volume control with mute
- Seek bar for jumping to specific times
- Track information display
- Playlist management

Access the music player through:
- Quick Settings panel (gear icon in menu bar)
- Click "Music Player" → "Open"

### 🖥️ **Adding New Terminal Commands**

1. **Add command to available commands list** in `components/apps/terminal-app.tsx`:
   \`\`\`typescript
   const availableCommands = [
     // existing commands...
     'yournewcommand'
   ]
   \`\`\`

2. **Implement command logic** in the `executeCommand` function:
   \`\`\`typescript
   case "yournewcommand":
     setHistory((prev) => [
       ...prev,
       "\\x1b[33mYour command output\\x1b[0m",
       "",
     ])
     break
   \`\`\`

### 🎯 **Adding New Applications**

1. **Create app component** in `components/apps/`:
   \`\`\`typescript
   // components/apps/your-app.tsx
   export default function YourApp({ data }: { data: PortfolioData }) {
     return (
       <div className="h-full overflow-y-auto p-6">
         {/* Your app content */}
       </div>
     )
   }
   \`\`\`

2. **Add app type** to `types/portfolio.ts`:
   \`\`\`typescript
   export type AppType = 
     | "resume" | "achievements" | "portfolio" 
     | "experience" | "projects" | "files" 
     | "terminal" | "about" | "yourapp"
   \`\`\`

3. **Register app** in `components/dock.tsx` and `components/window-manager.tsx`

### 🎨 **Customizing Themes**

#### Colors
Update colors in `app/globals.css`:
\`\`\`css
:root {
  --primary: your-color;
  --secondary: your-color;
  /* ... other color variables */
}
\`\`\`

#### Window Styling
Modify window appearance in `components/window.tsx`:
\`\`\`typescript
className={\`
  absolute bg-white/95 backdrop-blur-md rounded-lg shadow-2xl
  // Add your custom classes
\`}
\`\`\`

## 📁 **Project Structure**

\`\`\`
macos-portfolio/
├── app/
│   ├── globals.css          # Global styles and CSS variables
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page component
├── components/
│   ├── apps/                # Individual application components
│   │   ├── resume-app.tsx
│   │   ├── terminal-app.tsx
│   │   └── ...
│   ├── ui/                  # shadcn/ui components
│   ├── desktop.tsx          # Main desktop environment
│   ├── dock.tsx             # macOS-style dock
│   ├── menu-bar.tsx         # Top menu bar
│   ├── window.tsx           # Window management component
│   └── window-manager.tsx   # Window state management
├── data/
│   └── portfolio-data.ts    # Your portfolio data
├── types/
│   └── portfolio.ts         # TypeScript type definitions
└── public/
    └── images/              # Static images and assets
\`\`\`

## 🎮 **Keyboard Shortcuts**

| Shortcut | Action |
|----------|--------|
| `Cmd/Ctrl + W` | Close active window |
| `Cmd/Ctrl + M` | Minimize active window |
| `Cmd/Ctrl + Q` | Close all windows |
| `Cmd/Ctrl + H` | Minimize all windows |
| `Cmd/Ctrl + 1-8` | Quick launch apps (1=Resume, 2=Achievements, etc.) |
| `Cmd/Ctrl + K` | Open Spotlight search |
| `Tab` | Auto-complete terminal commands |
| `↑/↓` | Navigate terminal command history |
| `Esc` | Close terminal suggestions |
| `Right Click` | Desktop context menu |
| `Double Click` | Fullscreen window |

## 🖥️ **Terminal Commands**

### System Commands
- `help` - Show all available commands
- `clear` - Clear terminal screen
- `neofetch` - Display system information with ASCII art
- `date` - Show current date and time
- `uptime` - Show system uptime
- `history` - Show command history

### Portfolio Commands
- `resume` - Display resume information
- `achievements` - List achievements and awards
- `projects` - Show project portfolio
- `experience` - Display work experience
- `socials` - Show social media links
- `about` - Show personal information

### Navigation Commands
- `ls` - List available sections
- `whoami` - Display current user
- `pwd` - Show current directory
- `cat <file>` - Display file contents
- `echo <message>` - Display message

## 🎨 **Color Codes for Terminal**

Use ANSI color codes in terminal output:
- `\\x1b[31m` - Red
- `\\x1b[32m` - Green  
- `\\x1b[33m` - Yellow
- `\\x1b[34m` - Blue
- `\\x1b[35m` - Magenta
- `\\x1b[36m` - Cyan
- `\\x1b[37m` - White
- `\\x1b[0m` - Reset

## 🚀 **Deployment**

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

### GitHub Pages
1. Add to `next.config.js`:
   \`\`\`javascript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     trailingSlash: true,
     images: {
       unoptimized: true
     }
   }
   \`\`\`
2. Build and deploy: `npm run build`

## 🤝 **Contributing**

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 **Acknowledgments**

- Inspired by macOS Big Sur design language
- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)

## 📞 **Support**

If you have any questions or need help customizing your portfolio:

- 📧 Email: your.email@example.com
- 🐛 Issues: [GitHub Issues](https://github.com/yourusername/macos-portfolio/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/yourusername/macos-portfolio/discussions)

---

⭐ **Star this repository if you found it helpful!**
\`\`\`

## 🔄 **Changelog**

### v2.0.0 (Latest)
- ✅ Fully resizable and draggable windows
- ✅ Enhanced terminal with 30+ commands and proper error handling
- ✅ Keyboard shortcuts support
- ✅ Context menu functionality
- ✅ Auto-completion in terminal
- ✅ ANSI color support
- ✅ Window snapping and fullscreen mode
- ✅ Background music system with full player controls
- ✅ macOS-authentic fonts (SF Pro Display, SF Mono)
- ✅ Enhanced neofetch with custom "ANIKET" ASCII art
- ✅ Improved dark mode support
- ✅ Fixed quick settings panel styling
- ✅ Keyboard shortcuts guide
- ✅ Enhanced resume with skill cards and tech icons
- ✅ Clickable achievement cards with external links
- ✅ Calendar app with event management
- ✅ Competitive programming stats dashboard
- ✅ Full mobile/iOS support with responsive design
- ✅ Improved dark mode across all components

### v1.0.0
- ✅ Initial macOS desktop environment
- ✅ Basic window management
- ✅ 8 portfolio applications
- ✅ Simple terminal interface
\`\`\`
\`\`\`

Let's also add some additional innovative features:
