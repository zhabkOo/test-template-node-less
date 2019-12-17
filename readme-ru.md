### Перед установкой:

Проверьте, установлена ли у вас node.js. Наберите в терминале:

   ```bash
   node --version
   ```

Если node.js не установлена:

- [установите node.js](https://nodejs.org/ru/)

### Как использовать проект:

#### Создайте свой репозитроий из этого шаблона, используя кнопку "Use This Template" ("Использовать этот шаблон").

Больше информации [здесь](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template).
После создания шаблона, просто клонируйте его и используйте.

#### Или клонируйте проект вручную:

1. склонируйте репозиторий:

   ```bash
   git clone https://github.com/frontend05102019/GULP_TEMPLATE_PROJECT.git
   ```

2. откройте в теминале склонированный проект (можете переименовать папку как захотите)
3. замените ссылку на удаленный репозиторий в git config ссылкой на ваш репозиторий:

   ```bash
   git remote set-url origin <YOUR LINK TO YOUR REMOTE REPO>
   ```

4. замените имя пользователя и email в git config на ваши.

### Как запустить проект:

1. откройте папку проекта в терминале.

2. установите зависимости:

   ```bash
   npm install
   ```

3. запустите проект:

   ```bash
   npm run serve
   ```

##### Проект запустится на localhost:3000.

##### Проект автоматически перезагружает браузер при каждом сохранении.

##### ЧТОБЫ ЗАКОНЧИТЬ РАБОТУ, в теминале нажмите Ctrl+C.

### Как писать код:

1. Вы должны работать ТОЛЬКО в папке /src
2. Весь html код должен быть в /src/index.html
3. Все стили доджны быть в файле /src/styles/main.less. Если вы хотите добавить дополнительные файлы со стилями, добавляйте их в папке src/styles и используйте @import в main.less
4. Все шрифты(если есть) должны быть помещены в папку /src/fonts и импортированы в main.less из этой папки, например:

```bash
    # in /src/styles/main.less
    @font-face {
        font-family: "christmas";
        src: url("../fonts/christmaseve.ttf");
    }
```

5. Все картинки(png, img, svg) должны быть помещены в папку /src/images и импортированы из этой папки, например:

```bash
    # in src/index.html
    <img src="./images/testImage.jpg" alt="test image" />
```
