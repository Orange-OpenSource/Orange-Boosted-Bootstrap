if [ -d ouds-web ]; then rm -rf ouds-web; fi;
mkdir ouds-web;
mv _site/* ouds-web/;
mv ouds-web _site/; 
find _site -type f -print0 | xargs -0 sed -i "" 's/\"\/docs/\"\/ouds-web\/docs/g';