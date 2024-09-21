var language=navigator.language,langCode=language.substring(0,2);if("zh-TW"===language.substring(0,5)||"zh-HK"===language.substring(0,5)||"zh-MO"===language.substring(0,5))tnum="cn";else switch(langCode){case"zh":tnum="";break;case"en":tnum="en";break;case"fr":tnum="fr";break;case"es":tnum="es";break;case"ru":tnum="ru";break;case"ja":tnum="ja";break;default:tnum="en"}var currentLang=$(".current_lang").attr("data-value");if(tnum!==currentLang){var newLang=$('.more_lang .lang[data-value="'+tnum+'"]'),img=newLang.find("img").attr("src"),langName=newLang.attr("data-name");$(".current_lang .lang-txt").text(langName),$(".current_lang img").attr("src",img),$(".current_lang").attr("data-value",tnum)}function translate(e){$("#title").text(trans[0][e]),$("#introduction").text(trans[1][e]),$("#services").text(trans[2][e]),$("#answers").text(trans[3][e]),$("#photos").text(trans[4][e]),$("#choice").text(trans[5][e]),$("#videos").text(trans[6][e]),$("#navi").text(trans[7][e]),$("#apps").text(trans[8][e]),$("#games").text(trans[9][e]),$("#fer").text(trans[10][e]),$("#officiallangs").text(trans[11][e]),$("#about").text(trans[12][e]),$("#about-text").text(trans[13][e])}$(document).ready(function(){$(document).click(function(e){$(".translate_wrapper, .more_lang").removeClass("active")}),$(".translate_wrapper .current_lang").click(function(e){e.stopPropagation(),$(this).parent().toggleClass("active"),setTimeout(function(){$(".more_lang").toggleClass("active")},5)}),translate(tnum),$(".more_lang .lang").click(function(){$(this).addClass("selected").siblings().removeClass("selected"),$(".more_lang").removeClass("active");var e=$(this).find("img").attr("src"),a=$(this).attr("data-value"),r=$(this).attr("data-name");translate(a),$(".current_lang .lang-txt").text(r),$(".current_lang img").attr("src",e),"ar"==a?$("body").attr("dir","rtl"):"cn"==a?$("html").attr("lang","zh-TW"):$("body").attr("dir","ltr")})});var trans=[{cn:"歡迎來到復網",en:"Welcome to Fuyeor.Ueiby",fr:"Bienvenue sur Fuyéor.Ueiby",es:"Página de Inicio de Fuyeor.Ueiby",ru:"Добро пожаловать в Фуиеор",ja:"「複ネット」へようこそ"},{cn:"復網是一個全球性的社交媒體平臺，提供支持多語言的多種服務和應用。來自全球各地的訪客均可創作或分享包括問答、視頻和圖片等各種形式的內容。在復網尋求解答、分享生活中的精彩瞬間及見解、展現自己。",en:"Fuyeor.Ueiby is a global social media platform that provides multiple services and applications that support multiple languages. Visitors from all over the world can create or share various forms of content, including Q&A, videos, and images. Seeking answers on Fuyeor.Ueiby, sharing exciting moments and insights from life, and showcasing oneself.",fr:"Fuyéor.Ueiby est une plate - forme mondiale de médias sociaux qui offre de nombreux services et applications prenant en charge plusieurs langues. Les visiteurs du monde entier peuvent créer ou partager du contenu sous toutes ses formes, y compris des questions et des réponses, des vidéos et des images. Cherchez des réponses sur maître Fuyéor.Ueiby, partagez des moments passionnants et des sentiments de vie, montrez - vous.",es:'"Fuyeor.Ueiby" es una plataforma global de redes sociales que ofrece múltiples servicios y aplicaciones que admiten múltiples idiomas. Visitantes de todo el mundo pueden crear o compartir diversas formas de contenido, incluyendo preguntas y respuestas, videos e imágenes. Busque respuestas en "Fuyeor.Ueiby", comparta momentos emocionantes y percepciones de la vida y se muestre.',ru:'«Fuyeor.Ueiby» - это глобальная платформа социальных сетей, предлагающая множество сервисов и приложений, поддерживающих многоязычие. Посетители со всего мира могут создавать или делиться контентом в различных формах, включая вопросы и ответы, видео и изображения. Ищите ответы на "Fuyeor.Ueiby", делитесь захватывающими моментами и жизненными ощущениями, показывайте себя.',ja:"「複ネット」は世界的なソーシャルメディアプラットフォームであり、多言語対応の多様なサービスとアプリケーションを提供している。世界中からの訪問者は、Q&A、ビデオ、画像などさまざまな形式のコンテンツを作成したり共有したりすることができます。「複ネット」で答えを求め、生活の中のすばらしい瞬間と見解を分かち合い、自分を見せる。"},{cn:"現在提供的服務：",en:"Current services provided:",fr:"Services actuellement offerts:",es:"Servicios prestados en la actualidad:",ru:"Предоставляемые в настоящее время услуги:",ja:"現在提供されているサービス："},{cn:"復網問答",en:"Fuyeor Answers",fr:"Fuyéor Réponse",es:"Fuyeor Respuesta",ru:"Фуиеор Ответ",ja:"複ネット質問"},{cn:"復網視覺",en:"Fuyeor Photos",fr:"Fuyéor Photos",es:"Fuyeor Fotos",ru:"Фуиеор Фотографии",ja:"複ネット写真"},{cn:"復網視覺精選",en:"Fuyeor Photos Choice",fr:"Fuyéor Sélection de Photos",es:"Fuyeor Selección de Fotos",ru:"Фуиеор Выбор Фотографий",ja:"複ネット写真の選択"},{cn:"復網視頻",en:"Fuyeor Videos",fr:"Fuyéor Vidéo",es:"Fuyeor Vídeos",ru:"Фуиеор Видео",ja:"複ネットビデオ"},{cn:"簡明導航",en:"Web Navi",fr:"Page d'accueil du Navigateur",es:"Navegación del Navegador",ru:"Домашняя страница браузера",ja:"ブラウザのホームページ"},{cn:"在線應用",en:"Web Apps",fr:"Applications Web",es:"Aplicaciones Web",ru:"Веб приложения",ja:"Webアプリケーション"},{cn:"遊戲",en:"Web Games",fr:"Jeux en Réseau",es:"Juegos en Línea",ru:"Веб игры",ja:"ゲームをする"},{cn:"復玥語官網",en:"Fuyeor Fanna",fr:"Fuyéor Fanna",es:"Fuyeor Fanna",ru:"Фуиеор Язык",ja:"復玥語公式サイト"},{cn:"請選擇你的語言以瀏覽官網：",en:"Please select your language to browse the official website:",fr:"Veuillez sélectionner votre langue pour naviguer sur le site officiel:",es:"Por favor, elija su idioma para navegar por el sitio web oficial:",ru:"Пожалуйста, выберите свой язык для просмотра официального сайта:",ja:"あなたの言語を選んでホームページをご覧ください："},{cn:"關於該頁面",en:"About This Page",fr:"À Propos de Cette Page",es:"Sobre Esta Página",ru:"Об этой странице",ja:"このページについて"},{cn:"復網使用 Fuyeor.com 域名。雖然該域名也屬於復網，但目前並不使用它。因此，本頁面用於介紹復網，以及提示及引導您到至服務域名上。",en:"Fuyeor.com domain is used for Fuyeor.Ueiby. Although this domain also belongs to the Fuyeor.Ueiby, it is not currently used. Therefore, this page is used to introduce Fuyeor.Ueiby, as well as to prompt and guide you to the we service domain.",fr:"Le nom de domaine Fuyeor.com est utilisé pour Fuyéor.Ueiby. Bien que ce nom de domaine appartienne également à Fuyéor.Ueiby, il n'est pas encore utilisé. Par conséquent, cette page est utilisée pour présenter Fuyéor.Ueiby, ainsi que pour vous donner des conseils et vous guider dans notre domaine de service.",es:'El nombre de dominio Fuyeor.com se utiliza para "Fuyeor.Ueiby". aunque el nombre de dominio también pertenece a "Fuyeor.Ueiby", aún no se ha utilizado. Por lo tanto, esta página se utiliza para presentar "Fuyeor.Ueiby", así como para alertar y guiarle a nuestro área de servicio.',ru:"Доменное имя Fuyeor.com используется для «Fuyeor.Ueiby». Хотя эта область также относится к «Fuyeor.Ueiby» в настоящее время не используется. Таким образом, эта страница предназначена для введения «Fuyeor.Ueiby», а также подсказки и руководство для вас в нашем домене обслуживания.",ja:"複ネットワークは Fuyeor.com ドメインを使用しています。ドメイン名もマルチネットワークに属していますが、現在は使用されていません。したがって、このページは、マルチネットワークの紹介、およびサービスドメイン名へのプロンプトと誘導に使用されます。"}];


const canvas = document.querySelector(".AnimatedFuyeorCanvas");
const ctx = canvas.getContext("2d");
const backgroundImage = new Image();
const overlayImage = new Image();

let canvasWidth, canvasHeight;
let backgroundWidth, backgroundHeight;
let offset = 0;

backgroundImage.src = "https://pic1.zhimg.com/80/v2-3a7c671e94a502db518237a12935d6cd_720w.png";
overlayImage.src = "https://picx.zhimg.com/80/v2-c245150a1535129ed9a11eddaf6c1780_720w.png";

backgroundImage.onload = () => {
    backgroundWidth = backgroundImage.width;
    backgroundHeight = backgroundImage.height;
    checkReady();
};

overlayImage.onload = () => {
    canvasWidth = overlayImage.width;
    canvasHeight = overlayImage.height;
    checkReady();
};

function checkReady() {
    if (backgroundWidth && canvasWidth) {
        initializeCanvas();
    }
}

function initializeCanvas() {
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    render(); // Initial render without animation
    animate(); // Start animation loop
}

function animate() {
    requestAnimationFrame(() => {
        if (document.scrollingElement.scrollTop < window.outerHeight) {
            offset = (offset + 0.6) % backgroundWidth; // Update offset for animation
            render();
        }
        animate(); // Continue animation loop
    });
}

function render() {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    // Draw the background image with proper tiling
    const repeatCount = Math.ceil(canvasWidth / backgroundWidth) + 1;
    for (let i = 0; i < repeatCount; i++) {
        ctx.drawImage(backgroundImage, -offset + i * backgroundWidth, 0, backgroundWidth, canvasHeight);
    }

    // Draw the overlay image
    ctx.globalCompositeOperation = "xor";
    ctx.drawImage(overlayImage, 0, 0, canvasWidth, canvasHeight);
}
