# find _site -name "*" -type f | xargs -I '{}' sed -i 's/\"\/docs/\"\/ouds-web\/docs/g'

# find _site -type f | xargs -0 sed -i 's/\"\/docs/\"\/ouds-web\/docs/g'

find _site -type f -print0 | xargs -0 sed -i "" 's/\"\/docs/\"\/ouds-web\/docs/g'