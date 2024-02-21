/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        // This is a list of all root directories where I will use the Tailwind classes. Tailwind scans
        // these directories for any strings that match any of the tailwind classes.
        "./Views/**/*.{cshtml,js,css}", // Views
        "./wwwroot/**/*.{cshtml,js,css}", // Your static files are included
        ".Pages/**/*.{cshtml,js,css}", // Pages
        ".Areas/**/*.{cshtml,js,css}", // Areas (if you're using these)
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}