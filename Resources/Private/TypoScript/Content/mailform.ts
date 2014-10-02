# **********************************************************
# Mailform rendering
# **********************************************************
plugin.tx_form._CSS_DEFAULT_STYLE >
tt_content.mailform.20 {
    stdWrap.wrap >
    # CAUTION!
    # The native "form" extension has some serious bugs before
    # TYPO3 6.2.5. Make sure you update before you use custom
    # form rendering. See also https://forge.typo3.org/issues/31951
    form.layout {
        form (
            <form>
                <containerWrap />
            </form>
        )
        containerWrap (
            <section>
                <elements />
            </section>
        )
        elementWrap (
            <div>
                <element />
            </div>
        )
        # Display message "required" alternatively to asterisk (*)
        #mandatory (
        #    <span class="required-info"><mandatoryvalue /></span>
        #        )
        mandatory (
            <span class="required-info">*</span>
        )
        error (
            <span class="message error">
                <errorvalue />
            </span>
        )
        textline (
            <label><label /></label>
            <div><input /></div>
        )
        textarea (
            <label />
            <textarea />
        )
        select (
            <label />
            <select>
                <elements />
            </select>
        )
        checkbox (
            <input />
            <label />
        )
        checkboxgroup (
            <fieldset>
                <legend />
                <elements />
            </fieldset>
        )
        radio (
            <input />
            <label />
        )
        radiogroup (
            <fieldset>
                <legend />
                <elements />
            </fieldset>
        )
        button (
            <input />
        )
        reset (
            <input />
        )
        submit (
            <input />
        )
    }
}