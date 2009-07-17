package org.gwtdraw2d.client;

import com.google.gwt.core.client.JavaScriptObject;

/**
 * Wrapper for draw2d.ToggleButton.
 * @author lautaro.brasseur
 */
public class ToggleButton extends Button {
    /**
     * {@inheritDoc}
     */
    protected native JavaScriptObject create()/*-{
        return new $wnd.draw2d.ToggleButton();
    }-*/;
}
