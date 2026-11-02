require "cgi"
require "json"
Jekyll::Hooks.register :pages, :post_render do |page|
  doi = page.data["paper_doi"]
  next unless doi && page.output.include?("</head>")
  paper = page.site.data.fetch("papers", []).find { |p| p["doi"] == doi }
  next unless paper
  absolute = page.site.config["url"].to_s + page.site.config["baseurl"].to_s
  image = absolute + page.data["og_image"].to_s
  # Replace inherited preview tags so crawlers receive one unambiguous image.
  page.output.gsub!(/<meta\s+[^>]*(?:property|name)=["'](?:og:image(?::width|:height)?|twitter:image|twitter:card)["'][^>]*>/i, "")
  tags = {"citation_title" => paper["title"], "citation_journal_title" => paper["journal"], "citation_publication_date" => paper["published"].to_s, "citation_doi" => doi, "citation_volume" => paper["volume"], "citation_issue" => paper["issue"], "citation_firstpage" => paper["pages"]&.to_s&.split("-")&.first}
  head = tags.reject { |_,v| v.nil? || v.to_s.empty? }.map { |k,v| %(<meta name="#{k}" content="#{CGI.escapeHTML(v.to_s)}">) }
  Array(paper["authors"]).each { |author| head << %(<meta name="citation_author" content="#{CGI.escapeHTML(author)}">) }
  head << %(<meta property="og:image" content="#{CGI.escapeHTML(image)}"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:image" content="#{CGI.escapeHTML(image)}">)
  schema = {"@context"=>"https://schema.org", "@type"=>"ScholarlyArticle", "headline"=>paper["title"], "author"=>Array(paper["authors"]).map { |a| {"@type"=>"Person", "name"=>a} }, "datePublished"=>paper["published"].to_s, "identifier"=>doi, "sameAs"=>"https://doi.org/#{doi}", "url"=>absolute+page.url, "image"=>image, "isPartOf"=>{"@type"=>"Periodical", "name"=>paper["journal"]}}
  head << %(<script type="application/ld+json">#{JSON.generate(schema).gsub('<', '\u003c')}</script>)
  page.output.sub!("</head>", head.join("\n") + "\n</head>")
end

# Static citation files also work without JavaScript and can be linked directly.
module ResearchCitations
  class Generator < Jekyll::Generator
    safe true
    priority :normal
    def generate(site)
      site.data.fetch("papers", []).each do |paper|
        escape = ->(value) { value.to_s.gsub(/[\\{}%&#_$]/) { |c| "\\" + c } }
        fields = {"title"=>"{" + escape.call(paper["title"]) + "}", "author"=>Array(paper["authors"]).map { |a| escape.call(a) }.join(" and "), "journal"=>escape.call(paper["journal"]), "year"=>paper["year"], "volume"=>paper["volume"], "number"=>paper["issue"], "pages"=>paper["pages"] || paper["article"], "doi"=>paper["doi"], "url"=>"https://doi.org/#{paper['doi']}"}
        slug = Jekyll::Utils.slugify(paper["doi"])
        entry = Jekyll::PageWithoutAFile.new(site, site.source, "assets/citations", slug + ".bib")
        entry.data = {"layout"=>nil, "sitemap"=>false}
        entry.content = "@article{#{slug},\n" + fields.reject { |_,v| v.nil? || v.to_s.empty? }.map { |k,v| "  #{k} = {#{v}}" }.join(",\n") + "\n}\n"
        site.pages << entry
      end
    end
  end
end
