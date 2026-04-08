type Tool = {
  id: number;
  name: string;
  description: string;
  category: string;
  url: string;
};

const tools: Tool[] = [
  {
    id: 1,
    name: "ChatGPT",
    description: "Универсальный AI-ассистент для текста, идей, кода и анализа.",
    category: "Ассистенты",
    url: "https://chatgpt.com",
  },
  {
    id: 2,
    name: "Midjourney",
    description: "Генерация изображений по текстовым описаниям.",
    category: "Изображения",
    url: "https://www.midjourney.com",
  },
  {
    id: 3,
    name: "Notion AI",
    description: "AI-функции для заметок, документов и организации работы.",
    category: "Продуктивность",
    url: "https://www.notion.so/product/ai",
  },
  {
    id: 4,
    name: "Claude",
    description: "AI-ассистент для написания текстов, анализа и работы с документами.",
    category: "Ассистенты",
    url: "https://claude.ai",
  },
  {
    id: 5,
    name: "Perplexity",
    description: "Поисковый AI-сервис с ответами и ссылками на источники.",
    category: "Поиск",
    url: "https://www.perplexity.ai",
  },
];

function ToolCard({ tool }: { tool: Tool }) {
  return (
    <div className="rounded-2xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition">
      <div className="mb-3 flex items-center justify-between gap-3">
        <h2 className="text-xl font-semibold">{tool.name}</h2>
        <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">
          {tool.category}
        </span>
      </div>

      <p className="mb-4 text-gray-600">{tool.description}</p>

      <a
        href={tool.url}
        target="_blank"
        rel="noreferrer"
        className="inline-block rounded-xl bg-black px-4 py-2 text-white hover:opacity-90"
      >
        Открыть
      </a>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white px-6 py-10">
      <div className="mx-auto max-w-5xl">
        <header className="mb-10">
          <h1 className="mb-3 text-4xl font-bold">Каталог AI-инструментов</h1>
          <p className="text-lg text-gray-600">
            Подборка полезных сервисов искусственного интеллекта для работы,
            творчества и продуктивности.
          </p>
        </header>

        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </section>
      </div>
    </main>
  );
}