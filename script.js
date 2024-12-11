// Список допустимых фраз
const allowedPhrases = [
  "Билли Херрингтон",
  "Дэнни Ли",
  "Ван Даркхольм",
  "Boss of this gym",
  "Professional Muscular Pants Wrestling",
  "House of Detention",
  "Bad Gay Porn Acting 4",
  "Deep Dark Fantasies",
  "Марк Вульфф",
  "Рикардо Милос",
  "Ака-сан",
  "FunnyCraftTeam",
  "GachiGASM",
  "Another victim",
  "Fisting is 300$",
  "Swallow my cum",
  "Fucking slaves",
  "Fuck you,Leatherman",
  "Boy next door",
  "Stick your finger in my ass",
  "I am taking that ass"
];

// Индекс текущей фразы (будет меняться по кругу)
let currentPhraseIndex = 0;

// Получаем элементы DOM
const searchInput = document.getElementById("main__search-input");
const searchButton = document.getElementById("main__search-button");
const luckyButton = document.getElementById("main__lucky-button");
const imagesButton = document.getElementById("header__images-button")

// Функция для посимвольной замены текста
function replaceInputWithPhrase(inputText) {
  const currentPhrase = allowedPhrases[currentPhraseIndex];
  let result = "";

  // Перебираем символы введенного текста
  for (let i = 0; i < inputText.length; i++) {
    // Если индекс символа превышает длину фразы, останавливаем ввод
    if (i >= currentPhrase.length) {
      break;
    }
    // Заменяем символ на соответствующий символ из фразы
    result += currentPhrase[i] || "";
  }

  // Устанавливаем результат в поле ввода
  searchInput.value = result;
}

// Обработчик события для поля ввода
searchInput.addEventListener("input", function () {
  // Получаем текущий текст из поля ввода
  const inputText = searchInput.value;

  // Заменяем текст на соответствующую фразу
  replaceInputWithPhrase(inputText);
});

// Обработчик для кнопки "Поиск в Google"
searchButton.addEventListener("click", function () {
  const query = searchInput.value;
  if (query) {
    window.location.href = `https://www.google.com/search?q=${encodeURIComponent(
      query
    )}`;
  }
});

// Обработчик для кнопки "Мне повезёт!"
luckyButton.addEventListener("click", function () {
  const query = searchInput.value;
  if (query) {
    window.location.href = `https://www.google.com/search?q=${encodeURIComponent(
      query
    )}`;
  }
});

// Обработчик для кнопки "Поиск изображений"
imagesButton.addEventListener('click', function () {
  const query = searchInput.value;
  if (query) {
      // Перенаправляем на страницу Google Images с запросом
      window.location.href = `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(query)}`;
  }
});

// Функция для смены фразы (если нужно менять фразу по кругу)
function cyclePhrases() {
  currentPhraseIndex = (currentPhraseIndex + 1) % allowedPhrases.length;
  // Сбрасываем поле ввода
  searchInput.value = "";
}

// Пример: меняем фразу каждые 10 секунд (по желанию)
setInterval(cyclePhrases, 10000);
