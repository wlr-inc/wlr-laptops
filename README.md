# ProductPage Template

A modern, responsive product website template built with HTML, CSS (Tailwind), and JavaScript featuring a dark theme with red accents. Perfect for showcasing products, services, or SaaS applications.

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark Theme**: Modern dark UI with red accent colors
- **Interactive Navigation**: Active page highlighting and smooth transitions
- **Sign-Up Modal**: Consistent modal system across all pages
- **Multi-Page Structure**: Complete website with 6 main pages
- **Social Integration**: Social media icons and links
- **Modern Styling**: Clean, professional design

## Pages Included

- **Home** (`index.html`) - Landing page with hero section
- **About** (`about.html`) - About us/company information
- **Features** (`features.html`) - Product/service features
- **Blog** (`blog.html`) - Blog/news section
- **Contact** (`contact.html`) - Contact information and form
- **Pricing** (`pricing.html`) - Pricing plans and packages

## File Structure

```
new-template/
├── index.html          # Home page
├── about.html          # About page
├── features.html       # Features page
├── blog.html          # Blog page
├── contact.html       # Contact page
├── pricing.html       # Pricing page
├── js/
│   └── modal.js       # Modal functionality
├── favicon.ico        # Tab icon (replace with your own)
├── favicon-32x32.png  # 32x32 favicon (replace with your own)
├── favicon-16x16.png  # 16x16 favicon (replace with your own)
└── README.md          # This file
```

## Favicon Setup

The template includes placeholder favicon links in all HTML files. To add your own tab icons:

1. **Create your favicon files**:

   - `favicon.ico` (standard favicon)
   - `favicon-32x32.png` (32x32 pixel PNG)
   - `favicon-16x16.png` (16x16 pixel PNG)

2. **Place them in the root directory** of your website

3. **The HTML files are already configured** with the proper favicon links

**Note**: The favicon files are placeholders - replace them with your own branded icons.

## Technologies Used

- **HTML5**: Semantic markup structure
- **Tailwind CSS**: Utility-first CSS framework (via CDN)
- **JavaScript**: Interactive modal functionality
- **Font**: Inter font family for modern typography

## Key Components

### Navigation

- Responsive navigation bar
- Active page highlighting with red accent
- Consistent across all pages
- Mobile-friendly hamburger menu ready

### Modal System

- Centralized JavaScript modal functionality
- Sign-up form with Name and Email fields
- Full-width input fields for better UX
- Consistent styling and behavior
- Keyboard and click-outside closing

### Color Scheme

- **Background**: Dark gray (#111827, #1F2937)
- **Text**: White and light gray
- **Accents**: Red (#EF4444, #DC2626)
- **Borders**: Gray variants for subtle contrast

## Getting Started

1. **Download/Clone** the template files
2. **Open** `index.html` in your web browser
3. **Customize** content, colors, and styling as needed
4. **Deploy** to your preferred hosting platform

## Customization

### Colors

The template uses Tailwind CSS classes. To change colors:

- Replace `red-` classes with your preferred color
- Update `bg-gray-` classes for different background shades
- Modify `text-gray-` classes for text colors

### Content

- Edit HTML files to update text content
- Replace placeholder text with your actual content
- Update navigation links and page titles
- Modify social media links in modals

### Styling

- Add custom CSS classes as needed
- Extend Tailwind configuration for custom colors
- Modify spacing and typography using Tailwind utilities

## Modal Functionality

The modal system includes:

- **Open/Close**: Via JavaScript functions
- **Form Fields**: Name and Email inputs
- **Responsive**: Works on all screen sizes
- **Accessible**: Keyboard navigation support
- **Consistent**: Same modal across all pages

### Modal Usage

```javascript
// Open modal
openSignUpModal();

// Close modal
closeSignUpModal();
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Dependencies

- **Tailwind CSS**: Loaded via CDN
- **Inter Font**: Google Fonts
- **No additional frameworks required**

## License

This template is provided by [Simple Web Templates](https://simplewebtemplates.com) and is free to use for personal and commercial projects.

## Credits

**Template Source**: [Simple Web Templates](https://simplewebtemplates.com)  
**Website**: simplewebtemplates.com

Please keep the footer attribution link when using this template.

## Support

For questions or issues:

1. Check the code comments in HTML/JS files
2. Review Tailwind CSS documentation
3. Test in different browsers for compatibility

## Future Enhancements

Potential improvements you can add:

- Backend form submission
- Blog CMS integration
- Shopping cart functionality
- User authentication
- Database integration
- SEO optimization
- Performance optimization

---

**Template Version**: 1.0  
**Last Updated**: September 2025  
**Framework**: Tailwind CSS  
**License**: Free Use
