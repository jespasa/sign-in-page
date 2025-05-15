# Nuxt Sign In Page

This project is a modern and accessible sign-in page built with **Nuxt 3**. It features reusable components, dark mode support, CSS variables, and best practices for structure and accessibility.

## Features

- ⚡ **Nuxt 3**: Modern framework for Vue applications.
- 🎨 **Global styles and CSS variables**: Easily customize colors, fonts, and sizes.
- 🌙 **Dark mode**: Automatic support based on user preference.
- 🧩 **Reusable components**: Button, input form, social sign-in section, footer, and more.
- 📱 **Responsive**: Adapts to mobile and desktop devices.
- ♿ **Accessibility**: Uses semantic tags and best practices for users with special needs.

## Project Structure

```
assets/css/
  ├── reset.css
  ├── variables.css
  └── global.css
components/
  ├── AppLayout.vue
  ├── FooterLayout.vue
  ├── SignInWith.vue
  └── ui/
      ├── Button.vue
      └── InputForm.vue
pages/
  └── ...
public/
  └── icons/
      ├── Google.svg
      └── facebook.svg
app.vue
nuxt.config.ts
```

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/nuxt-sign-in-page.git
   cd nuxt-sign-in-page
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

- Visit `http://localhost:3000` to view the sign-in page.
- Customize styles by editing files in `assets/css/`.
- Add or edit components as needed.

## Customization

- Change colors and fonts in `assets/css/variables.css`.
- Add more button or input variants in the `components/ui/` folder.
- Modify the layout in `components/AppLayout.vue`.

## License

MIT

---

**Developed with ❤️ using Nuxt 3**
