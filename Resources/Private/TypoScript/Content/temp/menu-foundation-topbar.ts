temp.menu-foundation-topbar = COA
temp.menu-foundation-topbar.wrap = <nav class="top-bar" data-topbar data-options="custom_back_text:false">|</nav>

# Menu title area
temp.menu-foundation-topbar.10 = TEXT
temp.menu-foundation-topbar.10 {
    value = {$company.name}
    wrap (
        <ul class="title-area">
            <li class="name">
                <h1><a href="{$site.url}">|</a></h1>
            </li>
    )
}

# Responsive menu title
temp.menu-foundation-topbar.20 = TEXT
temp.menu-foundation-topbar.20 {
    value.data = LLL:EXT:templatebootstrap/Resources/Private/Language/locallang.xlf:menu
    wrap = <li class="toggle-topbar menu-icon"><a href="#"><span>|</span></a></li></ul>
}

# Main menu structure
temp.menu-foundation-topbar.30 < temp.menu
temp.menu-foundation-topbar.30 {
    wrap = <section class="top-bar-section"><ul>|</ul></section>

    1.CURIFSUB.wrapItemAndSub = <li class="active has-dropdown not-click">|</li>
    1.IFSUB.wrapItemAndSub = <li class="has-dropdown not-click">|</li>
    1.ACTIFSUB.wrapItemAndSub = <li class="active has-dropdown not-click">|</li>

    2 < .1
    2.wrap = <ul class="dropdown">|</ul>
}