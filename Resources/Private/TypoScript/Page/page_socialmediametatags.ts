# Prepare contents to reuse in multiple meta tags
temp.socialmediametacontent = COA
temp.socialmediametacontent {

    site_name = TEXT
    site_name.value = {$company.name}

    title = TEXT
    title.field = title

    description = TEXT
    description.field = description

    url = TEXT
    url.typolink {
        parameter.field = uid
        returnLast = url
        forceAbsoluteUrl = 1
    }

    image = TEXT
    image {
        cObject = FILES
        # Limit to first found image
        cObject.stdWrap.listNum = 1
        cObject {
            references.data = levelmedia:-1,slide
            renderObj = COA
            renderObj.10 = TEXT
            renderObj.10 {
                if.equals = 2
                if.value.data = file:current:type
                typolink {
                    parameter.data = file:current:publicUrl
                    returnLast = url
                    forceAbsoluteUrl = 1
                }
                wrap = |,
            }
        }
    }
}


# Render social media meta tags
[globalVar = LIT:1 = {$site.enableSocialMediaMetaTags}]
page.meta {
    # Facebook Open Graph
    og:title < temp.socialmediametacontent.title
    og:site_name < temp.socialmediametacontent.site_name
    # Valid types are "article", "website" or "product"
    og:type = website
    og:locale < config.locale_all
    og:description < temp.socialmediametacontent.description
    og:url < temp.socialmediametacontent.url
    og:image < temp.socialmediametacontent.image

    # Twitter card
    # Valid types are "summary", "summary_large_image", "photo", "gallery", "app", "player", "product"
    # See https://dev.twitter.com/cards/types
    twitter:card = summary
    twitter:title < temp.socialmediametacontent.title
    twitter:description < temp.socialmediametacontent.description
    twitter:image < temp.socialmediametacontent.image
}
[global]