# Usage: sh modify-site.sh
# Modifies the generated `_site` files to be hostable at /ouds-web in `gh-pages` branch

if [ -d ouds-web ]; then rm -rf ouds-web; fi;
mkdir ouds-web;
mv _site/* ouds-web/;
mv ouds-web _site/;

# Replace /docs with /ouds-web/docs
find _site -type f -print0 | xargs -0 sed -i "" 's/\"\/docs/\"\/ouds-web\/docs/g';

# Replace href="/" with href="/ouds-web"
find _site -type f -print0 | xargs -0 sed -i "" 's/href=\"\/\"/href=\"\/ouds-web\"/g';
