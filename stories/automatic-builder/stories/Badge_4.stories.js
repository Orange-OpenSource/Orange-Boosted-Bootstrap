export default {
    title: 'Components/Badge'
  }
  
  export const Badge_4 = () => {
    return `{{< badge.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<span class="badge rounded-pill bg-{{ .name }}">{{ .name | title }}</span>{{- end -}}
{{< /badge.inline >}}
`
  }