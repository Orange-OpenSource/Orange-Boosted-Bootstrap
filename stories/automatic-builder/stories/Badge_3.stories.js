export default {
    title: 'Components/Badge'
  }
  
  export const Badge_3 = () => {
    return `{{< badge.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<span class="badge bg-{{ .name }}">{{ .name | title }}</span>{{- end -}}
{{< /badge.inline >}}
`
  }