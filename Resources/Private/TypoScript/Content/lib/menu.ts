# --------------------------------------------------------------------------------------------------
# Menü
# --------------------------------------------------------------------------------------------------

lib.menu = HMENU
lib.menu {
    entryLevel = 0
    excludeUidList =

    #Ebene 1
    1 = TMENU
    1 {
    #ausklappen aller menupunkte
        expAll = 1

	  #Javascript deaktivieren
        noBlur = 1

	  #Wrap
        wrap = <ul> | </ul>

        NO = 1
        NO.wrapItemAndSub = <li class="first"> | </li> |*| <li> | </li> |*| <li class="last"> | </li>

        ACT = 1
        ACT.wrapItemAndSub = <li class="first act"> | </li> |*| <li class="act"> | </li> |*| <li class="last act"> | </li>
        ACT.doNotLinkIt = 0
    }

	#Ebene 2
    2 < .1
	#Ebene 3
    3 < .2
}