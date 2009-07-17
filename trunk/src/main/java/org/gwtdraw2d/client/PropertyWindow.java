package org.gwtdraw2d.client;

import com.google.gwt.core.client.JavaScriptObject;

/**
 * Wrapper for draw2d.PropertyWindow.
 * @author lautaro.brasseur
 */
public class PropertyWindow extends Window {
    /**
     * {@inheritDoc}
     */
    protected final native JavaScriptObject create()/*-{
        return new $wnd.draw2d.PropertyWindow();
    }-*/;
}
