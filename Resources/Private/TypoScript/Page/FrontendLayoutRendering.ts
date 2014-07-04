# Page template
page.10 = FLUIDTEMPLATE
page.10 {
partialRootPath = EXT:{$plugin.templatebootstrap.packageKey}/Resources/Private/Partials/
layoutRootPath = EXT:{$plugin.templatebootstrap.packageKey}/Resources/Private/Layouts/

# Passing values to FLUIDTEMPLATE for later use
settings {
company.name = {$company.name}
company.street = {$company.street}
company.pobox = {$company.pobox}
company.city = {$company.city}
company.phone = {$company.phone}
company.email = {$company.email}
site.url = {$site.url}
}

variables {
pagetitle = TEXT
pagetitle.data = page:title
}


file.stdWrap.cObject = CASE
file.stdWrap.cObject {
key.data = levelfield:-1, backend_layout_next_level, slide
key.override.field = backend_layout

# Default layout
default = TEXT
default.value = EXT:{$plugin.templatebootstrap.packageKey}/Resources/Private/Templates/Page/SingleColumn.html

# Layouts
{$plugin.templatebootstrap.packageKey}__SingleColumn = TEXT
{$plugin.templatebootstrap.packageKey}__SingleColumn.value = EXT:{$plugin.templatebootstrap.packageKey}/Resources/Private/Templates/Page/SingleColumn.html
{$plugin.templatebootstrap.packageKey}__TwoColumns = TEXT
{$plugin.templatebootstrap.packageKey}__TwoColumns.value = EXT:{$plugin.templatebootstrap.packageKey}/Resources/Private/Templates/Page/TwoColumns.html
}
}