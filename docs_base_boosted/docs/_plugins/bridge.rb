require 'yaml'

module Bridge
  class Generator < Jekyll::Generator
    def generate(site)
      site.data["configBridge"] = YAML.load_file("./docs_generated/grunt/configBridge.json")
    end
  end
end