<script setup>
import { useRoute, useRouter } from "vue-router";
import { computed, onMounted, ref } from "vue";
import OpenAI from "openai"
import { api } from "@/api/index.js";

const router = useRouter()
const route = useRoute()

const goToTask = async () => {
  await router.push('/posts')
}

const answers = ref('')
const clientId = ref(`${import.meta.env.VITE_CLIENT_ID}`)
const redirectUrl = ref('https://khalbay.github.io/autoJobs/')


const wac = `Мы аккредитованная ИТ-компания Smartdata.dev, занимаемся разработкой отраслевых продуктов в сфере обращения с отходами, в сфере экотуризма, а так же создаем корпоративные продукты для управления предприятием.

Ищем в команду Иркутска разработчика на Cuba платформе (Jmix). Рассматриваем кандидатов в Иркутском часовом поясе.

Чем предстоит заниматься:

Разработка и доработка систем;
Реализация интеграционных решений;
Оптимизация существующих решений, повышение отказоустойчивости систем;
Что мы ждём от кандидата:

профильное высшее образование;
опыт работы Java-разработчиком от 2 лет;
опыт работы с БД PostgreSQL и написание сложных SQL-запросов;
знание Spring Framework;
навыки работы с Git;
опыт работы с CUBA/JMIX Platform для разработки корпоративных приложений - будет как преимущество.
Что мы гарантируем тебе:

гибкую вилку по з/п в соответствии с твоим профессиональным уровнем middle/senior/team lead (по результатам тех.собеседования);
система квартальных и годовых премий;
фуллтайм с гибко настраиваемый графиком дня;
возможность работать удаленно или в офисе (в Иркутске, в Улан-Удэ);
поддержка участия в активностях от it-сообществ, в прохождение обучения, сертификации и пр;
трудовой договор (возможно оформление как самозанятого).
Ждём твой отклик на вакансию!

В нашей команде более 80 сотрудников: Java, React, Vue, Flutter, 1C, UX, QA, Devops, машинное обучение.

Присоединяйся к команде smartdata.dev!`


const wac2 = `Хочешь участвовать в разработке действительно high-load продукта в сфере Digital рекламы? Тогда присоединяйся к нашей команде!
На текущий момент мы в поиске Frontend-разработчика в нашу команду (10 человек)

Формат работы:

Работа в офисе, пятидневная рабочая неделя
Удалённая или гибридная работа не рассматривается
Аккредитация ИТ:

Компания имеет статус аккредитованной ИТ-компании
Стек продукта:
JavaScript, TypeScript
Vue 3
Vite
Pinia
SCSS
Jest
Webpack (в отдельных частях)

Приоритеты продукта:

Минимальный вес и быстрая загрузка
Легкая встраиваемость
Удобное взаимодействие с браузерными API
Высокая производительность
Код пишется на чистом TypeScript с Vue 3

Основные задачи:

Разработка нового функционала на TypeScript и Vue 3
Поддержка текущей кодовой базы (фичи, багфиксы)
Написание и проведение тестов
Работа с REST API
Оптимизация производительности и сборки
Ожидаем от кандидата:

Коммерческий опыт от 3 лет
Отличное знание JS и TS
Уверенное владение Vue 3 и понимание Composition API
Опыт с Vite, Pinia
Знание HTTP, REST API, CORS
Опыт работы с SCSS
Понимание ООП, SOLID
Внимательность, инициативность, стремление к росту

Мы предлагаем:

Оформление по ТК РФ
Конкурентную заработную плату (обсуждается на финальной встрече)
ДМС после 6 месяцев работы
Комфортный офис в БЦ Сенатор (СПб): Xbox, массажное кресло, кофе, чай, печеньки, завтрак
Гибкий старт рабочего дня: с 9:00 до 11:00
Отличная команда, без атмосферы стартапа
Современное оборудование и софт
Внутреннее обучение, конференции
Активная корпоративная жизнь

Если тебе интересен современный стек, важна архитектура и производительность, и ты хочешь развиваться в команде профессионалов — мы ждём тебя!`

const me = ` у меня 4 летний опыт работы во "фронте", как в продуктовой так и в аутсорс разработке.

Касательно опыта - текущий стек выглядит следующим образом:
- Vue 3 (3 года опыта/ Compositions API)
- JavaScript (3 года опыта / сложная бизнес логика)
- TypeScript (1 год опыта / статическая типизация / дженерики)
- Pinia / Vuex (2 года опыта)
- Vue router / SPA (2 года опыта)
- Vuetify / Quasar (+capacitor) (2 года опыта)
- Vite / Webpack (3 года опыта / настройка конфигов и сборок)
- HTML5 / CSS3 / SASS & SCSS (4 года опыта)
- RestAPI (3 года опыта)

Не основное
- Yarn / NPM / Docker
- Git / Trello / Figma / Slack / ActiveCollab / Confluence
- ООП / DRY / BEM / SOLID

Ещё работал с такими технологиями, но без коммерческого опыта:
- React
- WebSocket
- Node.js
- Nuxt / SSR
- PostgreSQL / MySQL`



const client = new OpenAI({
  baseURL: "https://api.scaleway.ai/32cc3102-a1b3-44f4-bfee-31d571260fc2/v1",
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

async function complete_request() {
  const stream = await client.chat.completions.create({
    model:"deepseek-r1-distill-llama-70b",
    messages: [
      { "role": "system", "content": "Ты специалист в подборе вакансий и написанию сопроводительных писем" },
      { "role": "user",
        "content": `Есть вакансия. Надо сравнить мой опыт и требуемый. Если я подхожу на более чем 60%, составь
                   сопроводительное письмо исходя из опыта и требований(только само письмо без оформления и других слов,
                   чтобы я скопировал ответ и вставил и там не было ничего лишнего. И надо сделать в 700-900 слов).
                   Если нет, ответь просто "false" (чтобы я отфильтровал вакансии по твоему ответу). Вот вакансия:
                   ${wac2}. А вот мой опыт: ${me}`
      },
    ],
    max_tokens: 3000,
    temperature: 0.6,
    top_p: 0.5,
    presence_penalty: 0,
    stream: true,
  })
  for await (const chunk of stream) {
    answers.value += chunk.choices[0]?.delta?.content || ''
  }
}

const auth = async () => {
  const hhAuthUrl = `https://hh.ru/oauth/authorize?response_type=code&client_id=${clientId.value}&redirect_uri=${redirectUrl.value}`
  window.location.href = hhAuthUrl
}

// complete_request()

onMounted(async () => {
  const code = await route.query.code
  if (code) {
    const data = {
      client_id: clientId.value,
      code: code,
      grant_type: "authorization_code",
      redirect_uri: redirectUrl.value,
      client_secret: import.meta.env.VITE_CLIENT_SECRET,
    }
    const res = await api.auth.getToken(data)
    console.log(res)
  }
})
</script>

<template>
  <div class="welcome">
    <h1>Авторизация</h1>
<!--    <div class="welcome__section">-->
<!--      >{{ answers }}<-->
<!--    </div>-->
    <button @click="auth">Вход</button>
<!--    <button @click="goToTask">goToTask</button>-->
  </div>
</template>

<style lang="scss" scoped>
.welcome {
  text-align: center;

  &__section {
    display: flex;
    gap: 20px;
  }

  &__side {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    flex: 1 1 0;

    &.revert {
      align-items: flex-start;
    }
  }

  &__img {
    width: 212px;
    height: 378px;
  }
}

.cont {
  display: flex;
  gap: 10px;
  justify-content: center;
}
</style>