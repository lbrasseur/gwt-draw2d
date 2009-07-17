package org.gwtdraw2d.client;

import com.google.gwt.core.client.JavaScriptObject;

/**
 * Wrapper for draw2d.ToolPalette.
 * @author lautaro.brasseur
 */
public class ToolPalette extends Window {
    /**
     * {@inheritDoc}
     */
    protected native JavaScriptObject create()/*-{
        return new $wnd.draw2d.ToolPalette();
    }-*/;
}
