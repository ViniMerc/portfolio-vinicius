import { useEffect, useState } from "react";
import { fetchGitHubRepositories } from "../services/githubService";

export default function HighlightsSection() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    setError(null);

    fetchGitHubRepositories()
      .then((data) => {
        if (!mounted) return;
        const highlights = (data || [])
          .filter((r) => {
            const d = r.description || "";
            return d.trim().startsWith("*");
          })
          .map((r) => ({
            id: r.id,
            name: r.name,
            html_url: r.html_url,
            homepage: r.homepage,
            description: (r.description || "").replace(/^\*\s*/, ""),
            language: r.language,
            stargazers_count: r.stargazers_count,
          }));
        setRepos(highlights);
      })
      .catch((err) => {
        if (!mounted) return;
        setError(err?.message || "Erro ao buscar repositórios");
      })
      .finally(() => {
        if (!mounted) return;
        setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, []);

  // reset index when repos change
  useEffect(() => {
    setIndex(0);
  }, [repos]);

  const prev = () => {
    if (repos.length <= 1) return;
    setIndex((i) => (i - 1 + repos.length) % repos.length);
  };

  const next = () => {
    if (repos.length <= 1) return;
    setIndex((i) => (i + 1) % repos.length);
  };

  return (
    <section style={{ margin: "2rem 0", zIndex: 2 }}>
      <h2 style={{ marginBottom: "0.5rem", textAlign: "center" }}>Destaques</h2>

      {loading && <p>Carregando destaques...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && !error && repos.length === 0 && (
        <p>Nenhum repositório público com descrição iniciando por "*".</p>
      )}

      {!loading && !error && repos.length > 0 && (
        <div
          style={{
            position: "relative",
            padding: "1rem",
            borderRadius: 12,
            background: "rgba(0,0,0,0.92)", // ainda mais escuro
            border: "1px solid rgba(255,255,255,0.06)",
            display: "flex",
            alignItems: "stretch",
            gap: "1rem",
            overflow: "hidden",
            minHeight: 220, // altura maior
          }}
        >
          {/**
           * Usa a imagem gerada pelo Open Graph do GitHub como preview.
           * Se preferir outra fonte de imagem, adapte aqui.
           */}
          {(() => {
            const r = repos[index];
            const ogImage = `https://opengraph.githubassets.com/1/ViniMerc/${r.name}`;
            return (
              <>
                <div
                  style={{
                    flex: "0 0 220px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0.5rem",
                  }}
                >
                  <img
                    src={ogImage}
                    alt={`${r.name} preview`}
                    style={{
                      width: "100%",
                      height: 160,
                      objectFit: "cover",
                      borderRadius: 8,
                      boxShadow: "0 4px 14px rgba(0,0,0,0.6)",
                      background: "#111",
                    }}
                  />
                </div>

                <div
                  style={{
                    flex: 1,
                    color: "#e6e6e6",
                    display: "flex",
                    flexDirection: "column",
                    minWidth: 0,
                  }}
                >
                  {/* título e paginação na mesma linha (paginacao no canto superior direito) */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      gap: 12,
                      marginBottom: 6,
                    }}
                  >
                    <div
                      style={{
                        fontWeight: 800,
                        color: "#9ad1ff",
                        fontSize: 22, // fonte maior para o título
                        lineHeight: 1.1,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        minWidth: 0,
                      }}
                      title={r.name}
                    >
                      {r.name}
                    </div>

                    <div style={{ color: "#9aa", fontSize: 12, alignSelf: "center" }}>
                      {index + 1} / {repos.length}
                    </div>
                  </div>

                  <p
                    style={{
                      margin: "0 0 0.5rem 0",
                      color: "#dcdcdc",
                      lineHeight: 1.4,
                      overflow: "hidden",
                      display: "-webkit-box",
                      WebkitLineClamp: 5,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {r.description}
                  </p>

                  <div
                    style={{
                      marginTop: "auto",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    {/* botões Código / Demo e linguagem ao lado do Demo */}
                    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                      <a
                        href={r.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 8,
                          padding: "8px 12px",
                          borderRadius: 8,
                          background: "rgba(255,255,255,0.06)",
                          color: "#e6f7ff",
                          textDecoration: "none",
                          fontWeight: 600,
                        }}
                        aria-label="Código"
                      >
                        Código
                      </a>

                      {r.homepage ? (
                        <a
                          href={r.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 8,
                            padding: "8px 12px",
                            borderRadius: 8,
                            background: "rgba(255,255,255,0.06)",
                            color: "#e6f7ff",
                            textDecoration: "none",
                            fontWeight: 600,
                          }}
                          aria-label="Demo"
                        >
                          Demo
                        </a>
                      ) : (
                        <button
                          disabled
                          style={{
                            padding: "8px 12px",
                            borderRadius: 8,
                            background: "rgba(255,255,255,0.03)",
                            color: "#777",
                            border: "none",
                            fontWeight: 600,
                            cursor: "not-allowed",
                          }}
                          aria-label="Demo indisponível"
                        >
                          Demo
                        </button>
                      )}

                      {/* linguagem ao lado dos botões */}
                      <small style={{ color: "#bbb", marginLeft: 6 }}>
                        {r.language ?? ""}
                      </small>
                    </div>

                    {/* espaço à direita (pode conter outros metadados no futuro) */}
                    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                      {/* vazio por enquanto */}
                    </div>
                  </div>
                </div>
              </>
            );
          })()}

          {/* botões de navegação no canto inferior direito */}
          <div
            style={{
              position: "absolute",
              right: 12,
              bottom: 12,
              display: "flex",
              gap: 8,
            }}
          >
            <button
              onClick={prev}
              aria-label="Anterior"
              disabled={repos.length <= 1}
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                border: "none",
                background: "rgba(255,255,255,0.12)",
                color: "#111",
                cursor: repos.length > 1 ? "pointer" : "not-allowed",
              }}
            >
              ←
            </button>
            <button
              onClick={next}
              aria-label="Próximo"
              disabled={repos.length <= 1}
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                border: "none",
                background: "rgba(255,255,255,0.12)",
                color: "#111",
                cursor: repos.length > 1 ? "pointer" : "not-allowed",
              }}
            >
              →
            </button>
          </div>
        </div>
      )}
    </section>
  );
}