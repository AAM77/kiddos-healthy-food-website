# Healthy Eating for Kids Website

This is an interactive website designed to teach children about the importance of healthy eating in a fun and engaging way. The website features flipping cards and animated images of fruits and vegetables.

## Features

- Interactive cards that flip when clicked
- Animated images that hop or spin when clicked
- Kid-friendly descriptions of fruits and vegetables
- Responsive design that works on all devices
- Culturally appropriate content
- Beautiful illustrations of real fruits and vegetables

## Project Structure

```
healthy-food-website/
├── index.html
├── styles.css
├── script.js
└── images/
    ├── orange.jpg
    ├── watermelon.jpg
    ├── strawberry.jpg
    ├── carrot.jpg
    ├── broccoli.jpg
    └── peppers.jpg
```

## How to Use

1. Simply open the `index.html` file in a web browser to view the website
2. Click on any card to flip it and read more information
3. Click on the images below the cards to see them animate
4. The cards feature beautiful illustrations of:
   - Fruits: Orange, Watermelon, and Strawberry
   - Vegetables: Carrots, Broccoli, and Bell Peppers

## How to Modify

### Changing Animations

To switch between hopping and spinning animations:

1. Open `script.js`
2. Find the line: `let isHopping = true;`
3. Change it to `let isHopping = false;` to make images spin instead of hop

### Adding New Cards

To add new fruits or vegetables:

1. Add a new image to the `images/` directory
2. Copy and paste a card-wrapper div block in `index.html`
3. Update the following in the new block:
   - Card title
   - Image source
   - Description text

### Customizing Styles

To modify the appearance:

1. Open `styles.css`
2. Adjust colors by changing the color values
3. Modify card sizes by changing the width and height values
4. Adjust animation speeds by changing the animation duration values

## Image Handling

The website uses high-quality illustrations of fruits and vegetables:
- Images are optimized for web display
- Card images are displayed at 220x220 pixels
- Clickable animation images are displayed at 100x100 pixels
- All images are responsive and scale appropriately on mobile devices

## Notes

- All content is culturally appropriate and suitable for children aged 5-14
- The website uses simple, clear language that children can understand
- Animations are gentle and not overwhelming
- The design is colorful and engaging without being distracting
- Images are properly scaled and optimized for web use 