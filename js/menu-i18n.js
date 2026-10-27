/* Menu copy and sample recipes. Item order matches the articles in menu.html. */
const menuCopy = {
  en: {
    brand: "Teaberry Cafe",
    pageTitle: "Menu | Teaberry Cafe",
    description: "Explore the coffee, tea, iced drinks, and desserts at Teaberry Cafe.",
    heading: "Our menu",
    intro: "Coffee, tea, iced drinks, and something sweet.",
    recipe: "How to make it",
    note: "Sample recipes for one serving. Adjust sweetness to taste.",
    nav: "Menu categories",
    back: "Teaberry Cafe, back to top",
    sections: [
      ["Classic coffees", "COFFEE"], ["Milk-based coffees", "COFFEE"],
      ["Iced drinks", "COLD DRINKS"], ["Specialty & flavored drinks", "FAVORITES"],
      ["Tea & milk", "TEA & MORE"], ["Coffee & ice cream", "DESSERT"]
    ],
    items: [
      ["Ristretto Espresso", "18g ground coffee, 18–27g espresso", "Pull a short espresso shot from 18g of finely ground coffee. Stop at 18–27g in the cup."],
      ["Double Espresso", "18g ground coffee, 36g espresso", "Pull a double shot from 18g of finely ground coffee. Aim for about 36g in the cup."],
      ["Lungo Espresso", "18g ground coffee, 54g espresso", "Pull a longer espresso shot from 18g of ground coffee. Stop at about 54g in the cup."],
      ["Americano", "1 espresso, 120ml hot water", "Pour hot water into a cup, then add the espresso."],
      ["Café au Lait", "120ml brewed coffee, 120ml steamed milk", "Brew the coffee. Add an equal amount of hot, lightly steamed milk."],
      ["Black Coffee", "15g ground coffee, 240ml hot water", "Brew with a filter or press, then serve without milk."],
      ["Cappuccino", "1 espresso, 120ml milk", "Pull the espresso. Steam the milk with a thick layer of foam and pour over the shot."],
      ["Latte", "1 espresso, 180ml milk", "Pull the espresso. Steam the milk with a thin layer of foam and pour it in."],
      ["Flat White", "1 double espresso, 120ml milk", "Pull the double espresso. Steam the milk to fine microfoam and pour gently."],
      ["Macchiato", "1 espresso, 1–2 tbsp milk foam", "Pull the espresso and spoon a small amount of milk foam on top."],
      ["Cortado", "1 double espresso, equal volume of warm milk", "Pull the double espresso and add roughly the same volume of lightly steamed milk."],
      ["Mocha", "1 espresso, 1 tbsp chocolate syrup, 150ml milk", "Mix chocolate syrup with espresso. Add steamed milk and stir."],
      ["Iced Coffee", "180ml strong brewed coffee, ice", "Let the coffee cool, then pour it over a glass full of ice."],
      ["Iced Latte", "1 espresso, 180ml cold milk, ice", "Fill a glass with ice and milk. Pour the cooled espresso over it."],
      ["Iced Mocha", "1 espresso, 1 tbsp chocolate syrup, 150ml milk, ice", "Mix espresso with chocolate. Add cold milk and pour over ice."],
      ["Iced Cappuccino", "1 espresso, 120ml milk, ice", "Pour cooled espresso over ice, add cold milk, then top with cold milk foam."],
      ["Cold Brew", "60g coarse coffee, 600ml cold water", "Steep coffee in water in the fridge for 12–16 hours. Strain and serve over ice."],
      ["Hot Chocolate", "200ml milk, 2 tbsp chocolate syrup", "Heat the milk without boiling. Whisk in chocolate syrup until smooth."],
      ["White Chocolate Mocha", "1 espresso, 25g white chocolate, 150ml milk", "Melt white chocolate into hot espresso. Add steamed milk and stir."],
      ["Caramel Latte", "1 espresso, 1 tbsp caramel sauce, 180ml milk", "Stir caramel into espresso. Pour in steamed milk."],
      ["Vanilla Latte", "1 espresso, 1 tsp vanilla syrup, 180ml milk", "Stir vanilla syrup into espresso. Add steamed milk."],
      ["Hazelnut Mocha", "1 espresso, 1 tbsp hazelnut syrup, 1 tsp cocoa, 150ml milk", "Mix espresso, hazelnut syrup and cocoa. Add steamed milk and stir."],
      ["Matcha Latte", "2g matcha, 30ml warm water, 180ml milk", "Whisk matcha with warm water until smooth. Add hot or cold milk."],
      ["Teaberry Tea", "Tea blend, 240ml hot water", "Steep the tea blend in hot water according to its package directions, then strain."],
      ["Herbal Tea", "1 herbal tea bag or 2g dried herbs, 240ml hot water", "Steep in hot water for 5–7 minutes, then remove the bag or strain."],
      ["Steamed Milk", "200ml milk", "Heat and steam the milk until hot and silky. Serve right away."],
      ["Frothy Milk", "200ml milk", "Warm the milk, then froth it with a wand or handheld frother."],
      ["Affogato", "1 scoop vanilla ice cream, 1 espresso", "Place ice cream in a chilled cup and pour hot espresso over it."],
      ["Iced Coffee Float", "200ml iced coffee, 1 scoop vanilla ice cream", "Pour iced coffee into a tall glass and add the ice cream."],
      ["Mocha Affogato", "1 scoop chocolate ice cream, 1 espresso", "Place chocolate ice cream in a cup and pour hot espresso over it."],
      ["Espresso Milkshake", "1 espresso, 2 scoops vanilla ice cream, 100ml milk", "Cool the espresso, then blend it with ice cream and milk until smooth."],
      ["Caramel Coffee Sundae", "2 scoops vanilla ice cream, 1 espresso, 1 tbsp caramel", "Scoop ice cream into a bowl. Add espresso and drizzle with caramel."],
      ["Nutella Affogato", "1 scoop vanilla ice cream, 1 espresso, 1 tsp Nutella", "Add ice cream to a cup. Spoon on Nutella and pour espresso over it."],
      ["Cold Brew Float", "200ml cold brew, 1 scoop vanilla ice cream", "Pour cold brew into a chilled glass and float the ice cream on top."]
    ]
  },
  fr: {
    brand: "Café Teaberry",
    pageTitle: "Menu | Café Teaberry",
    description: "Découvrez les cafés, thés, boissons glacées et desserts du Café Teaberry.",
    heading: "Notre carte",
    intro: "Cafés, thés, boissons glacées et douceurs.",
    recipe: "Préparation",
    note: "Recettes suggérées pour une portion. Ajustez le sucre à votre goût.",
    nav: "Catégories du menu",
    back: "Café Teaberry, retour en haut",
    sections: [
      ["Cafés classiques", "CAFÉ"], ["Cafés au lait", "CAFÉ"],
      ["Boissons glacées", "BOISSONS FROIDES"], ["Boissons gourmandes", "SPÉCIALITÉS"],
      ["Thé et lait", "THÉ ET AUTRES"], ["Café et crème glacée", "DESSERT"]
    ],
    items: [
      ["Espresso ristretto", "18 g de café moulu, 18 à 27 g d’espresso", "Extrayez un espresso court avec 18 g de café finement moulu. Arrêtez à 18 à 27 g en tasse."],
      ["Double espresso", "18 g de café moulu, 36 g d’espresso", "Extrayez un double espresso avec 18 g de café finement moulu. Visez environ 36 g en tasse."],
      ["Espresso lungo", "18 g de café moulu, 54 g d’espresso", "Extrayez un espresso plus long avec 18 g de café moulu. Arrêtez à environ 54 g en tasse."],
      ["Americano", "1 espresso, 120 ml d’eau chaude", "Versez l’eau chaude dans une tasse, puis ajoutez l’espresso."],
      ["Café au lait", "120 ml de café filtre, 120 ml de lait chaud", "Préparez le café. Ajoutez la même quantité de lait chaud, légèrement moussé."],
      ["Café noir", "15 g de café moulu, 240 ml d’eau chaude", "Préparez le café au filtre ou à la cafetière à piston, sans ajouter de lait."],
      ["Cappuccino", "1 espresso, 120 ml de lait", "Préparez l’espresso. Faites mousser le lait généreusement et versez-le sur le café."],
      ["Latte", "1 espresso, 180 ml de lait", "Préparez l’espresso. Chauffez le lait avec une fine mousse et versez-le dans la tasse."],
      ["Flat white", "1 double espresso, 120 ml de lait", "Préparez le double espresso. Faites une micromousse fine et versez doucement."],
      ["Macchiato", "1 espresso, 1 à 2 c. à soupe de mousse de lait", "Préparez l’espresso et déposez un peu de mousse de lait dessus."],
      ["Cortado", "1 double espresso, autant de lait chaud", "Préparez le double espresso et ajoutez environ le même volume de lait légèrement moussé."],
      ["Mocha", "1 espresso, 1 c. à soupe de sirop de chocolat, 150 ml de lait", "Mélangez le chocolat à l’espresso. Ajoutez le lait chaud et remuez."],
      ["Café glacé", "180 ml de café corsé, glaçons", "Laissez refroidir le café, puis versez-le sur un verre rempli de glaçons."],
      ["Latte glacé", "1 espresso, 180 ml de lait froid, glaçons", "Remplissez un verre de glaçons et de lait. Versez l’espresso refroidi dessus."],
      ["Mocha glacé", "1 espresso, 1 c. à soupe de sirop de chocolat, 150 ml de lait, glaçons", "Mélangez l’espresso et le chocolat. Ajoutez le lait froid et versez sur les glaçons."],
      ["Cappuccino glacé", "1 espresso, 120 ml de lait, glaçons", "Versez l’espresso refroidi sur les glaçons. Ajoutez le lait et une mousse de lait froide."],
      ["Infusion à froid", "60 g de café grossièrement moulu, 600 ml d’eau froide", "Laissez infuser au réfrigérateur 12 à 16 heures. Filtrez et servez sur glace."],
      ["Chocolat chaud", "200 ml de lait, 2 c. à soupe de sirop de chocolat", "Chauffez le lait sans le faire bouillir. Incorporez le chocolat au fouet."],
      ["Mocha au chocolat blanc", "1 espresso, 25 g de chocolat blanc, 150 ml de lait", "Faites fondre le chocolat blanc dans l’espresso chaud. Ajoutez le lait chaud."],
      ["Latte au caramel", "1 espresso, 1 c. à soupe de caramel, 180 ml de lait", "Mélangez le caramel à l’espresso, puis versez le lait chaud."],
      ["Latte à la vanille", "1 espresso, 1 c. à thé de sirop de vanille, 180 ml de lait", "Mélangez le sirop de vanille à l’espresso. Ajoutez le lait chaud."],
      ["Mocha à la noisette", "1 espresso, 1 c. à soupe de sirop de noisette, 1 c. à thé de cacao, 150 ml de lait", "Mélangez l’espresso, le sirop et le cacao. Ajoutez le lait chaud."],
      ["Latte au matcha", "2 g de matcha, 30 ml d’eau tiède, 180 ml de lait", "Fouettez le matcha avec l’eau tiède. Ajoutez du lait chaud ou froid."],
      ["Thé Teaberry", "Mélange de thé, 240 ml d’eau chaude", "Laissez infuser selon les indications du mélange, puis filtrez."],
      ["Tisane", "1 sachet ou 2 g de plantes séchées, 240 ml d’eau chaude", "Laissez infuser 5 à 7 minutes, puis retirez le sachet ou filtrez."],
      ["Lait chaud", "200 ml de lait", "Chauffez et faites mousser légèrement le lait. Servez aussitôt."],
      ["Lait mousseux", "200 ml de lait", "Chauffez le lait, puis faites-le mousser au mousseur ou à la buse vapeur."],
      ["Affogato", "1 boule de crème glacée à la vanille, 1 espresso", "Placez la crème glacée dans une tasse froide et versez l’espresso chaud dessus."],
      ["Café glacé flottant", "200 ml de café glacé, 1 boule de crème glacée à la vanille", "Versez le café glacé dans un grand verre et ajoutez la crème glacée."],
      ["Affogato au chocolat", "1 boule de crème glacée au chocolat, 1 espresso", "Placez la crème glacée au chocolat dans une tasse et versez l’espresso chaud dessus."],
      ["Lait frappé à l’espresso", "1 espresso, 2 boules de crème glacée à la vanille, 100 ml de lait", "Laissez refroidir l’espresso, puis mixez-le avec la crème glacée et le lait."],
      ["Coupe café-caramel", "2 boules de crème glacée à la vanille, 1 espresso, 1 c. à soupe de caramel", "Mettez la crème glacée dans une coupe. Ajoutez l’espresso et le caramel."],
      ["Affogato au Nutella", "1 boule de crème glacée à la vanille, 1 espresso, 1 c. à thé de Nutella", "Placez la crème glacée dans une tasse. Ajoutez le Nutella et versez l’espresso."],
      ["Flotteur au café infusé à froid", "200 ml de café infusé à froid, 1 boule de crème glacée à la vanille", "Versez le café froid dans un verre et déposez la crème glacée dessus."]
    ]
  },
  fa: {
    brand: "کافه تی‌بری",
    pageTitle: "منو | کافه تی‌بری",
    description: "قهوه‌ها، چای‌ها، نوشیدنی‌های سرد و دسرهای کافه تی‌بری را ببینید.",
    heading: "منوی ما",
    intro: "قهوه، چای، نوشیدنی سرد و دسر.",
    recipe: "روش تهیه",
    note: "دستورها پیشنهادی و برای یک نفر هستند. شیرینی را به سلیقهٔ خود تنظیم کنید.",
    nav: "دسته‌بندی‌های منو",
    back: "کافه تی‌بری، بازگشت به بالا",
    sections: [
      ["قهوه‌های کلاسیک", "قهوه"], ["قهوه‌های شیری", "قهوه"],
      ["نوشیدنی‌های سرد", "نوشیدنی سرد"], ["نوشیدنی‌های ویژه", "ویژه"],
      ["چای و شیر", "چای و بیشتر"], ["قهوه و بستنی", "دسر"]
    ],
    items: [
      ["اسپرسو ریسترتو", "۱۸ گرم قهوهٔ آسیاب‌شده، ۱۸ تا ۲۷ گرم اسپرسو", "با ۱۸ گرم قهوهٔ ریزآسیاب‌شده عصاره‌گیری کنید و پس از رسیدن به ۱۸ تا ۲۷ گرم نوشیدنی، آن را متوقف کنید."],
      ["اسپرسوی دبل", "۱۸ گرم قهوهٔ آسیاب‌شده، ۳۶ گرم اسپرسو", "با ۱۸ گرم قهوهٔ ریزآسیاب‌شده یک شات دبل بگیرید تا حدود ۳۶ گرم نوشیدنی به دست آید."],
      ["اسپرسو لونگو", "۱۸ گرم قهوهٔ آسیاب‌شده، ۵۴ گرم اسپرسو", "با ۱۸ گرم قهوه عصاره‌گیری طولانی‌تری انجام دهید و در حدود ۵۴ گرم آن را متوقف کنید."],
      ["آمریکانو", "۱ شات اسپرسو، ۱۲۰ میلی‌لیتر آب داغ", "آب داغ را در فنجان بریزید و اسپرسو را به آن اضافه کنید."],
      ["کافه اوله", "۱۲۰ میلی‌لیتر قهوهٔ دمی، ۱۲۰ میلی‌لیتر شیر گرم", "قهوه را دم کنید و همان مقدار شیر گرم با کف کم به آن بیفزایید."],
      ["قهوهٔ سیاه", "۱۵ گرم قهوهٔ آسیاب‌شده، ۲۴۰ میلی‌لیتر آب داغ", "قهوه را با فیلتر یا فرنچ‌پرس دم کنید و بدون شیر سرو کنید."],
      ["کاپوچینو", "۱ شات اسپرسو، ۱۲۰ میلی‌لیتر شیر", "اسپرسو را آماده کنید. شیر را با کف نسبتاً زیاد بخار دهید و روی قهوه بریزید."],
      ["لاته", "۱ شات اسپرسو، ۱۸۰ میلی‌لیتر شیر", "اسپرسو را آماده کنید. شیر را با لایه‌ای نازک از کف بخار دهید و اضافه کنید."],
      ["فلت وایت", "۱ شات اسپرسوی دبل، ۱۲۰ میلی‌لیتر شیر", "اسپرسوی دبل بگیرید. شیر را با کف ریز و یکدست بخار دهید و آرام بریزید."],
      ["ماکیاتو", "۱ شات اسپرسو، ۱ تا ۲ قاشق غذاخوری کف شیر", "اسپرسو را آماده کنید و کمی کف شیر روی آن بگذارید."],
      ["کورتادو", "۱ شات اسپرسوی دبل، شیر گرم به همان حجم", "اسپرسوی دبل را با تقریباً همان حجم شیر گرم و کمی کف مخلوط کنید."],
      ["موکا", "۱ شات اسپرسو، ۱ قاشق غذاخوری سس شکلات، ۱۵۰ میلی‌لیتر شیر", "سس شکلات را با اسپرسو مخلوط کنید. شیر بخارداده‌شده را اضافه کنید."],
      ["قهوهٔ سرد", "۱۸۰ میلی‌لیتر قهوهٔ غلیظ دمی، یخ", "بگذارید قهوه خنک شود، سپس آن را روی یک لیوان پر از یخ بریزید."],
      ["لاتهٔ سرد", "۱ شات اسپرسو، ۱۸۰ میلی‌لیتر شیر سرد، یخ", "لیوان را با یخ و شیر پر کنید و اسپرسوی خنک‌شده را روی آن بریزید."],
      ["موکای سرد", "۱ شات اسپرسو، ۱ قاشق غذاخوری سس شکلات، ۱۵۰ میلی‌لیتر شیر، یخ", "اسپرسو و شکلات را مخلوط کنید. شیر سرد را اضافه کنید و روی یخ بریزید."],
      ["کاپوچینوی سرد", "۱ شات اسپرسو، ۱۲۰ میلی‌لیتر شیر، یخ", "اسپرسوی خنک را روی یخ بریزید. شیر سرد و سپس کف شیر سرد را اضافه کنید."],
      ["کلد برو", "۶۰ گرم قهوهٔ درشت‌آسیاب‌شده، ۶۰۰ میلی‌لیتر آب سرد", "قهوه را ۱۲ تا ۱۶ ساعت در یخچال با آب دم کنید. صاف کنید و با یخ سرو کنید."],
      ["شکلات داغ", "۲۰۰ میلی‌لیتر شیر، ۲ قاشق غذاخوری سس شکلات", "شیر را بدون جوشاندن گرم کنید و سس شکلات را با همزن در آن حل کنید."],
      ["موکای شکلات سفید", "۱ شات اسپرسو، ۲۵ گرم شکلات سفید، ۱۵۰ میلی‌لیتر شیر", "شکلات سفید را در اسپرسوی داغ حل کنید و شیر گرم را بیفزایید."],
      ["لاتهٔ کارامل", "۱ شات اسپرسو، ۱ قاشق غذاخوری کارامل، ۱۸۰ میلی‌لیتر شیر", "کارامل را با اسپرسو مخلوط کنید و شیر بخارداده‌شده را اضافه کنید."],
      ["لاتهٔ وانیل", "۱ شات اسپرسو، ۱ قاشق چای‌خوری شربت وانیل، ۱۸۰ میلی‌لیتر شیر", "شربت وانیل را با اسپرسو مخلوط کنید و شیر گرم را بیفزایید."],
      ["موکای فندق", "۱ شات اسپرسو، ۱ قاشق غذاخوری شربت فندق، ۱ قاشق چای‌خوری کاکائو، ۱۵۰ میلی‌لیتر شیر", "اسپرسو، شربت فندق و کاکائو را مخلوط کنید و شیر گرم را اضافه کنید."],
      ["لاتهٔ ماچا", "۲ گرم ماچا، ۳۰ میلی‌لیتر آب ولرم، ۱۸۰ میلی‌لیتر شیر", "ماچا را با آب ولرم هم بزنید تا یکدست شود. شیر گرم یا سرد را اضافه کنید."],
      ["چای تی‌بری", "ترکیب چای، ۲۴۰ میلی‌لیتر آب داغ", "چای را طبق دستور روی بسته در آب داغ دم کنید، سپس صاف کنید."],
      ["دمنوش گیاهی", "۱ تی‌بگ یا ۲ گرم گیاه خشک، ۲۴۰ میلی‌لیتر آب داغ", "۵ تا ۷ دقیقه دم کنید، سپس تی‌بگ را بردارید یا دمنوش را صاف کنید."],
      ["شیر بخارداده‌شده", "۲۰۰ میلی‌لیتر شیر", "شیر را گرم کنید و با بخار به بافتی نرم و یکدست برسانید. فوری سرو کنید."],
      ["شیر کف‌دار", "۲۰۰ میلی‌لیتر شیر", "شیر را گرم کنید و با نازل بخار یا همزن دستی کف بدهید."],
      ["آفوگاتو", "۱ اسکوپ بستنی وانیلی، ۱ شات اسپرسو", "بستنی را در فنجان خنک بگذارید و اسپرسوی داغ را روی آن بریزید."],
      ["قهوهٔ سرد با بستنی", "۲۰۰ میلی‌لیتر قهوهٔ سرد، ۱ اسکوپ بستنی وانیلی", "قهوهٔ سرد را در لیوان بلند بریزید و بستنی را اضافه کنید."],
      ["آفوگاتوی شکلاتی", "۱ اسکوپ بستنی شکلاتی، ۱ شات اسپرسو", "بستنی شکلاتی را در فنجان بگذارید و اسپرسوی داغ را روی آن بریزید."],
      ["میلک‌شیک اسپرسو", "۱ شات اسپرسو، ۲ اسکوپ بستنی وانیلی، ۱۰۰ میلی‌لیتر شیر", "اسپرسو را خنک کنید و همراه بستنی و شیر در مخلوط‌کن بزنید."],
      ["ساندی قهوه و کارامل", "۲ اسکوپ بستنی وانیلی، ۱ شات اسپرسو، ۱ قاشق غذاخوری کارامل", "بستنی را در ظرف بگذارید. اسپرسو و کارامل را روی آن بریزید."],
      ["آفوگاتوی نوتلا", "۱ اسکوپ بستنی وانیلی، ۱ شات اسپرسو، ۱ قاشق چای‌خوری نوتلا", "بستنی را در فنجان بگذارید. نوتلا و سپس اسپرسو را اضافه کنید."],
      ["کلد برو با بستنی", "۲۰۰ میلی‌لیتر کلد برو، ۱ اسکوپ بستنی وانیلی", "کلد برو را در لیوان خنک بریزید و بستنی را روی آن بگذارید."]
    ]
  }
};

const itemNodes = [...document.querySelectorAll('.item')];
const sectionNodes = [...document.querySelectorAll('.menu-section')];
const navLinks = [...document.querySelectorAll('.category-nav a')];
const languageButtons = [...document.querySelectorAll('[data-language]')];

function setLanguage(language) {
  language = ['en', 'fr', 'fa'].includes(language) ? language : 'en';
  const copy = menuCopy[language];
  document.documentElement.lang = language;
  document.documentElement.dir = language === 'fa' ? 'rtl' : 'ltr';
  document.title = copy.pageTitle;
  document.querySelector('meta[name="description"]').content = copy.description;
  document.querySelector('.hero h1').textContent = copy.heading;
  document.querySelector('.hero-copy').textContent = copy.intro;
  document.querySelector('.brand-name').textContent = copy.brand;
  document.querySelector('.eyebrow').textContent = copy.brand;
  document.querySelector('.site-footer p').textContent = copy.brand;
  document.querySelector('.recipe-note').textContent = copy.note;
  document.querySelector('.category-nav').setAttribute('aria-label', copy.nav);
  document.querySelector('.brand').setAttribute('aria-label', copy.back);

  sectionNodes.forEach((section, index) => {
    const [name, group] = copy.sections[index];
    section.querySelector('h2').textContent = name;
    const number = String(index + 1).padStart(2, '0');
    section.querySelector('.section-number').textContent = `${language === 'fa' ? number.replace(/\d/g, digit => '۰۱۲۳۴۵۶۷۸۹'[digit]) : number} / ${group}`;
    navLinks[index].textContent = name;
  });
  itemNodes.forEach((item, index) => {
    const [name, ingredients, method] = copy.items[index];
    item.querySelector('h3').textContent = name;
    item.querySelector('.ingredients').textContent = ingredients;
    item.querySelector('summary').textContent = copy.recipe;
    item.querySelector('.method').textContent = method;
  });
  languageButtons.forEach(button => {
    const selected = button.dataset.language === language;
    button.setAttribute('aria-pressed', String(selected));
  });
  try { localStorage.setItem('teaberry-language', language); } catch (_) {}
}

languageButtons.forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.language)));
let savedLanguage = 'en';
try { savedLanguage = localStorage.getItem('teaberry-language') || 'en'; } catch (_) {}
setLanguage(savedLanguage);
