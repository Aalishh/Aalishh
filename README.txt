## Инструкция по добавлению изображений

Для создания полноценного сайта с локальными изображениями, добавьте следующие файлы в эту папку:

1. logo.png - логотип PUBG Mobile (для шапки и подвала)
2. hero-bg.jpg - фоновое изображение для главного баннера
3. icon-1.png, icon-2.png, icon-3.png, icon-4.png - иконки для раздела "Особенности игры"

После добавления изображений, отредактируйте файл HTML (index.html), заменив ссылки на внешние изображения на локальные:

Например, замените:
```html
<img src="https://www.pubgmobile.com/images/event/brandAssets/pubgm_horizontal_white.png" alt="PUBG Mobile Logo">
```

На:
```html
<img src="images/logo.png" alt="PUBG Mobile Logo">
```

И замените в CSS-файле (css/styles.css):
```css
.hero {
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://www.pubgmobile.com/en-US/home/images/slide_1.jpg');
    ...
}
```

На:
```css
.hero {
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('../images/hero-bg.jpg');
    ...
}
```

## Рекомендуемые размеры изображений

- logo.png: 200 × 60 пикселей
- hero-bg.jpg: 1920 × 1080 пикселей (высокое качество)
- icon-*.png: 80 × 80 пикселей