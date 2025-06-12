# Movie Database 🎬

A modern, responsive movie database web application built with Astro, Bootstrap, and The Movie Database (TMDb) API. Discover popular movies, search for your favorites, and maintain a personal favorites list.

## ✨ Features

- **Browse Popular Movies**: View trending and popular movies from TMDb
- **Advanced Search**: Search for movies by title with real-time results
- **Favorites System**: Add/remove movies to your personal favorites list (localStorage)
- **Movie Details**: View detailed information about each movie
- **Responsive Design**: Beautiful UI with Bootstrap that works on all devices
- **Fast Performance**: Built with Astro for optimal loading speeds

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build) - Modern static site generator
- **Styling**: [Bootstrap 5.3.6](https://getbootstrap.com) - Responsive CSS framework
- **Icons**: [Bootstrap Icons](https://icons.getbootstrap.com) - Icon library
- **API**: [The Movie Database (TMDb)](https://www.themoviedb.org/documentation/api) - Movie data
- **Deployment**: Netlify/Render - Static hosting platforms

## 🚀 Quick Start

### Prerequisites

- Node.js (version 18.20.8 or higher)
- TMDb API key (free registration at [TMDb](https://www.themoviedb.org/settings/api))

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd movie-database
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   API_KEY=your_tmdb_api_key_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to `https://movie-master-6d66.onrender.com/` or `http://localhost:4321` 

## 📁 Project Structure

```
movie-database/
├── public/
│   ├── favicon.svg
│   ├── placeholder.svg
│   ├── placeholder.jpg
│   └── placeholder-person.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── MovieCard.astro
│   │   └── Welcome.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       ├── index.astro          # Homepage
│       ├── movies.astro         # All movies page
│       ├── favorites.astro      # User favorites
│       └── movies/
│           └── [id].astro       # Individual movie details
├── astro.config.mjs
├── package.json
└── README.md
```

## 🎯 Available Scripts

| Command | Description |
|---------|-------------|
| `npm install` | Install dependencies |
| `npm run dev` | Start development server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npm run astro` | Run Astro CLI commands |

## 🔧 Configuration

### TMDb API Setup

1. Sign up for a free account at [TMDb](https://www.themoviedb.org/)
2. Navigate to Settings → API
3. Create a new API key
4. Add your API key to the `.env` file

### Deployment

The project is configured for deployment on:

- **Netlify**: Using `@astrojs/netlify` adapter
- **Render**: With `render.yaml` configuration

Both platforms will automatically detect and build your Astro project.

## 🎨 Features Overview

### Homepage
- Hero section with call-to-action buttons
- Popular movies carousel
- Live movie search functionality

### Movies Page
- Complete movie listing with pagination
- Movie cards with ratings and details
- Add to favorites functionality

### Favorites Page
- Personal movie collection
- Remove from favorites option
- Persistent storage using localStorage

### Movie Details Page
- Comprehensive movie information
- High-quality movie posters
- Cast and crew details

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [The Movie Database (TMDb)](https://www.themoviedb.org/) for providing the movie API
- [Astro](https://astro.build) for the amazing static site generator
- [Bootstrap](https://getbootstrap.com) for the responsive CSS framework

## 📞 Support

If you have any questions or run into issues, please open an issue on GitHub or contact the maintainers.

---

**Happy movie browsing!** 🍿
