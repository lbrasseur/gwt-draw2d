package org.gwtdraw2d.client;

import com.google.gwt.core.client.JavaScriptObject;

/**
 * Wrapper for draw2d.PropertyDialog.
 * @author lautaro.brasseur
 */
public class PropertyDialog extends Dialog {
    /**
     * {@inheritDoc}
     */
    protected final native JavaScriptObject create()/*-{
        return new $wnd.draw2d.PropertyDialog();
    }-*/;
}
