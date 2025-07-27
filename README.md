# CozenTech

A modern, responsive Angular application for CozenTech - a technology solutions company. This project showcases various business solutions, company information, and client testimonials with a beautiful, interactive user interface.

## 🚀 Features

- **Responsive Design**: Modern, mobile-first design with Bootstrap 5
- **Interactive Components**: Hero carousel, testimonials, and animated sections
- **Multiple Pages**: Home, About, Solutions, Blog, Careers, Clients, and Contact
- **Solution Showcase**: Detailed pages for various business solutions including:
  - Global Solutions
  - Staffing Services
  - HR & Payroll
  - Finance Solutions
  - Data Support
  - Mortgage Services
  - Master Vendor Management
  - Training Programs
  - Technology Solutions
- **Smooth Animations**: Custom scroll animations and parallax effects
- **Modern UI/UX**: Glassmorphism effects and modern styling

## 🛠️ Technology Stack

- **Frontend Framework**: Angular 20.1.0
- **UI Framework**: Bootstrap 5.3.3
- **Material Design**: Angular Material 20.1.0
- **Styling**: SCSS with custom mixins and utilities
- **Testing**: Jasmine & Karma
- **Package Manager**: npm

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- Node.js (version 18 or higher)
- npm (comes with Node.js)
- Angular CLI (`npm install -g @angular/cli`)

## 🚀 Getting Started

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Pulimasthan25/cozen-tech.git
cd cozen-tech
```

2. Install dependencies:
```bash
npm install
```

### Development Server

To start a local development server, run:

```bash
npm start
# or
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

### Available Scripts

- `npm start` - Start the development server
- `npm run build` - Build the project for production
- `npm run watch` - Build the project in watch mode
- `npm test` - Run unit tests
- `ng serve` - Start development server
- `ng build` - Build the project
- `ng test` - Run unit tests

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── main/           # Main page components
│   │   ├── pages/          # Page components
│   │   └── shared/         # Shared components
│   ├── constants/          # Application constants
│   ├── directives/         # Custom directives
│   └── services/          # Application services
├── styles/                # Global styles and SCSS files
└── assets/               # Static assets
```

## 🎨 Styling

The project uses SCSS with a well-organized structure:

- `_colors.scss` - Color variables and themes
- `_glassmorphism.scss` - Glassmorphism effects
- `_mixins.scss` - Reusable SCSS mixins
- `_scroll-effects.scss` - Scroll-based animations
- `_shared.scss` - Shared styles
- `_utilities.scss` - Utility classes

## 🧪 Testing

### Unit Tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner:

```bash
npm test
# or
ng test
```

### End-to-End Tests

For end-to-end (e2e) testing:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## 🏗️ Building

To build the project for production:

```bash
npm run build
# or
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. The production build optimizes your application for performance and speed.

## 📝 Code Scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component:

```bash
ng generate component component-name
```

For a complete list of available schematics (components, directives, pipes, etc.):

```bash
ng generate --help
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary to CozenTech.

## 📞 Support

For support and questions, please contact the development team.

## 🔗 Additional Resources

- [Angular Documentation](https://angular.dev/)
- [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli)
- [Bootstrap Documentation](https://getbootstrap.com/docs/)
- [Angular Material Documentation](https://material.angular.io/)
