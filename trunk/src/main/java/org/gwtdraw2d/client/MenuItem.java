package org.gwtdraw2d.client;

import com.google.gwt.core.client.JavaScriptObject;

/**
 * Wrapper for draw2d.MenuItem.
 * @author lautaro.brasseur TODO: Start coding the wrapper!.
 */
public class MenuItem extends Component {
    /**
     * The label.
     */
    private String label;
    /**
     * The URL for the icon.
     */
    private String iconUrl;
    /**
     * The action callback.
     */
    private MenuItemCallback action;

    /**
     * Constructor.
     * @param aLabel The label
     * @param anIconUrl The URL for the icon
     * @param anAction The action callback
     */
    public MenuItem(final String aLabel, final String anIconUrl,
            final MenuItemCallback anAction) {
        this.label = aLabel;
        this.iconUrl = anIconUrl;
        this.action = anAction;
    }

    /**
     * {@inheritDoc}
     */
    protected final native JavaScriptObject create() /*-{
        var label = this.@org.gwtdraw2d.client.MenuItem::label;
        var iconUrl = this.@org.gwtdraw2d.client.MenuItem::iconUrl;
        var action = this.@org.gwtdraw2d.client.MenuItem::action;

        var actionFunc = null;

        if (action) {
            var localThis = this;
            actionFunc = function() {
                action.@org.gwtdraw2d.client.MenuItemCallback::onSelect(Lorg/gwtdraw2d/client/MenuItem;)(localThis);
            }
        }

        return new $wnd.draw2d.MenuItem(label, iconUrl, actionFunc);
    }-*/;
    
    /**
     * Gets the menu label.
     * @return The label
     */
    public final native String getLabel() /*-{
        var jsThis = this.@org.gwtdraw2d.client.MenuItem::getJsObj()();
        return jsThis.getLabel();
    }-*/;

}
