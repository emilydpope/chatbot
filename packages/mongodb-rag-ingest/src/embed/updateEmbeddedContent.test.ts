import { EmbeddedContentStore, EmbeddedContent, Page } from "mongodb-rag-core";
import { updateEmbeddedContent } from "./updateEmbeddedContent";
import { persistPages } from "../pages";
import { makeMockPageStore } from "../test/MockPageStore";

export const makeMockEmbeddedContentStore = (): EmbeddedContentStore => {
  const content: Map<string /* page url */, EmbeddedContent[]> = new Map();
  return {
    async deleteEmbeddedContent({ page }) {
      content.set(page.url, []);
    },
    async findNearestNeighbors() {
      return [];
    },
    async loadEmbeddedContent({ page }) {
      return content.get(page.url) ?? [];
    },
    async updateEmbeddedContent({ embeddedContent, page }) {
      content.set(page.url, [...embeddedContent]);
    },
  };
};

const examplePage: Page = {
  title: "Example",
  body: "this is a test page. testy test test test test test test test test. more tokens!",
  format: "md",
  sourceName: "test",
  metadata: {
    tags: [],
  },
  url: "https://example.com/test",
};

const embedder = {
  async embed() {
    return { embedding: [1, 2, 3] };
  },
};

describe("updateEmbeddedContent", () => {
  it("deletes embedded content for deleted page", async () => {
    const pageStore = makeMockPageStore();

    await persistPages({
      pages: [{ ...examplePage }],
      store: pageStore,
      sourceName: "test",
    });
    let pages = await pageStore.loadPages();
    expect(pages).toHaveLength(1);

    const embeddedContentStore = makeMockEmbeddedContentStore();

    const since = new Date("2000-01-01");

    await updateEmbeddedContent({
      embedder,
      embeddedContentStore,
      pageStore,
      since,
    });

    let embeddedContent = await embeddedContentStore.loadEmbeddedContent({
      page: examplePage,
    });
    expect(embeddedContent).toHaveLength(1);

    await persistPages({
      pages: [],
      store: pageStore,
      sourceName: "test",
    });
    pages = await pageStore.loadPages();
    expect(pages).toHaveLength(1);
    expect(pages[0].action).toBe("deleted");

    await updateEmbeddedContent({
      embedder,
      embeddedContentStore,
      pageStore,
      since,
    });
    embeddedContent = await embeddedContentStore.loadEmbeddedContent({
      page: examplePage,
    });
    // Embedded content for page was deleted
    expect(embeddedContent).toHaveLength(0);
  });
  it("updates page if chunk algorithm changes", async () => {
    const pageStore = makeMockPageStore();

    await persistPages({
      pages: [{ ...examplePage }],
      store: pageStore,
      sourceName: "test",
    });
    const pages = await pageStore.loadPages();
    expect(pages).toHaveLength(1);

    const embeddedContentStore = makeMockEmbeddedContentStore();

    const since = new Date("2000-01-01");

    await updateEmbeddedContent({
      embedder,
      embeddedContentStore,
      pageStore,
      since,
      embedConcurrencyOptions: {
        processPages: 10,
        createChunks: 5
      }
    });

    const embeddedContent = await embeddedContentStore.loadEmbeddedContent({
      page: examplePage,
    });
    expect(embeddedContent).toHaveLength(1);
    expect(embeddedContent[0].chunkAlgoHash).toBe(
      // You might need to update this expectation when the standard chunkPage
      // function changes
      "49d78a1d6b12ee6f433a2156060ed5ebfdefb8a90301f1c2fb04e4524944c5eb"
    );
    await updateEmbeddedContent({
      embedder,
      embeddedContentStore,
      pageStore,
      since,
      chunkOptions: {
        // Changing options impacts the chunkAlgoHash
        chunkOverlap: 2,
      },
      embedConcurrencyOptions: {
        processPages: 10,
        createChunks: 5
      }
    });
    const embeddedContent2 = await embeddedContentStore.loadEmbeddedContent({
      page: examplePage,
    });
    expect(embeddedContent2).toHaveLength(1);
    expect(embeddedContent2[0].chunkAlgoHash).toBe(
      // You might need to update this expectation when the standard chunkPage
      // function changes
      "2cbfe9901657ca15260fe7f58c3132ac1ebd0d610896082ca1aaad0335f2e3f1"
    );
  });
});
