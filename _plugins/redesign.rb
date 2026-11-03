require "nokogiri"
require "json"

# Match the theme-generated social markup without loading a complete icon font.
Jekyll::Hooks.register :pages, :post_render do |page|
  next unless page.output.include?("</body>")
  icons = page.site.data.fetch("inline_icons", {})
  doc = Nokogiri::HTML(page.output)
  doc.css("i[class]").each do |icon|
    classes = icon["class"].split
    key = classes.find { |c| c.start_with?("fa-") && !%w[fa-solid fa-brands fa-regular fa-fw fa-lg fa-xl fa-2x fa-3x].include?(c) }
    academic = classes.find { |c| c.start_with?("ai-") }
    next unless key || academic
    key ||= {"ai-google-scholar"=>"fa-graduation-cap", "ai-researchgate"=>"fa-flask", "ai-springer"=>"fa-book-open", "ai-conversation"=>"fa-comments", "ai-orcid"=>"fa-orcid"}.fetch(academic, "fa-book-open")
    data = icons[key]
    next unless data
    svg = Nokogiri::XML::Node.new("svg", doc)
    svg["viewBox"] = data["viewBox"]
    svg["aria-hidden"] = "true"
    svg["focusable"] = "false"
    svg["class"] = "inline-icon"
    data["paths"].each do |d|
      path = Nokogiri::XML::Node.new("path", doc)
      path["d"] = d
      path["fill"] = "currentColor"
      svg.add_child(path)
    end
    icon.replace(svg)
  end
  research = page.site.data.fetch("research_navigation", []).find { |item| item["url"] == page.url }
  if research && research["transition"]
    hero = doc.at_css(".circuit-hero,.thesis-hero,.nrf2-hero,.cyp1-hero,.tkf-hero")
    hero["style"] = [hero["style"], "view-transition-name:#{research['transition']}"].compact.join(";") if hero
  end
  page.output = doc.to_html
end
